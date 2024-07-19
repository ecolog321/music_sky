"use client";
import Image from "next/image";
import styles from "./singup.module.css";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { getTokens, singupUser } from "../../store/features/authSlice";
import { useAppDispatch } from "../../hooks/store";

export const Singup = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [repeatedPassword, setRepeatedPassword] = useState({ rePassword: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleRepeatPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const {name,value} = e.target;
    setRepeatedPassword((prevValue) => {
      return {
        ...prevValue,
        [name]:value,
      };
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (repeatedPassword.rePassword === formData.password) {
      try {
        await Promise.all([dispatch(singupUser(formData)).unwrap()]);
        router.push("/singin");
      } catch (error) {
        throw new Error("Ошибка" + error);
      }
    } else {
      throw new Error("Пароли не совпадают");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container_signup}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form_login}>
            <Link href={"/"}>
              <div className={styles.modal__logo}>
                <Image
                  alt="logo"
                  src="/img/logo_black.png"
                  width={140}
                  height={20}
                ></Image>
              </div>
            </Link>
            <input
              className={clsx(styles.modal__input, styles.login)}
              type="text"
              name="email"
              placeholder="Почта"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className={clsx(styles.modal__input, styles.login)}
              type="text"
              name="username"
              placeholder="Никнейм"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              className={clsx(styles.modal__input, styles.password_first)}
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              className={clsx(styles.modal__input, styles.password_double)}
              type="password"
              name="rePassword"
              placeholder="Повторите пароль"
              onChange={handleRepeatPassword}
              value={repeatedPassword.rePassword}
            />
            <div>
              <button
                className={styles.modal__btn_signup_ent}
                onClick={handleSubmit}
              >
                Зарегестрироваться
              </button>
              <button className={styles.modal__btn_signup_ent}>Войти</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
