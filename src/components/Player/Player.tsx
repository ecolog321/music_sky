import styles from "./player.module.css";

export const Player = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__content}>
        <div className={styles.bar__player_progress}>
          <div className={styles.bar__player_block}>
            <div className={styles.bar__player}>
              <div className={styles.player__controls}>
                <div className={styles.player__btn_prev}>
                  <svg className={styles.player__btn_prev_svg}>
                    <use xlinkHref="/img/icons/sprite.svg#icon-prev"></use>
                  </svg>
                </div>
                <div className={styles.player__btn_play}>
                  <svg className={styles.player__btn_play_svg}>
                    <use xlinkHref="/img/icons/sprite.svg#icon-play"></use>
                  </svg>
                </div>
                <div className={styles.player__btn_next}>
                  <svg className={styles.player__btn_next_svg}>
                    <use xlinkHref="/img/icons/sprite.svg#icon-next"></use>
                  </svg>
                </div>
                <div className={styles.player__btn_repeat}>
                  <svg className={styles.player__btn_repeat_svg}>
                    <use xlinkHref="/img/icons/sprite.svg#icon-repeat"></use>
                  </svg>
                </div>
                <div className={styles.player__btn_shuffle}>
                  <svg className={styles.player__btn_shuffle_svg}>
                    <use xlinkHref="/img/icons/sprite.svg#icon-shuffle"></use>
                  </svg>
                </div>
              </div>

              <div className={styles.player__track_play}>
                <div className={styles.track_play__contain}>
                  <div className={styles.track_play__image}>
                    <svg className={styles.track_play__svg}>
                      <use xlinkHref="/img/icons/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.track_play__author}>
                    <a className={styles.track_play__author_link} href="#">
                      Ты та...
                    </a>
                  </div>
                  <div className={styles.track_play__album}>
                    <a className={styles.track_play__album_link} href="#">
                      Баста
                    </a>
                  </div>
                </div>

                <div className={styles.track_play__dislike}>
                  <svg className={styles.track_play__dislike_svg}>
                    <use className="" xlinkHref="/img/icons/sprite.svg#icon-dislike"></use>
                  </svg>
                </div>
              </div>
            </div>

            <div className={styles.bar__volume_block}>
              <div className={styles.volume__content}>
                <div className={styles.volume__image}>
                  <svg className={styles.volume__svg}>
                    <use xlinkHref="/img/icons/sprite.svg#icon-volume"></use>
                  </svg>
                </div>
                <div className={styles.volume__progress}>
                  <input
                    className={styles.volume__progress_line}
                    type="range"
                    name="range"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
