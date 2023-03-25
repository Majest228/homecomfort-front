import React from "react"
import styles from "../../../Profile.module.scss"
import OrderItem from "./orderItem/orderItem"

const ProfileOrderInfo = () => {
  return (
    <div className={styles.ProfilePage}>
      <div className={styles.ProfilePage__container}>
        <div className={styles.ProfilePage__container__content}>
          <div className={styles.ProfilePage__container__content__order}>
            <div
              className={styles.ProfilePage__container__content__order__title}
            >
              <p>Информация о заказе</p>
            </div>
            <div
              className={styles.ProfilePage__container__content__order__content}
            >
              <div
                className={
                  styles.ProfilePage__container__content__order__content__status
                }
              >
                <p
                  className={
                    styles.ProfilePage__container__content__order__content__status__sending
                  }
                >
                  Статус: <a>отправлено</a>
                </p>
                <p
                  className={
                    styles.ProfilePage__container__content__order__content__status__date
                  }
                >
                  Создано: 25.03.23
                </p>
              </div>
              <div
                className={styles.ProfilePage__container__content__order__items}
              >
                <OrderItem />
                <OrderItem />
              </div>
              <div
                className={
                  styles.ProfilePage__container__content__order__content__amount
                }
              >
                <p>Общая сумма: 59980тг</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileOrderInfo
