import React from "react"
import styles from "../catalogPage.module.scss"

const CatalogColumn = () => {
  return (
    <div className={styles.CatalogPage__container__content__column}>
      <div className={styles.CatalogPage__container__content__column__title}>
        <p>Мягкая мебель</p>
      </div>
      <div className={styles.CatalogPage__container__content__column__items}>
        <div
          className={
            styles.CatalogPage__container__content__column__items__item
          }
        >
          <a>Диван</a>
        </div>
        <div
          className={
            styles.CatalogPage__container__content__column__items__item
          }
        >
          <a>Диван</a>
        </div>
      </div>
    </div>
  )
}

export default CatalogColumn
