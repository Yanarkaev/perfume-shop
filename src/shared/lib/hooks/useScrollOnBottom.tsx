import { useEffect, useMemo } from "react";
import { debounce } from "../../helpers/debounce";

export const useScrollOnBottom = (
  callback: () => void,
  offset: number,
  delay: number
) => {
  const handleScrollOnBottom = useMemo(
    () =>
      debounce(() => {
        const isOnBottom =
          Math.floor(
            document.documentElement.scrollHeight -
              document.documentElement.scrollTop -
              offset
          ) <= document.documentElement.clientHeight;

        if (isOnBottom) {
          callback();
        }
      }, delay),
    [callback, offset, delay]
  );

  useEffect(() => {
    document.addEventListener("scroll", handleScrollOnBottom);

    return () => {
      document.removeEventListener("scroll", handleScrollOnBottom);
    };
  }, [handleScrollOnBottom]);
};
