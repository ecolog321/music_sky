import Image from 'next/image'
import styles from './sidebar.module.css'

export const Sidebar=()=>{
    return (
        <div className={styles.main__sidebar}>
            <div className={styles.sidebar__personal}>
                <p className={styles.sidebar__parsonal_name}></p>
                <div className={styles.sidebar__icon}>
                    <svg>
                        <use xlinkHref='/img/icons/sprite.svg#logout'></use>
                    </svg>
                </div>
            </div>
            <div className={styles.sidebar__block}>
                <div className={styles.sidebar__list}>
                    <div className={styles.sidebar__item}>
                        <a className={styles.sidebar__link} href="">
                        <Image
                          className={styles.sidebar__img}
                          src="/img/playlist01.png"
                          alt="day's playlist"
                          height={250}
                          width={170}
                        />
                        </a>
                    </div>
                    <div className={styles.sidebar__item}>
                        <a className={styles.sidebar__link} href="">
                        <Image
                          className={styles.sidebar__img}
                          src="/img/playlist02.png"
                          alt="day's playlist"
                          height={250}
                          width={170}
                        />
                        </a>
                    </div>
                    <div className={styles.sidebar__item}>
                        <a className={styles.sidebar__link} href="">
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
    )
}