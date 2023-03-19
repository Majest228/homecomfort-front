import React from "react"
import styles from "../Header.module.scss"
import arrow from "../../../../assets/arrow.svg"
import Link from "next/link"
import Image from "next/image"

const HeaderIntro = () => {
  return (
    <div className={styles.header__contentup}>
      <div className={styles.header__contentup__changeCity}>
        <Image width={8} height={5} src={arrow} alt={"arrow"} />
        <span>Москва</span>
      </div>
      <nav className={styles.header__contentup__navigation}>
        <ul className={styles.header__contentup__navigation__list}>
          <li className={styles.header__contentup__navigation__list__item}>
            <Link
              className={styles.header__contentup__navigation__list__item__link}
              href='/'
            >
              Акции
            </Link>
          </li>
          <li className={styles.header__contentup__navigation__list__item}>
            <Link
              className={styles.header__contentup__navigation__list__item__link}
              href='/'
            >
              О компании
            </Link>
          </li>
          <li className={styles.header__contentup__navigation__list__item}>
            <Link
              className={styles.header__contentup__navigation__list__item__link}
              href='/'
            >
              Доставка и оплата
            </Link>
          </li>
          <li className={styles.header__contentup__navigation__list__item}>
            <Link
              className={styles.header__contentup__navigation__list__item__link}
              href='/'
            >
              Контакты магазинов
            </Link>
          </li>
          <p>8 969 677 76 76</p>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderIntro
