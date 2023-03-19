import React from "react"
import styles from "./Footer.module.scss"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__line}></div>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__content__navigation}>
            <nav className={styles.footer__content__navigation__items}>
              <h2>Скачать прайс</h2>
              <ul className={styles.footer__content__navigation__items__list}>
                <li
                  className={
                    styles.footer__content__navigation__items__list__item
                  }
                >
                  <Link
                    className={
                      styles.footer__content__navigation__items__list__item__link
                    }
                    href='/'
                  >
                    О нас
                  </Link>
                </li>
                <li
                  className={
                    styles.footer__content__navigation__items__list__item
                  }
                >
                  <Link
                    className={
                      styles.footer__content__navigation__items__list__item__link
                    }
                    href='/'
                  >
                    Вакансии
                  </Link>
                </li>
                <li
                  className={
                    styles.footer__content__navigation__items__list__item
                  }
                >
                  <Link
                    className={
                      styles.footer__content__navigation__items__list__item__link
                    }
                    href='/'
                  >
                    Реквизиты
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className={styles.footer__content__navigation__items}>
              <h2>Договор оферты</h2>
              <ul className={styles.footer__content__navigation__items__list}>
                <li
                  className={
                    styles.footer__content__navigation__items__list__item
                  }
                >
                  <Link
                    className={
                      styles.footer__content__navigation__items__list__item__link
                    }
                    href='/'
                  >
                    Каталог
                  </Link>
                </li>
                <li
                  className={
                    styles.footer__content__navigation__items__list__item
                  }
                >
                  <Link
                    className={
                      styles.footer__content__navigation__items__list__item__link
                    }
                    href='/'
                  >
                    Акции
                  </Link>
                </li>
                <li
                  className={
                    styles.footer__content__navigation__items__list__item
                  }
                >
                  <Link
                    className={
                      styles.footer__content__navigation__items__list__item__link
                    }
                    href='/'
                  >
                    Личный кабинет
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className={styles.footer__content__navigation__items}>
              <h2>Адреса магазинов</h2>
              <ul className={styles.footer__content__navigation__items__list}>
                <li
                  className={
                    styles.footer__content__navigation__items__list__item
                  }
                >
                  <Link
                    className={
                      styles.footer__content__navigation__items__list__item__link
                    }
                    href='/'
                  >
                    Получение заказа
                  </Link>
                </li>
                <li
                  className={
                    styles.footer__content__navigation__items__list__item
                  }
                >
                  <Link
                    className={
                      styles.footer__content__navigation__items__list__item__link
                    }
                    href='/'
                  >
                    Оплата
                  </Link>
                </li>
                <li
                  className={
                    styles.footer__content__navigation__items__list__item
                  }
                >
                  <Link
                    className={
                      styles.footer__content__navigation__items__list__item__link
                    }
                    href='/'
                  >
                    Как купить
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className={styles.footer__content__navigation__items}>
              <h2>+7 351 248 58 50</h2>
              <h2 className={styles.footer__content__navigation__items__number}>
                +7 351 237 06 06
              </h2>
              <ul className={styles.footer__content__navigation__items__list}>
                <li
                  className={
                    styles.footer__content__navigation__items__list__item
                  }
                >
                  <Link
                    className={
                      styles.footer__content__navigation__items__list__item__link
                    }
                    href='/'
                  >
                    Конфиденциальность
                  </Link>
                </li>
                <li
                  className={
                    styles.footer__content__navigation__items__list__item
                  }
                >
                  <Link
                    className={
                      styles.footer__content__navigation__items__list__item__link
                    }
                    href='/'
                  >
                    Новости
                  </Link>
                </li>
                <li
                  className={
                    styles.footer__content__navigation__items__list__item
                  }
                >
                  <Link
                    className={
                      styles.footer__content__navigation__items__list__item__link
                    }
                    href='/'
                  >
                    Статьи
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.footer__content__discription}>
            <p>
              Самые выгодные цены на Спортивное питание — от новичка до качка! -
              продажа по всей России в интернет-магазине. Отзывы, сравнение и
              обзоры новинок спортивного питания. Доставка во все города России
              службами «Почта России». Оплата: наличные, Приват-24, наложенный
              платеж, карты
              <br />
              <br />
              Интернет-магазин спортивного питания «СпортПит» © 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
