import React from "react"
import styles from "./catalogPage.module.scss"
import CatalogColumn from "./catalogColumn/catalogColumn"
import { useGetAllQuery } from "@/app/store/category/category.api"

const CatalogPage = () => {
  const result = useGetAllQuery("")
  const { data, isLoading } = useGetAllQuery("")
  return (
    <div className={styles.CatalogPage}>
      <div className={styles.CatalogPage__container}>
        <div className={styles.CatalogPage__container__title}>
          <h3>Каталог</h3>
        </div>
        <div className={styles.CatalogPage__container__content}>
          {isLoading ? [] : data?.map(category => (
            <CatalogColumn category={category} />
          ))}
          {/* <CatalogColumn />
          <CatalogColumn />
          <CatalogColumn />
          <CatalogColumn />
          <CatalogColumn />
          <CatalogColumn /> */}
        </div>
      </div>
    </div>
  )
}

export default CatalogPage
