import React from "react"
import styles from "./catalogPage.module.scss"
import CatalogColumn from "./catalogColumn/catalogColumn"

const CatalogPage = () => {
  return (
    <div className={styles.CatalogPage}>
      <div className={styles.CatalogPage__container}>
        <div className={styles.CatalogPage__container__title}>
          <h3>Каталог</h3>
        </div>
        <div className={styles.CatalogPage__container__content}>
          <CatalogColumn />
          <CatalogColumn />
          <CatalogColumn />
          <CatalogColumn />
          <CatalogColumn />
          <CatalogColumn />
        </div>
      </div>
    </div>
  )
}

export default CatalogPage
