import React from "react"
import styles from "../Ordering.module.scss"

const OrderingItem = () => {
  return (
    <div className={styles.Ordering__container__content__right__items__item}>
      <div
        className={
          styles.Ordering__container__content__right__items__item__description
        }
      >
        <p>
          Alia 3-x местный диван, обивка велюр, терракот <a>× 1</a>
        </p>
      </div>
      <div
        className={
          styles.Ordering__container__content__right__items__item__price
        }
      >
        <p>690000тг</p>
      </div>
    </div>
  )
}

export default OrderingItem
