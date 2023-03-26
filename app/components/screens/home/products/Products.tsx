import ProductCard from "@/app/components/ui/card-item/productCard"
import React from "react"
import styles from "./Products.module.scss"
import { useAppSelector } from "@/app/hook/hook"

const Products = ({ title }: any) => {
  const { favorite } = useAppSelector((state) => state.favorites)
  const favoriteId = []
  favorite.forEach((item: any) => favoriteId.push(item.id))
  console.log(favoriteId)
  return (
    <div className={styles.producstHome}>
      <div className={styles.producstHome__content}>
        <div className={styles.producstHome__content__title}>
          <h3>{title}</h3>
        </div>
        <div className={styles.producstHome__content__products}>
          <ProductCard
            id={1}
            description={"Хороший диван"}
            discount={20}
            price={8000}
            favorite={favoriteId.indexOf(1) > -1 ? true : false}
          />
          <ProductCard
            id={2}
            description={"Жесткий диван"}
            discount={20}
            price={8000}
            favorite={favoriteId.indexOf(2) > -1 ? true : false}
          />
          <ProductCard
            id={3}
            description={"Опасный диван"}
            discount={20}
            price={8000}
            favorite={favoriteId.indexOf(3) > -1 ? true : false}
          />
        </div>
      </div>
    </div>
  )
}

export default Products
