import React from "react"
import styles from "../Compare.module.scss"

const CompareColumn = () => {
  return (
    <div className={styles.Compare__container__content__products__item__column}>
      <div
        className={
          styles.Compare__container__content__products__item__column__name
        }
      >
        <p>Состав</p>
      </div>
      <div
        className={
          styles.Compare__container__content__products__item__column__value
        }
      >
        <p>Сосна 100%</p>
      </div>
    </div>
  )
}

export default CompareColumn
