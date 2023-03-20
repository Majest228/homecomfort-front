import React from "react"
import styles from "../productComment.module.scss"

const CommentSort = () => {
  return (
    <div className={styles.ProductComment__content__sort}>
      <div className={styles.ProductComment__content__sort__content}>
        <ul>
          <li className={styles.selected}>По популярности</li>
          <li>Новые</li>
          <li>С высокой оценкой</li>
          <li>С низкой оценкой</li>
        </ul>
      </div>
    </div>
  )
}

export default CommentSort
