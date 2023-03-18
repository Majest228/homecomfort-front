import ProductCard from "@/app/components/ui/card-item/productCard"
import React from "react"
import styles from "./products.module.scss"

const Products = () => {
  return (
    <div className={styles.producstHome}>
      <div className={styles.producstHome__content}>
        <div className={styles.producstHome__content__title}>
          <h3>Хит продаж</h3>
        </div>
        <div className={styles.producstHome__content__products}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default Products
