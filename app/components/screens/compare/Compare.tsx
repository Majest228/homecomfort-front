import React from "react"
import ProductCard from "../../ui/card-item/productCard"
import styles from "./Compare.module.scss"
import CompareColumn from "./compareColumn/compareColumn"

const Compare = () => {
  return (
    <div className={styles.Compare}>
      <div className={styles.Compare__container}>
        <div className={styles.Compare__container__content}>
          <div className={styles.Compare__container__content__title}>
            <h3>Сравнить товары</h3>
          </div>
          <div className={styles.Compare__container__content__products}>
            <div className={styles.Compare__container__content__products__item}>
              <ProductCard />
              <CompareColumn />
              <CompareColumn />
            </div>
            <div className={styles.Compare__container__content__products__item}>
              <ProductCard />
            </div>
            <div className={styles.Compare__container__content__products__item}>
              <ProductCard />
            </div>
            <div className={styles.Compare__container__content__products__item}>
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compare
