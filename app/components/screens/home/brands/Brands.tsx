import React from "react"
import styles from "../Home.module.scss"
import Image from "next/image"
import brand from "../../../../assets/brand.png"
import Link from "next/link"
const Brands = () => {
  return (
    <div className={styles.home__brands}>
      <h3 className={styles.home__brands__title}>Бренды</h3>
      <div className={styles.home__brands__content}>
        <Link href='/'>
          <Image src={brand} alt='brand' />
        </Link>
        <Link href='/'>
          <Image src={brand} alt='brand' />
        </Link>
        <Link href='/'>
          <Image src={brand} alt='brand' />
        </Link>
        <Link href='/'>
          <Image src={brand} alt='brand' />
        </Link>
        <Link href='/'>
          <Image src={brand} alt='brand' />
        </Link>
      </div>
    </div>
  )
}

export default Brands
