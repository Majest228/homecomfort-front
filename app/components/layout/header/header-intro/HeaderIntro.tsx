import React, { useEffect, useRef, useState } from "react"
import styles from "../Header.module.scss"
import arrow from "../../../../assets/arrow.svg"
import Link from "next/link"
import Image from "next/image"
import { useOnClickOutside } from "@/app/hook/hook"
import apiAxios from "@/app/api/api.interceptor"
import Cookies from "js-cookie"

const HeaderIntro = () => {
  const [isShow, setIsShow] = useState(false)
  const outside = useRef(null)
  useOnClickOutside(outside, () => setIsShow(false))

  const [cities, setCities] = useState([])
  async function getCities() {
    const { data: cities } = await apiAxios.get("city/all")
    return setCities(cities)
  }
  useEffect(() => {
    getCities()
  }, [])
  const pickCity = localStorage.getItem("city")
    ? localStorage.getItem("city")
    : "Невыбран"
  return (
    <div className={styles.header__contentup}>
      <div
        className={styles.header__contentup__changeCity}
        onClick={() => setIsShow(!isShow)}
      >
        <div
          className={styles.header__contentup__changeCity__show}
          ref={outside}
        >
          <Image width={12} height={9} src={arrow} alt={"arrow"} />
          <div
            className={
              isShow
                ? styles.header__contentup__changeCity__window
                : styles.offShow
            }
          >
            {cities.map((city: any) => (
              <div
                className={styles.header__contentup__changeCity__window__item}
                onClick={() => {
                  setIsShow(!isShow)
                  localStorage.setItem("city", city.name)
                }}
              >
                <p>{city.name}</p>
              </div>
            ))}
          </div>
        </div>
        <span>{pickCity}</span>
      </div>
      <nav className={styles.header__contentup__navigation}>
        <ul className={styles.header__contentup__navigation__list}>
          <li className={styles.header__contentup__navigation__list__item}>
            <Link
              className={styles.header__contentup__navigation__list__item__link}
              href='/catalog'
            >
              Каталог
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
