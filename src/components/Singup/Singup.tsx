import Image from "next/image";
import styles from './singup.module.css'
import clsx from "clsx";

export const Singup = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.container_signup}>
      <div className={styles.modal__block}>
        <form className={styles.modal__form_login}>
          <a href="../">
            <div className={styles.modal__logo}>
            <Image alt="logo" src="/img/logo_black.png" width={140} height={20}></Image>
            </div>
          </a>
          <input
            className={clsx(styles.modal__input, styles.login)}
            type="text"
            name="login"
            placeholder="Почта"
          />
          <input
            className={clsx(styles.modal__input, styles.password_first)}
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <input
            className={clsx(styles.modal__input, styles.password_double)}
            type="password"
            name="password"
            placeholder="Повторите пароль"
          />
          <button className={styles.modal__btn_signup_ent}>
            <a href="../index.html">Зарегистрироваться</a>
          </button>
        </form>
      </div>
    </div>
  </div>
  );
};
