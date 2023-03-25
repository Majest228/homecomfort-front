import React from "react"
import styles from "../../../../Profile.module.scss"
import Image from "next/image"
import Product from "../../../../../../../assets/productItem.jpg"

const OrderItem = () => {
  return (
    <div
      className={
        styles.ProfilePage__container__content__order__content__product
      }
    >
      <div
        className={
          styles.ProfilePage__container__content__order__content__product__left
        }
      >
        <div
          className={
            styles.ProfilePage__container__content__order__content__product__left__img
          }
        >
          <Image src={Product} alt='' />
        </div>
        <div
          className={
            styles.ProfilePage__container__content__order__content__product__left__description
          }
        >
          <p
            className={
              styles.ProfilePage__container__content__order__content__product__left__description__title
            }
          >
            Alia 3-x местный диван, обивка велюр, терракот
          </p>
          <p
            className={
              styles.ProfilePage__container__content__order__content__product__left__description__discount
            }
          >
            Скидка: 14%
          </p>
          <p
            className={
              styles.ProfilePage__container__content__order__content__product__left__description__price
            }
          >
            Цена: 29990тг.
          </p>
        </div>
      </div>
      <div
        className={
          styles.ProfilePage__container__content__order__content__product__middle
        }
      >
        <div
          className={
            styles.ProfilePage__container__content__order__content__product__middle__title
          }
        >
          <p>Количество: 1</p>
        </div>
      </div>
      <div
        className={
          styles.ProfilePage__container__content__order__content__product__right
        }
      >
        <div
          className={
            styles.ProfilePage__container__content__order__content__product__right__title
          }
        >
          <p>Сумма: 29990тг</p>
        </div>
      </div>
    </div>
  )
}

export default OrderItem
