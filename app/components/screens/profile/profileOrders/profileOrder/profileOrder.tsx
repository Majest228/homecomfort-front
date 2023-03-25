import Link from "next/link"
import React from "react"
import styles from "../../Profile.module.scss"

const ProfileOrder = () => {
  return (
    <div className={styles.ProfilePage__container__content__orders__order}>
      <Link href={`/profile/orders/1`}>Заказ № 1</Link>
    </div>
  )
}

export default ProfileOrder
