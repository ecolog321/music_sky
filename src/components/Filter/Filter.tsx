import { useState } from "react";
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
  const [picked, setPicked] = useState<string | null>(null);

  const pickItem = (event:any) => {
    setPicked(event.target.value);
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
                className={clsx(styles.filter__items, picked && styles.filre__items_pick)}
                onClick={()=>pickItem(item)}
                key={id}
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
