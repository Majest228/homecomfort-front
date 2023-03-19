import React from "react"
import styles from "./ProductsPage.module.scss"
import Intro from "../../ui/intro/Intro"
import ProductBody from "./productBody/ProductBody"
import ProductDesc from "./productDesc/ProductDesc"

const ProductPage = () => {
  return (
    <div className={styles.ProductPage}>
      <div className={styles.ProductPage__container}>
        <Intro />
        <ProductBody />
        <ProductDesc />
      </div>
    </div>
  )
}

export default ProductPage
