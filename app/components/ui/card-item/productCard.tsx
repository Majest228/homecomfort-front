import React from "react"
import styles from "./productCard.module.scss"
import Image from "next/image"
import Sofa from "../../../assets/sofa-example.jpg"
import Comparison from "../svg/comparison"
import Favorite from "../svg/favorite"

const ProductCard = ({ favorite = false }) => {
  return (
    <div className={styles.ProductCard}>
      <div className={styles.ProductCard__content}>
        <div className={styles.ProductCard__content__top}>
          <div className={styles.ProductCard__content__top__status}>
            <div className={styles.ProductCard__content__top__status__value}>
              <p>Хит</p>
            </div>
            <div className={styles.ProductCard__content__top__status__value}>
              <p>Новинка</p>
            </div>
            <div className={styles.ProductCard__content__top__status__value}>
              <p>-25%</p>
            </div>
          </div>
          <div className={styles.ProductCard__content__top__img}>
            <Image src={Sofa} alt='' />
          </div>
        </div>
        <div className={styles.ProductCard__content__middle}>
          <div className={styles.ProductCard__content__middle__description}>
            <p>Alia 3-x местный диван, обивка велюр, терракот</p>
            <div
              className={
                styles.ProductCard__content__middle__description__buttons
              }
            >
              <div
                className={
                  styles.ProductCard__content__middle__description__buttons__compare
                }
              >
                <Comparison />
              </div>
              <div
                className={
                  styles.ProductCard__content__middle__description__buttons__favorite
                }
              >
                <Favorite fillInner={favorite ? "red" : "none"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ProductCard__content__bottom}>
          <div className={styles.ProductCard__content__bottom__price}>
            <div
              className={styles.ProductCard__content__bottom__price__discount}
            >
              <p>6850тг</p>
            </div>
            <div
              className={styles.ProductCard__content__bottom__price__nodiscount}
            >
              <p>8560тг</p>
            </div>
          </div>
          <div className={styles.ProductCard__content__bottom__add}>
            <button>
              <a></a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
