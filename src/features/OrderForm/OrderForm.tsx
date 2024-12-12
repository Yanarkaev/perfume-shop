// import {
//   ChangeEvent,
//   FormEvent,
//   useCallback,
//   useEffect,
//   useState,
// } from "react";
// import { Button, Input } from "../../shared/ui";

// import s from "./OrderForm.module.scss";
// import {
//   useAppDispatch,
//   useAppSelector,
// } from "../../app/providers/storeProvider/hooks";
// import { getCartSelector } from "../../entities/Cart/model/selectors/cart.selector";
// import { createOrderThunk } from "../../entities/Order/model/services/createOrderThunk";
// import { Order } from "../../app/types/order";
// import { cartActions } from "../../entities/Cart/model/slice/cartSlice";

// export const OrderForm = () => {
//   const [orderData, setOrderData] = useState<Order>({
//     cartData: [],
//     clientName: "",
//     phoneNumber: "",
//     city: "",
//     address: "",
//     total: 0,
//   });

//   // react-hook-form

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setOrderData((prev) => {
//       return { ...prev, [e.target.name]: e.target.value };
//     });
//   };

//   const dispatch = useAppDispatch();
//   const { data, totalSum } = useAppSelector(getCartSelector);

//   const handleSubmit = useCallback(
//     (e: FormEvent) => {
//       e.preventDefault();
//       dispatch(createOrderThunk(orderData));
//       dispatch(cartActions.resetCartData());
//     },
//     [dispatch, orderData]
//   );

//   useEffect(() => {
//     dispatch(cartActions.setTotalSum());
//     setOrderData((prev) => {
//       return { ...prev, cartData: data.cartData, total: totalSum };
//     });
//   }, [data]);

//   console.log(orderData);

//   return (
//     <form className={s.form} onSubmit={handleSubmit}>
//       <div className={s.field}>
//         <b>Имя</b>
//         <Input
//           name="clientName"
//           placeholder="Имя"
//           type="text"
//           onChange={handleChange}
//         />
//       </div>
//       <div className={s.field}>
//         <b>Номер телефона</b>
//         <Input
//           name="phoneNumber"
//           placeholder="+7 (123) 123-45-67"
//           type="tel"
//           onChange={handleChange}
//         />
//       </div>

//       <div className={s.field}>
//         <b>Адрес доставки</b>
//         <Input
//           name="city"
//           placeholder="Город"
//           type="text"
//           onChange={handleChange}
//         />
//         <Input
//           name="address"
//           placeholder="Адрес"
//           type="text"
//           onChange={handleChange}
//         />
//       </div>

//       <Button>Оформить заказ</Button>
//     </form>
//   );
// };

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import { Button, Input } from "../../shared/ui";
import s from "./OrderForm.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../app/providers/storeProvider/hooks";
import { getCartSelector } from "../../entities/Cart/model/selectors/cart.selector";
import { createOrderThunk } from "../../entities/Order/model/services/createOrderThunk";
import { Order } from "../../app/types/order";
import { cartActions } from "../../entities/Cart/model/slice/cartSlice";
import { useEffect } from "react";

interface FormValues {
  clientName: string;
  phoneNumber: string;
  city: string;
  address: string;
}

export const OrderForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      clientName: "",
      phoneNumber: "",
      city: "",
      address: "",
    },
  });

  const dispatch = useAppDispatch();
  const { data, totalSum } = useAppSelector(getCartSelector);

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    const orderData: Order = {
      cartData: data.cartData,
      clientName: formData.clientName,
      phoneNumber: formData.phoneNumber,
      city: formData.city,
      address: formData.address,
      total: totalSum,
    };

    dispatch(createOrderThunk(orderData));
    dispatch(cartActions.resetCartData());
  };

  // Устанавливаем данные корзины и общую сумму
  useEffect(() => {
    dispatch(cartActions.setTotalSum());
    setValue("phoneNumber", ""); // Сброс поля номера телефона при загрузке данных
  }, [data, totalSum, setValue, dispatch]);

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.field}>
        <span>Имя</span>
        <Controller
          name="clientName"
          control={control}
          rules={{ required: "Имя обязательно" }}
          render={({ field }) => (
            <Input {...field} placeholder="Имя" type="text" />
          )}
        />
        {errors.clientName && (
          <p className={s.error}>{errors.clientName.message}</p>
        )}
      </div>

      <div className={s.field}>
        <span>Номер телефона</span>
        <Controller
          name="phoneNumber"
          control={control}
          rules={{
            required: "Номер телефона обязателен",
            pattern: {
              value: /^8 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
              message: "Некорректный формат номера телефона",
            },
          }}
          render={({ field }) => (
            <InputMask
              {...field}
              mask="9 (999) 999-99-99"
              maskChar=""
              placeholder="8 (999) 999-99-99"
              onChange={(e) => field.onChange(e.target.value)}
            >
              {(inputProps) => <Input {...inputProps} type="tel" />}
            </InputMask>
          )}
        />
        {errors.phoneNumber && (
          <p className={s.error}>{errors.phoneNumber.message}</p>
        )}
      </div>

      <div className={s.field}>
        <span>Адрес доставки</span>
        <Controller
          name="city"
          control={control}
          rules={{ required: "Город обязателен" }}
          render={({ field }) => (
            <Input {...field} placeholder="Город" type="text" />
          )}
        />
        {errors.city && <p className={s.error}>{errors.city.message}</p>}
        <Controller
          name="address"
          control={control}
          rules={{ required: "Адрес обязателен" }}
          render={({ field }) => (
            <Input {...field} placeholder="Адрес" type="text" />
          )}
        />
        {errors.address && <p className={s.error}>{errors.address.message}</p>}
      </div>

      <Button type="submit" className={s.orderBtn}>
        Оформить заказ <span>Итого: {totalSum} ₽</span>
      </Button>
    </form>
  );
};
