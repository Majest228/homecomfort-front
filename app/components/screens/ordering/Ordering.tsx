import React from "react"
import styles from "./Ordering.module.scss"
import OrderingItem from "./orderingItem/orderingItem"

const Ordering = () => {
  return (
    <div className={styles.Ordering}>
      <div className={styles.Ordering__container}>
        <div className={styles.Ordering__container__content}>
          <div className={styles.Ordering__container__content__left}>
            <div className={styles.Ordering__container__content__left__title}>
              <h3>Детали оплаты</h3>
            </div>
            <form className={styles.Ordering__container__content__left__form}>
              <div
                className={
                  styles.Ordering__container__content__left__form__input
                }
              >
                <input type='text' placeholder='Введите имя' />
              </div>
              <div
                className={
                  styles.Ordering__container__content__left__form__input
                }
              >
                <input type='tel' placeholder='Введите телефон' />
              </div>
              <div
                className={
                  styles.Ordering__container__content__left__form__input
                }
              >
                <input
                  type='text'
                  placeholder='Введите город, улицу, номер дома и квартиру'
                />
              </div>
              <div
                className={
                  styles.Ordering__container__content__left__form__submit
                }
              >
                <button>Подтвердить заказ</button>
              </div>
            </form>
          </div>
          <div className={styles.Ordering__container__content__right}>
            <div className={styles.Ordering__container__content__right__title}>
              <h3>Ваш заказ</h3>
            </div>
            <div className={styles.Ordering__container__content__right__items}>
              <OrderingItem />
              <OrderingItem />
            </div>
            <div className={styles.Ordering__container__content__right__sum}>
              <div
                className={
                  styles.Ordering__container__content__right__sum__title
                }
              >
                <p>Итого</p>
              </div>
              <div
                className={
                  styles.Ordering__container__content__right__sum__value
                }
              >
                <p>885000тг</p>
              </div>
            </div>
            <div
              className={
                styles.Ordering__container__content__right__additionally
              }
            >
              <div
                className={
                  styles.Ordering__container__content__right__additionally__title
                }
              >
                <p>Оплата при доставке</p>
              </div>
              <div
                className={
                  styles.Ordering__container__content__right__additionally__description
                }
              >
                <p>
                  Оплата наличными или банковской картой при доставке заказа.
                </p>

                <p>
                  Персональная информация будет использована в рамках
                  обслуживания клиента.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ordering
