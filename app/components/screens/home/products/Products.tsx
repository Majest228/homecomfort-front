import ProductCard from "@/app/components/ui/card-item/productCard"
import React from "react"
import styles from "./Products.module.scss"

const Products = ({ title }: any) => {
  return (
    <div className={styles.producstHome}>
      <div className={styles.producstHome__content}>
        <div className={styles.producstHome__content__title}>
          <h3>{title}</h3>
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
