import { CatalogInterface } from "../Catalog.interface"
import styles from "./Category.module.scss"

const Category = ({ _id, name }: CatalogInterface): JSX.Element => {
  return (
    <>
      <li className={styles.category__item} key={_id}>
        <input type='checkbox' value={name} />
        <label htmlFor={`category${_id}`}>{name}</label>
      </li>
    </>
  )
}

export default Category
