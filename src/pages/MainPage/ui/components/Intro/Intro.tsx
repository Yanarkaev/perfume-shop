import styles from "./Intro.module.scss";

export const Intro = () => {
  return (
    <div className={styles.Intro}>
      <h1 className={styles.title}>KEFTEME</h1>
      <p className={styles.subtitle}>Лучшая парфюмерия в городе</p>
    </div>
  );
};
