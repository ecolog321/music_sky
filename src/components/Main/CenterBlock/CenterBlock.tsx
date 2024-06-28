"use client";

import Image from "next/image";
import styles from "./centerblock.module.css";
import sharedStyles from "../../shared.module.css";
import { TrackList } from "../TrackList/TrackList";
import clsx from "clsx";
import { getTracks } from "@api/trackApi";
import { TrackType } from "../../../types/types";
import { Filter } from "@components/Filter/Filter";
import { filterData } from "@components/Filter/Filter.data";
import { useEffect, useState } from "react";

export const CenterBlock = () => {
  const [filterValue, setFilterValue] = useState<string | null>(null);
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const [authors, setAuthors] = useState<any[]>([]);

  

  const toogleAuthors = () => Array.from(new Set(tracks.map((track) => track.author)));
;

  console.log(authors);

  useEffect(() => {
    getTracks()
      .then((data) => setTracks(data))
      .catch((err) => alert(err.message));
  }, [filterValue]);

  useEffect(() => {
    setAuthors(toogleAuthors());
  }, [tracks]);

  const changeFilterValue = (value: string) => {
    setFilterValue((prev) => (prev === value ? null : value));
  };

  return (
    <div className={styles.main__centerblock}>
      <div className={styles.centerblock__search}>
        <svg className={styles.search__svg}>
          <use xlinkHref="/img/icons/sprite.svg#icon-search"></use>
        </svg>
        <input
          type="search"
          className={styles.search__text}
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <div className={styles.centerblock__filter}>
        <div className={sharedStyles.filter__title}>Искать по:</div>
        {filterData.map((item) => (
          <Filter
            isOpen={filterValue === item.value}
            value={item.value}
            title={item.title}
            list={item.list}
            key={item.value}
            onClick={changeFilterValue}
          ></Filter>
        ))}
      </div>
      <div className={styles.centerblock__content}>
        <div className={styles.content__title}>
          <div
            className={clsx("styles.playlist_title__col", "sharedStyles.col01")}
          >
            Трек
          </div>
          <div
            className={clsx("styles.playlist_title__col", "sharedStyles.col02")}
          >
            Исполнитель
          </div>
          <div
            className={clsx("styles.playlist_title__col", "sharedStyles.col03")}
          >
            Альбом
          </div>
          <div
            className={clsx("styles.playlist_title__col", "sharedStyles.col04")}
          >
            <Image
              src="/img/icons/watch.svg"
              height={12}
              width={14}
              alt="like"
            ></Image>
          </div>
        </div>
        <TrackList tracks={tracks}></TrackList>
      </div>
    </div>
  );
};
