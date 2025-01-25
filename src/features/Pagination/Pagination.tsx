import s from "./Pagination.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../app/providers/storeProvider/hooks";
import { getProductListSelector } from "../../pages/ProductListPage/model/selectors/product.selector";
import { Button } from "../../shared/ui";
import { useEffect, useState } from "react";
import { fetchProductListThunk } from "../../pages/ProductListPage/model/services/fetchProductListThunk";
import clsx from "clsx";
import { productListActions } from "../../pages/ProductListPage/model/slice/productListSlice";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const {
    data,
    filters,
    pagination: { page, limit },
  } = useAppSelector(getProductListSelector);

  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  useEffect(() => {
    if (data) {
      const pages = Array(data.totalPages)
        .fill(1)
        .map((_, index) => (index += 1))
        .filter(
          (el) =>
            el === 1 ||
            el + 1 === page ||
            el - 1 === page ||
            el === page ||
            el === data.totalPages
        );

      // setCurrentPage(+data?.currentPage);
      setVisiblePages(pages);
    }
  }, [data]);

  useEffect(() => {
    if (page) {
      dispatch(
        fetchProductListThunk({
          ...filters,
          limit: limit,
          page: page,
        })
      );
    }
  }, [page]);

  const handlePrevPage = () => {
    dispatch(productListActions.setPaginationPage("dec"));
  };

  const handleNextPage = () => {
    dispatch(productListActions.setPaginationPage("inc"));
  };

  const setPage = (n: number) => {
    dispatch(productListActions.setPaginationPage(n));
  };

  return data?.totalPages ? (
    <div className={s.Pagination}>
      <Button onClick={handlePrevPage} disabled={page === 1}>
        {"<"}
      </Button>

      {visiblePages.map((el) => (
        <Button
          key={el}
          variant={el === page ? "success" : "primary"}
          className={clsx({ [s.currentPage]: el === page })}
          onClick={() => setPage(el)}
        >
          {el}
        </Button>
      ))}
      <Button onClick={handleNextPage} disabled={page === data.totalPages}>
        {">"}
      </Button>
    </div>
  ) : (
    ""
  );
};
