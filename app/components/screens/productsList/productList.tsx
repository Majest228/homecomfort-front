import React from "react"
import ProductsFilters from "./productFilters/productsFilters"
import styles from "./productList.module.scss"

const ProductList = () => {
  return (
    <div className={styles.ProductList}>
      <div className={styles.ProductList__container}>
        <div className={styles.ProductList__container__content}>
          <div className={styles.ProductList__container__content__filters}>
            <ProductsFilters />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
