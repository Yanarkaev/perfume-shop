import { Button, Paper } from "..";
import s from "./SuccessOrderModal.module.scss";
import { createPortal } from "react-dom";
import clsx from "clsx";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/storeProvider/hooks";
import { getOrderSelector } from "../../../entities/Order/model/selectors/brand.selector";
import { orderActions } from "../../../entities/Order/model/slice/orderSlice";
import { useState } from "react";

export const SuccessOrderModal = () => {
  const dispatch = useAppDispatch();
  const { isSuccessOrder } = useAppSelector(getOrderSelector);
  const [showModal, setShowModal] = useState(isSuccessOrder);

  const closeModal = () => {
    setShowModal(false);
    const timeout = setTimeout(() => {
      dispatch(orderActions.setIsSuccessOrder(false));
      clearTimeout(timeout);
    }, 300);
  };

  return createPortal(
    <div
      className={clsx(s.SuccessOrderModal, {
        [s.showModal]: showModal,
        [s.closeModal]: !showModal,
      })}
    >
      <div className={s.backdrop}></div>
      <Paper className={s.SuccessOrderModalInner}>
        <p className={s.successTitle}>Заказ успешно оформлен</p>
        <h4 className={s.thanksTitle}>Благодарим за покупку!</h4>
        <p className={s.waitDelivery}>Ожидайте доставки</p>

        <Button className={s.btn} onClick={closeModal}>
          Закрыть
        </Button>
      </Paper>
    </div>,
    document.body
  );
};
