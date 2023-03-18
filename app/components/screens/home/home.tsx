import React from "react"
import styles from "./home.module.scss"
import Ideas from "./Ideas/ideas"
import Intro from "./intro/intro"
import Products from "./products/products"
const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <Intro />
        <Products />
        <Ideas />
      </div>
    </div>
  )
}

export default HomePage
