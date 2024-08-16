"use client";

import Image from "next/image";
import styles from "./Nav.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { quitUser } from "../../store/features/authSlice";

export const Nav = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [showNav, isShowNav] = useState<boolean>(false);

  const userData = useAppSelector((store) => store.auth.user?.email);

  const toogleNavi = () => {
    isShowNav(!showNav);
  };

  const toogleSignin = () => {
    if (userData) {
      dispatch(quitUser());
      router.refresh();
    } else {
      router.push("/singin");
    }
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
          <li className={styles.menu__item} onClick={toogleSignin}>
            <a className={styles.menu__link}>{userData ? "Выйти" : "Войти"}</a>
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
