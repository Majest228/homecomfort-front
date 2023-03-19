import React from "react"
import styles from "../ProductDesc.module.scss"

const ProductColumn = () => {
  return (
    <div className={styles.ProductDesc__content__characteristic__table__column}>
      <div
        className={
          styles.ProductDesc__content__characteristic__table__column__stat
        }
      >
        <div
          className={
            styles.ProductDesc__content__characteristic__table__column__stat__title
          }
        >
          <p>Сосна</p>
        </div>
        <div
          className={
            styles.ProductDesc__content__characteristic__table__column__stat__value
          }
        >
          <p>20%</p>
        </div>
      </div>
    </div>
  )
}

export default ProductColumn
