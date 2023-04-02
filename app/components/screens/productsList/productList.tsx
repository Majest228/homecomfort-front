import React, { useEffect, useState } from "react"
import ProductCard from "../../ui/card-item/productCard"
import Sort from "../../ui/sort/Sort"
import ProductsFilters from "./productFilters/productsFilters"
import styles from "./productList.module.scss"
import apiAxios from "@/app/api/api.interceptor"
import { IProduct } from "@/app/services/product/product.interface"
import { useAppSelector } from "@/app/hook/hook"

const ProductList = () => {
  const { favorite } = useAppSelector((state) => state.favorites)
  const { basket } = useAppSelector((state) => state.basket)
  const { compare } = useAppSelector((state) => state.compare)
  const [products, setProducts] = useState([])
  async function getProducts() {
    const { data: products } = await apiAxios.get("product/all")
    return setProducts(products)
  }
  useEffect(() => {
    getProducts()
  }, [])

  const filters = useAppSelector((state) => state.filters)

  function Filter(products: any = [], filters: any = {}) {
    const keys = Object.keys(filters).filter((key) =>
      filters.hasOwnProperty(key)
    )
    return products.filter((elem: any) => {
      const commonKeys = keys.filter((key) => elem.hasOwnProperty(key))
      return commonKeys.reduce((flag: boolean, key: string): any => {
        if (key == "title") {
          let search = elem[key]
          console.log(search)
          if (search.toUpperCase().includes(filters.title[0].toUpperCase()))
            return flag
          else return false
        }
        if (key == "price") {
          if (elem[key] >= filters[key][0] && elem[key] <= filters[key][1])
            return flag
          else return false
        }
      }, true)
    })
  }

  const filterData = Filter(products, filters)
  console.log(products)
  return (
    <div className={styles.ProductList}>
      <div className={styles.ProductList__container}>
        <div className={styles.ProductList__container__content__filters__title}>
          <h2
            className={
              styles.ProductList__container__content__filters__title__text
            }
          >
            Протеин
          </h2>
          <button
            className={
              styles.ProductList__container__content__filters__title__refresh
            }
          >
            Сбросить все фильтры
          </button>
        </div>
        <div className={styles.ProductList__container__content}>
          <div className={styles.ProductList__container__content__filters}>
            <ProductsFilters />
          </div>
          <div className={styles.ProductList__container__content__products}>
            <div
              className={styles.ProductList__container__content__products__sort}
            >
              <Sort />
            </div>
            <div
              className={
                styles.ProductList__container__content__products__items
              }
            >
              {filterData.map((product: IProduct) => (
                <div
                  className={
                    styles.ProductList__container__content__products__items__card
                  }
                >
                  <ProductCard
                    favorite={favorite.some(
                      (item: any) => item.id == product.id
                    )}
                    basket={basket.some((item: any) => item.id == product.id)}
                    compare={compare.some((item: any) => item.id == product.id)}
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    priceWithDiscount={product.priceWithDiscount}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
