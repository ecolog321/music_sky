"use client";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";
import { quitUser } from "../../../store/features/authSlice";
import styles from "./user.module.css";
import { useInitiateLikeTracks } from "../../../hooks/likes";
import { clearTrack } from "../../../store/features/playlistSlise";
import { useEffect } from "react";

export const User = () => {
  useInitiateLikeTracks();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userEmail = useAppSelector((state) => state.auth.user?.email);

  useEffect(()=>{
    if (!userEmail) {
      return;
    }
  },[userEmail])
   

  const handleLogout = () => {
    dispatch(quitUser());
    dispatch(clearTrack());
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
