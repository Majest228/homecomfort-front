import React from "react"
import styles from "./Profile.module.scss"
import ProfileLinks from "./profileLinks/profileLinks"

const ProfilePage = () => {
  return (
    <div className={styles.ProfilePage}>
      <div className={styles.ProfilePage__container}>
        <div className={styles.ProfilePage__container__content}>
          <div className={styles.ProfilePage__container__content__title}>
            <p>Изменение профиля</p>
          </div>
          <ProfileLinks />
          <div className={styles.ProfilePage__container__content__form}>
            <form>
              <div
                className={styles.ProfilePage__container__content__form__left}
              >
                <div
                  className={
                    styles.ProfilePage__container__content__form__personal
                  }
                >
                  <p>Персональные данные</p>
                </div>
                <div
                  className={
                    styles.ProfilePage__container__content__form__input
                  }
                >
                  <input type={"text"} placeholder='Введите имя' />
                </div>
                <div
                  className={
                    styles.ProfilePage__container__content__form__input
                  }
                >
                  <input type={"tel"} placeholder='Введите телефон' />
                </div>
                <div
                  className={
                    styles.ProfilePage__container__content__form__input
                  }
                >
                  <input type={"email"} placeholder='Введите почту' />
                </div>
              </div>
              <div
                className={styles.ProfilePage__container__content__form__right}
              >
                <div
                  className={
                    styles.ProfilePage__container__content__form__personal
                  }
                >
                  <p>Изменение пароля</p>
                </div>
                <div
                  className={
                    styles.ProfilePage__container__content__form__input
                  }
                >
                  <input
                    type={"password"}
                    placeholder='Введите текущий пароль'
                  />
                </div>
                <div
                  className={
                    styles.ProfilePage__container__content__form__input
                  }
                >
                  <input type={"password"} placeholder='Введите новый пароль' />
                </div>
                <div
                  className={
                    styles.ProfilePage__container__content__form__input
                  }
                >
                  <input
                    type={"password"}
                    placeholder='Повторите новый пароль'
                  />
                </div>
                <div
                  className={
                    styles.ProfilePage__container__content__form__submit
                  }
                >
                  <button>Изменить данные</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
