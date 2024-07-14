import Image from "next/image";
import styles from './singin.module.css'
import clsx from "clsx";

export const Singin = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container_enter}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form_login} action="#">
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
              className={clsx(styles.modal__input, styles.password)}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button className={styles.modal__btn_enter}>
              <a href="../index.html">Войти</a>
            </button>
            <button className={styles.modal__btn_signup}>
              <a href="signup.html">Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
