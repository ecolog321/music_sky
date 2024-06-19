import Image from "next/image";
import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav className={styles.main__nav}>
      <div className={styles.nav__logo}>
      <Image
        className={styles.logo__image}
        src="/img/logo.png"
        alt=""
        height={250}
        width={170}
      />
      </div>
      <div className={styles.nav__burger}>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>
      <div className={styles.nav__menu}>
        <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
                <a className={styles.menu__link}>Главное</a>
            </li>
            <li className={styles.menu__item}>
                <a className={styles.menu__link}>Мой плейлист</a>
            </li>
            <li className={styles.menu__item}>
                <a className={styles.menu__link}>Войти</a>
            </li>
        </ul>
      </div>
    </nav>
  );
};
