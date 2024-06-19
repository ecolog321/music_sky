import styles from "./centerblock.module.css";
import sharedStyles from "../../shared.module.css";

export const CenterBlock = () => {
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
        <div className={sharedStyles.filter__button}>исполнителю</div>
        <div className={sharedStyles.filter__button}>году выпуска</div>
        <div className={sharedStyles.filter__button}>жанру</div>
      </div>
      <div className={styles.centerblock__content}>
        <div className={styles.content__title}>
          <div className={(styles.playlist_title__col, sharedStyles.col01)}>
            Трек
          </div>
          <div className={(styles.playlist_title__col, sharedStyles.col02)}>
            Исполнитель
          </div>
          <div className={(styles.playlist_title__col, sharedStyles.col03)}>
            Альбом
          </div>
          <div className={(styles.playlist_title__col, sharedStyles.col04)}>
            <svg className={styles.playlist_title__svg}>
              <use xlinkHref="/img/icons/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.content__playlist}>
        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__title_image}>
                <svg className={styles.track__title_svg}>
                  <use xlinkHref="/img/icons/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div className={styles.track__title_text}>
                <a className={styles.track__title_link} href="">
                  Guilt <span className={styles.track__title_span}></span>
                </a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__author_link} href="">
                Nero
              </a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__album_link} href="">
                Welcome Reality
              </a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__time_svg}>
                <use xlinkHref="/img/icons/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__time_text}>4:44</span>
            </div>
          </div>
        </div>

        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__title_image}>
                <svg className={styles.track__title_svg}>
                  <use xlinkHref="/img/icons/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div className={styles.track__title_text}>
                <a className={styles.track__title_link} href="">
                  Guilt <span className={styles.track__title_span}></span>
                </a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__author_link} href="">
                Nero
              </a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__album_link} href="">
                Welcome Reality
              </a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__time_svg}>
                <use xlinkHref="/img/icons/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__time_text}>4:44</span>
            </div>
          </div>
        </div>

        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__title_image}>
                <svg className={styles.track__title_svg}>
                  <use xlinkHref="/img/icons/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div className={styles.track__title_text}>
                <a className={styles.track__title_link} href="">
                  Guilt <span className={styles.track__title_span}></span>
                </a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__author_link} href="">
                Nero
              </a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__album_link} href="">
                Welcome Reality
              </a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__time_svg}>
                <use xlinkHref="/img/icons/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__time_text}>4:44</span>
            </div>
          </div>
        </div>
        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__title_image}>
                <svg className={styles.track__title_svg}>
                  <use xlinkHref="/img/icons/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div className={styles.track__title_text}>
                <a className={styles.track__title_link} href="">
                  Guilt <span className={styles.track__title_span}></span>
                </a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__author_link} href="">
                Nero
              </a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__album_link} href="">
                Welcome Reality
              </a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__time_svg}>
                <use xlinkHref="/img/icons/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__time_text}>4:44</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
