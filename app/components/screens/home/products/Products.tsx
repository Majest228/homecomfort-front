import ProductCard from "@/app/components/ui/card-item/productCard"
import React, { useEffect } from "react"
import styles from "./Products.module.scss"
import { useAppSelector } from "@/app/hook/hook"
import { useQuery } from "@tanstack/react-query"
import { ProductService } from "@/app/services/product/product.service"
import apiAxios from "@/app/api/api.interceptor"
import { useRouter } from "next/router"

const Products = ({ title, products }: any) => {
  const { favorite } = useAppSelector((state) => state.favorites)
  const { basket } = useAppSelector((state) => state.basket)
  const favoriteId: any = []
  const basketId: any = []
  favorite.forEach((item: any) => favoriteId.push(item.id))
  basket.forEach((item: any) => basketId.push(item.id))

  return (
    <div className={styles.producstHome}>
      <div className={styles.producstHome__content}>
        <div className={styles.producstHome__content__title}>
          <h3>{title}</h3>
        </div>
        <div className={styles.producstHome__content__products}>
          {products.slice(0, 3).map((product) => (
            <ProductCard
              favorite={favoriteId.indexOf(product.id) > -1 ? true : false}
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
