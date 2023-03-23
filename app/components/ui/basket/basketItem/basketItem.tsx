import React from "react"
import styles from "../basket.module.scss"
import Product from "../../../../assets/productItem.jpg"
import Image from "next/image"
import Trash from "../../svg/trash"
const BasketItem = () => {
  return (
    <div className={styles.basket__form__products__product}>
      <div className={styles.basket__form__products__product__left}>
        <div className={styles.basket__form__products__product__left__img}>
          <Image src={Product} alt='' />
        </div>
        <div
          className={styles.basket__form__products__product__left__description}
        >
          <p
            className={
              styles.basket__form__products__product__left__description__title
            }
          >
            Alia 3-x местный диван, обивка велюр, терракот
          </p>
          <p
            className={
              styles.basket__form__products__product__left__description__discount
            }
          >
            Скидка: 14%
          </p>
          <p
            className={
              styles.basket__form__products__product__left__description__price
            }
          >
            Цена: 29990тг.
          </p>
        </div>
      </div>
      <div className={styles.basket__form__products__product__center}>
        <div className={styles.basket__form__products__product__center__title}>
          <p>кол. шт.</p>
        </div>
        <div className={styles.basket__form__products__product__center__count}>
          <div
            className={
              styles.basket__form__products__product__center__count__change
            }
          >
            <button>-</button>
          </div>
          <div
            className={
              styles.basket__form__products__product__center__count__value
            }
          >
            <input type='text' defaultValue={1} />
          </div>
          <div
            className={
              styles.basket__form__products__product__center__count__change
            }
          >
            <button>+</button>
          </div>
        </div>
      </div>
      <div className={styles.basket__form__products__product__right}>
        <div className={styles.basket__form__products__product__right__price}>
          <p
            className={
              styles.basket__form__products__product__right__price__title
            }
          >
            Сумма
          </p>

          <p
            className={
              styles.basket__form__products__product__right__price__usually
            }
          >
            34990тг
          </p>
          <p
            className={
              styles.basket__form__products__product__right__price__discount
            }
          >
            29990тг
          </p>
        </div>
        <div className={styles.basket__form__products__product__right__delete}>
          <Trash fill={"#005bcc"} />
        </div>
      </div>
    </div>
  )
}

export default BasketItem
