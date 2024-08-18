"use client";

import Image from "next/image";
import styles from "./centerblock.module.css";
import sharedStyles from "../../shared.module.css";
import { TrackList } from "../TrackList/TrackList";
import clsx from "clsx";
import { TrackType } from "../../../types/types";
import { Filter } from "@components/Filter/Filter";
import { filterFresh } from "@components/Filter/Filter.data";
import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";
import { setFilters, setPlaylist } from "../../../store/features/playlistSlise";
import { saveUser } from "../../../store/features/authSlice";
import { SearchField } from "./SearchFeild/SearchFeild";
import { createUniqueArray } from "../../../utils/uniqueArray";

type Props = {
  tracks: TrackType[];
};

export const CenterBlock: FC<Props> = ({ tracks }) => {
  const [filterValue, setFilterValue] = useState<string | null>(null);
  const [authors, setAuthors] = useState<string[]>([]);
  const [release, setRelease] = useState<string[]>([]);
  const [genre, setGenre] = useState<string[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string[]>([]);
  const [searchField, setSearchField] = useState("");
  const dispatch = useAppDispatch();
  const filteredTracks = useAppSelector(
    (store) => store.playlist.filteredPlaylist
  );

  const filterData = [
    {
      title: "исполнителю",
      value: "author",
      selected: useAppSelector((store) => store.playlist.filterOptions.author),
    },
    {
      title: "году выпуска",
      value: "release",
      selected: [useAppSelector((store) => store.playlist.filterOptions.order)],
    },
    {
      title: "жанру",
      value: "genre",
      selected: useAppSelector((store) => store.playlist.filterOptions.genre),
    },
  ];

  const handleSearchField = useCallback((e:ChangeEvent<HTMLInputElement>)=> setSearchField(e.target.value),[])

  const toogleAuthors = () => createUniqueArray(tracks, "author");

  const toogleGenre = () => createUniqueArray(tracks, "genre");

  useEffect(() => {
    setAuthors(toogleAuthors());
    setGenre(toogleGenre());
    setRelease(filterFresh);
  }, [tracks]);

  useEffect(() => {
    dispatch(setPlaylist({ tracks }));
  }, [dispatch, tracks]);

  useEffect(() => {
    dispatch(setFilters({ searchField }));
  }, [searchField]);

  useEffect(() => {
    dispatch(
      saveUser([
        localStorage.getItem("email") || "",
        localStorage.getItem("access") || "",
        localStorage.getItem("refresh") || "",
      ])
    );
  }, [dispatch]);

  const changeFilterValue = (value: string) => {
    setFilterValue((prev) => (prev === value ? null : value));

    switch (value) {
      case "author":
        setCurrentFilter(authors);
        break;
      case "genre":
        setCurrentFilter(genre);
        break;
      case "release":
        setCurrentFilter(release);
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.main__centerblock}>
      <SearchField handleSearchField={handleSearchField} />
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <div className={styles.centerblock__filter}>
        <div className={sharedStyles.filter__title}>Искать по:</div>
        {filterData.map((item) => (
          <Filter
            isOpen={filterValue === item.value}
            value={item.value}
            title={item.title}
            list={currentFilter}
            key={item.value}
            onClick={changeFilterValue}
            selected={item.selected}
          />
        ))}
      </div>
      <div className={styles.centerblock__content}>
        <div className={styles.content__title}>
          <div className={clsx(styles.playlist_title__col, sharedStyles.col01)}>
            Трек
          </div>
          <div className={clsx(styles.playlist_title__col, sharedStyles.col02)}>
            Исполнитель
          </div>
          <div className={clsx(styles.playlist_title__col, sharedStyles.col03)}>
            Альбом
          </div>
          <div className={clsx(styles.playlist_title__col, sharedStyles.col04)}>
            <Image
              src="/img/icons/watch.svg"
              height={12}
              width={14}
              alt="like"
            ></Image>
          </div>
        </div>
        <TrackList tracks={filteredTracks} />
      </div>
    </div>
  );
};
