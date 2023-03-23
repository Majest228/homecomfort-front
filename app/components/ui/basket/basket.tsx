import React, { useEffect, useRef, useState } from "react"
import { useOnClickOutside } from "@/app/hook/hook"
import styles from "./basket.module.scss"
import CartIco from "../svg/cart"
import BasketItem from "./basketItem/basketItem"
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
              <BasketItem />
              <BasketItem />
              <BasketItem />
            </div>
            <div className={styles.basket__form__ordering}>
              <div className={styles.basket__form__ordering__price}>
                <p>35990тг</p>
              </div>
              <div className={styles.basket__form__ordering__sumbit}>
                <button>Оформить заказ</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Basket
