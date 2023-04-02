import React, { useEffect, useRef, useState } from "react"
import { useAppSelector, useOnClickOutside } from "@/app/hook/hook"
import styles from "./basket.module.scss"
import CartIco from "../svg/cart"
import BasketItem from "./basketItem/basketItem"
import apiAxios from "@/app/api/api.interceptor"
import Link from "next/link"
const Basket = () => {
  const [isShow, setIsShow] = useState(false)

  const escape = useRef<HTMLElement>(null)
  const outside = useRef<HTMLElement>(null)

  const handleEscape = (event: any) => {
    if (event.keyCode == 27) setIsShow(false)
  }

  useOnClickOutside(outside, () => setIsShow(false))
  useEffect(() => {
    if (isShow) document.addEventListener("keydown", handleEscape, false)
    return () => {
      document.addEventListener("keydown", handleEscape, false)
    }
  }, [handleEscape, isShow])

  const { basket } = useAppSelector((state) => state.basket)
  const summ = basket.reduce(
    (acc, product) => acc + product.priceWithDiscount * product.count,
    0
  )
  const [products, setProducts] = useState([])
  async function getProducts() {
    const { data: products } = await apiAxios.get("product/all")
    return setProducts(products)
  }
  useEffect(() => {
    getProducts()
  }, [])
  const selectedProducts = {}
  products.forEach((item: any) =>
    basket.forEach((product: any) => {
      if (item.id == product.id) {
        selectedProducts[product.id] = item
      }
    })
  )
  return (
    <div className={styles.basket__wrapper}>
      <div onClick={() => setIsShow(!isShow)} className={styles.basket__open}>
        <CartIco />
        <p>Корзина</p>
      </div>
      {isShow && (
        <div className={styles.basket__modal} ref={escape}>
          <div className={styles.basket__form} ref={outside}>
            <div className={styles.basket__form__title}>
              <p>Корзина заказов</p>
            </div>
            <div className={styles.basket__form__products}>
              {basket.map((item) => (
                <BasketItem
                  id={item.id}
                  description={item.description}
                  priceWithDiscount={
                    selectedProducts[item.id].priceWithDiscount
                  }
                  price={selectedProducts[item.id].price}
                  count={item.count}
                />
              ))}
            </div>
            <div className={styles.basket__form__ordering}>
              <div className={styles.basket__form__ordering__price}>
                <p>{summ}тг</p>
              </div>
              <div className={styles.basket__form__ordering__sumbit}>
                <Link href='ordering' onClick={() => setIsShow(!isShow)}>
                  <button>Оформить заказ</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Basket
