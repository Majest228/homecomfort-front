import React from "react"
import ProfileLinks from "../profileLinks/profileLinks"
import styles from "../Profile.module.scss"
import ProductCard from "@/app/components/ui/card-item/productCard"

const ProfileFavorite = () => {
  return (
    <div className={styles.ProfilePage}>
      <div className={styles.ProfilePage__container}>
        <div className={styles.ProfilePage__container__content}>
          <div className={styles.ProfilePage__container__content__title}>
            <p>Любимые товары</p>
          </div>
          <ProfileLinks />
          <div className={styles.ProfilePage__container__content__favorites}>
            <ProductCard favorite={true} />
            <ProductCard favorite={true} />
            <ProductCard favorite={true} />
            <ProductCard favorite={true} />
            <ProductCard favorite={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileFavorite
