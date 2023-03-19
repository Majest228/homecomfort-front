import React from "react"
import styles from "./Concepts.module.scss"
import ConceptItem from "./concept/ConceptItem"

const Concepts = () => {
  return (
    <div className={styles.ideasHome}>
      <div className={styles.ideasHome__content}>
        <div className={styles.ideasHome__content__title}>
          <h3>Идеи для дома</h3>
        </div>
        <div className={styles.ideasHome__content__ideas}>
          <ConceptItem />
          <ConceptItem />
        </div>
      </div>
    </div>
  )
}

export default Concepts
