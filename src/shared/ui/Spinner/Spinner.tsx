import s from "./Spinner.module.scss";

export const Spinner = () => {
  return (
    <div className={s.Spinner}>
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none" className={s.path}></circle>
      </svg>
    </div>
  );
};
