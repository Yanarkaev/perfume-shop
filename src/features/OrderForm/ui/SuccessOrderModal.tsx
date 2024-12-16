import { useNavigate } from "react-router";
import { Button, Paper } from "../../../shared/ui";
import s from "./SuccessOrderModal.module.scss";
import { Path } from "../../../shared/constants/routingPaths";
import { createPortal } from "react-dom";

export const SuccessOrderModal = () => {
  const navigate = useNavigate();
  return createPortal(
    <Paper className={s.SuccessOrderModal}>
      <p className={s.successTitle}>Заказ успешно оформлен</p>
      <h4 className={s.thanksTitle}>Благодарим за покупку!</h4>
      <p className={s.waitDelivery}>Ожидайте доставки</p>

      <Button className={s.btn} onClick={() => navigate(Path.Perfumes)}>
        Перейти к каталогу
      </Button>
    </Paper>,
    document.body
  );
};
