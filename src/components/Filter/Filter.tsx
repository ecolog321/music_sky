"use client";

import { ReactEventHandler, useState } from "react";
import { FC } from "react";
import sharedStyles from "../shared.module.css";
import styles from "./Filter.module.css";
import clsx from "clsx";

type Props = {
  title: string;
  list: string[];
  value: string;
  isOpen: boolean;
  onClick: (value: string) => void;
};

export const Filter: FC<Props> = ({ isOpen, value, onClick, title, list }) => {
  const [isPick, setIsPick] = useState<string | null>(null);

  const changePickItem = (value: string) => {
    setIsPick((prev) => (prev === value ? null : value));
    console.log(isPick)
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
                  styles.filter__items,
                  isPick===item && styles.filre__items_pick
                )}
                key={id}
                onClick={() => {
                  changePickItem(item);
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
