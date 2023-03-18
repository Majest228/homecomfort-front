import React from "react"
import styles from "./ideas.module.scss"
import IdeaItem from "./idea/idea"

const Ideas = () => {
  return (
    <div className={styles.ideasHome}>
      <div className={styles.ideasHome__content}>
        <div className={styles.ideasHome__content__title}>
          <h3>Идеи для дома</h3>
        </div>
        <div className={styles.ideasHome__content__ideas}>
          <IdeaItem />
          <IdeaItem />
        </div>
      </div>
    </div>
  )
}

export default Ideas
