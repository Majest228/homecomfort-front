import React from "react"
import styles from "./ProductsPage.module.scss"
import Intro from "../../ui/intro/Intro"
import ProductBody from "./productBody/ProductBody"
import ProductDesc from "./productDesc/ProductDesc"
import ProductInfo from "./productInfo/productInfo"
import ProductComment from "./productComment/productComment"

const ProductPage = () => {
  return (
    <div className={styles.ProductPage}>
      <div className={styles.ProductPage__container}>
        <Intro />
        <ProductBody />
        <ProductDesc />
        <ProductInfo />
        <ProductComment />
      </div>
    </div>
  )
}

export default ProductPage
