"use client";
import Image from "next/image";
import styles from "./sidebar.module.css";
import { User } from "./User/User";
import { useRouter } from "next/navigation";

export const Sidebar = () => {
  const router = useRouter();

  const goToPlaylist = (id: number) => {
    router.push(`/tracks/category/${id}`);
  };

  return (
    <div className={styles.main__sidebar}>
      <User />
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          <div className={styles.sidebar__item} onClick={() => goToPlaylist(1)}>
            <a className={styles.sidebar__link}>
              <Image
                className={styles.sidebar__img}
                src="/img/playlist01.png"
                alt="day's playlist"
                height={250}
                width={170}
              />
            </a>
          </div>
          <div className={styles.sidebar__item} onClick={() => goToPlaylist(2)}>
            <a className={styles.sidebar__link}>
              <Image
                className={styles.sidebar__img}
                src="/img/playlist02.png"
                alt="day's playlist"
                height={250}
                width={170}
              />
            </a>
          </div>
          <div className={styles.sidebar__item} onClick={() => goToPlaylist(3)}>
            <a className={styles.sidebar__link}>
              <Image
                className={styles.sidebar__img}
                src="/img/playlist03.png"
                alt="day's playlist"
                height={250}
                width={170}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
