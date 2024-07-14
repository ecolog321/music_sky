"use client";

import { useState } from "react";
import { FC } from "react";
import sharedStyles from "../shared.module.css";
import styles from "./Filter.module.css";
import clsx from "clsx";
import { useAppDispatch } from "../../hooks/store";
import { setFilters } from "../../store/features/playlistSlise";

type Props = {
  title: string;
  list: string[];
  value: string;
  isOpen: boolean;
  onClick: (value: string) => void;
  selected: string[] |string;
};

export const Filter: FC<Props> = ({
  isOpen,
  value,
  onClick,
  title,
  list,
  selected = [],
}) => {
  const dispatch = useAppDispatch();

  const [isPick, setIsPick] = useState<string | null>(null);

  const toogleFilter = (item: string) => {
    setIsPick((prev) => (prev === item ? null : item));

    if (value === "release") {
      dispatch(setFilters({ order: item }));
      return;
    }
  };

  return (
    <div className={styles.filter__block}>
      <button
        className={clsx(
          sharedStyles.filter__button,
          isOpen && sharedStyles.filter__button_open
        )}
        onClick={() => onClick(value)}
      >
        {title}
      </button>
      {isOpen && (
        <ul className={styles.filter__list}>
          {list.map((item: string, id: number) => {
            return (
              <li
                className={clsx(
                  isPick === item
                    ? styles.filter__items
                    : styles.filre__items_pick
                )}
                key={id}
                onClick={() => {
                  toogleFilter(item);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
