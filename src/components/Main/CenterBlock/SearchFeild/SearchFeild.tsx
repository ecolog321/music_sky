import { ChangeEvent, FC, memo, useEffect } from "react";
import styles from "./searchField.module.css";

type Props = {
  handleSearchField: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchField: FC<Props> = memo(({ handleSearchField }) => {

  return (
    <div className={styles.centerblock__search}>
      <svg className={styles.search__svg}>
        <use xlinkHref="/img/icons/sprite.svg#icon-search"></use>
      </svg>
      <input
        type="search"
        className={styles.search__text}
        placeholder="Поиск"
        name="search"
        onChange={handleSearchField}
      />
    </div>
  );
});

SearchField.displayName = "memoSearchField";
