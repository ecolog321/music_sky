"use client";

import Image from "next/image";
import styles from "./Nav.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../../hooks/store";

export const Nav = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [showNav, isShowNav] = useState<boolean>(false);

  const toogleNavi = () => {
    isShowNav(!showNav);
  };

  const goToSingin = () => {
    router.push("/singin");
  };

  const goToFav = () => {
    router.push("favorite");
  };

  return showNav ? (
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
      <div onClick={toogleNavi} className={styles.nav__burger}>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>
      <div className={styles.nav__menu}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <a className={styles.menu__link}>Главное</a>
          </li>
          <li className={styles.menu__item} onClick={goToFav}>
            <a className={styles.menu__link}>Мой плейлист</a>
          </li>
          <li className={styles.menu__item} onClick={goToSingin}>
            <a className={styles.menu__link}>Войти</a>
          </li>
        </ul>
      </div>
    </nav>
  ) : (
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
      <div onClick={toogleNavi} className={styles.nav__burger}>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>
    </nav>
  );
};
