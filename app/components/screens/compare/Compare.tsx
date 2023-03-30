import { useAppSelector } from "@/app/hook/hook"
import React from "react"
import ProductCard from "../../ui/card-item/productCard"
import styles from "./Compare.module.scss"
import CompareColumn from "./compareColumn/compareColumn"

const Compare = () => {
  const { compare } = useAppSelector((state) => state.compare)
  const { favorite } = useAppSelector((state) => state.favorites)
  const { basket } = useAppSelector((state) => state.basket)
  return (
    <div className={styles.Compare}>
      <div className={styles.Compare__container}>
        <div className={styles.Compare__container__content}>
          <div className={styles.Compare__container__content__title}>
            <h3>Сравнить товары</h3>
          </div>
          <div className={styles.Compare__container__content__products}>
            {compare.map((item) => (
              <div
                className={styles.Compare__container__content__products__item}
              >
                <ProductCard
                  id={item.id}
                  description={item.description}
                  discount={item.discount}
                  price={item.price}
                  favorite={favorite.some(
                    (product: any) => item.id == product.id
                  )}
                  compare={compare.some(
                    (product: any) => item.id == product.id
                  )}
                  basket={basket.some((product: any) => item.id == product.id)}
                />
                <CompareColumn />
                <CompareColumn />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compare
