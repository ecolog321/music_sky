"use client";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";
import { quitUser } from "../../../store/features/authSlice";
import styles from "./user.module.css";
import { useInitiateLikeTracks } from "../../../hooks/likes";

export const User = () => {
  useInitiateLikeTracks();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userEmail = useAppSelector((state) => state.auth.user?.email);

  if (!userEmail) {
    return null;
  }

  const handleLogout = () => {
    dispatch(quitUser());
    router.push("/singin");
  };

  return (
    <div className={styles.sidebar__personal}>
      <p className={styles.sidebar__parsonal_name}>{userEmail}</p>
      <div className={styles.sidebar__icon} onClick={handleLogout}>
        <svg className={styles.sidebar__quit}>
          <use xlinkHref="/img/icons/sprite.svg#logout"></use>
        </svg>
      </div>
    </div>
  );
};
