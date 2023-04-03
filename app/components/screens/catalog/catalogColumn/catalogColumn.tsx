import React from "react"
import styles from "../catalogPage.module.scss"

const CatalogColumn = ({ category }: any) => {
  console.log(category)
  const { name, parentId, children } = category
  return (
    <div className={styles.CatalogPage__container__content__column}>
      <div className={styles.CatalogPage__container__content__column__title}>
        <p>{name}</p>
      </div>
      <div className={styles.CatalogPage__container__content__column__items}>
        {children.length != 0 ? children?.map(item => (
          <div
            className={
              styles.CatalogPage__container__content__column__items__item
            }
          >
            <a>{item.name}</a>
          </div>
        )) : ""}
        {/* <div
          className={
            styles.CatalogPage__container__content__column__items__item
          }
        >
          <a>Диван</a>
        </div>
        <div
          className={
            styles.CatalogPage__container__content__column__items__item
          }
        >
          <a>Диван</a>
        </div> */}
      </div>
    </div>
  )
}

export default CatalogColumn
