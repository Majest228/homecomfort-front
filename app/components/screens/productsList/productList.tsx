import React from "react"
import ProductCard from "../../ui/card-item/productCard"
import Sort from "../../ui/sort/Sort"
import ProductsFilters from "./productFilters/productsFilters"
import styles from "./productList.module.scss"

const ProductList = () => {
  return (
    <div className={styles.ProductList}>
      <div className={styles.ProductList__container}>
        <div className={styles.ProductList__container__content__filters__title}>
          <h2
            className={
              styles.ProductList__container__content__filters__title__text
            }
          >
            Протеин
          </h2>
          <button
            className={
              styles.ProductList__container__content__filters__title__refresh
            }
          >
            Сбросить все фильтры
          </button>
        </div>
        <div className={styles.ProductList__container__content}>
          <div className={styles.ProductList__container__content__filters}>
            <ProductsFilters />
          </div>
          <div className={styles.ProductList__container__content__products}>
            <div
              className={styles.ProductList__container__content__products__sort}
            >
              <Sort />
            </div>
            <div
              className={
                styles.ProductList__container__content__products__items
              }
            >
              <div
                className={
                  styles.ProductList__container__content__products__items__card
                }
              >
                <ProductCard />
              </div>
              <div
                className={
                  styles.ProductList__container__content__products__items__card
                }
              >
                <ProductCard />
              </div>
              <div
                className={
                  styles.ProductList__container__content__products__items__card
                }
              >
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
