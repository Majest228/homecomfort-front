import React from "react"
import ProductColumn from "./productColumn/productColumn"
import styles from "./ProductDesc.module.scss"

const ProductDesc = () => {
  return (
    <div className={styles.ProductDesc}>
      <div className={styles.ProductDesc__content}>
        <div className={styles.ProductDesc__content__characteristic}>
          <div className={styles.ProductDesc__content__characteristic__title}>
            <p>Состав</p>
          </div>
          <div className={styles.ProductDesc__content__characteristic__table}>
            <ProductColumn />
            <ProductColumn />
            <ProductColumn />
            <ProductColumn />
            <ProductColumn />
            <ProductColumn />
            <ProductColumn />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDesc
