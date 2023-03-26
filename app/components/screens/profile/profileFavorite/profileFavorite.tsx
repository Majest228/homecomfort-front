import React from "react"
import ProfileLinks from "../profileLinks/profileLinks"
import styles from "../Profile.module.scss"
import ProductCard from "@/app/components/ui/card-item/productCard"
import { useAppSelector } from "@/app/hook/hook"
const ProfileFavorite = () => {
  const { favorite } = useAppSelector((state) => state.favorites)
  return (
    <div className={styles.ProfilePage}>
      <div className={styles.ProfilePage__container}>
        <div className={styles.ProfilePage__container__content}>
          <div className={styles.ProfilePage__container__content__title}>
            <p>Любимые товары</p>
          </div>
          <ProfileLinks />
          <div className={styles.ProfilePage__container__content__favorites}>
            {favorite.map((item: any) => (
              <ProductCard
                id={item.id}
                description={item.description}
                discount={item.discount}
                favorite={true}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileFavorite
