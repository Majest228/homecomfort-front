import React, { useEffect } from "react"
import styles from "./ProductsPage.module.scss"
import Intro from "../../ui/intro/Intro"
import ProductBody from "./productBody/ProductBody"
import ProductDesc from "./productDesc/ProductDesc"
import ProductInfo from "./productInfo/productInfo"
import ProductComment from "./productComment/productComment"
import { useQuery } from "@tanstack/react-query"
import apiAxios from "@/app/api/api.interceptor"
import { useRouter } from "next/router"
import { withRouter } from 'next/router';
const ProductPage = ({ product }: any) => {

  return (
    <div className={styles.ProductPage}>
      <div className={styles.ProductPage__container}>
        <Intro />
        <ProductBody product={product} />
        <ProductDesc product={product} />
        <ProductInfo product={product} />
        <ProductComment product={product} />
      </div>
    </div>
  )
}

export default ProductPage
