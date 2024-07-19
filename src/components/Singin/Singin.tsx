"use client";
import Image from "next/image";
import styles from "./singin.module.css";
import clsx from "clsx";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { getTokens, getUser } from "../../store/features/authSlice";
import { useAppDispatch } from "../../hooks/store";
import { useRouter } from "next/navigation";

export const Singin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await Promise.all([
        dispatch(getTokens(formData)).unwrap(),
        dispatch(getUser(formData)).unwrap(),
      ]);
      router.push("/");
    } catch (error) {
      throw new Error("Ошибка" + error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container_enter}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form_login} action="#">
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
              className={clsx(styles.modal__input, styles.password)}
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
            />
            <button className={styles.modal__btn_enter} onClick={handleSubmit}>
              Войти
            </button>
            <button className={styles.modal__btn_signup} onClick={()=> router.push('/')}>
              Зарегестрироваться 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
