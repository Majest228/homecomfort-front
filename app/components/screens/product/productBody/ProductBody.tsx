import React from "react"
import styles from "./ProductBody.module.scss"
import ProductImg from "../../../../assets/productItem.jpg"
import Image from "next/image"
import Comparison from "@/app/components/ui/svg/comparison"
import Favorite from "@/app/components/ui/svg/favorite"
import Star from "@/app/components/ui/svg/star"

const ProductBody = () => {
  const stars = ["star", "star", "star", "star", "star"]
  const rating = 4

  return (
    <div className={styles.ProductBody}>
      <div className={styles.ProductBody__content}>
        <div className={styles.ProductBody__content__left}>
          <div className={styles.ProductBody__content__left__main}>
            <Image src={ProductImg} alt='' />
          </div>
          <div className={styles.ProductBody__content__left__additionally}>
            <Image src={ProductImg} alt='' width={175} height={100} />
            <Image src={ProductImg} alt='' width={175} height={100} />
            <Image src={ProductImg} alt='' width={175} height={100} />
          </div>
        </div>
        <div className={styles.ProductBody__content__right}>
          <div className={styles.ProductBody__content__right__content}>
            <div className={styles.ProductBody__content__right__content__top}>
              <div
                className={
                  styles.ProductBody__content__right__content__top__left
                }
              >
                <p>
                  <a>Артикул:</a> 00000012880
                </p>
              </div>
              <div
                className={
                  styles.ProductBody__content__right__content__top__right
                }
              >
                <div
                  className={
                    styles.ProductBody__content__right__content__top__right__comparison
                  }
                >
                  <Comparison />
                </div>
                <div
                  className={
                    styles.ProductBody__content__right__content__top__right__favorite
                  }
                >
                  <Favorite />
                </div>
              </div>
            </div>
            <div
              className={styles.ProductBody__content__right__content__middle}
            >
              <div
                className={
                  styles.ProductBody__content__right__content__middle__description
                }
              >
                <p>Lizie угловой раскладной диван с ящиками для хранения</p>
              </div>
              <div
                className={
                  styles.ProductBody__content__right__content__middle__stars
                }
              >
                {stars.map((star, i) => (
                  <div
                    className={
                      styles.ProductBody__content__right__content__middle__stars__star
                    }
                  >
                    <Star fill={rating >= i + 1 ? "#005BCC" : "#E4E4EE"} />
                  </div>
                ))}
                <div
                  className={
                    styles.ProductBody__content__right__content__middle__stars__count
                  }
                >
                  <p>32</p>
                </div>
              </div>
            </div>
            <div
              className={styles.ProductBody__content__right__content__bottom}
            >
              <div
                className={
                  styles.ProductBody__content__right__content__bottom__status
                }
              >
                <p>Нет в наличии. Срок ожидания товара до 3-х мес.</p>
              </div>
              <div
                className={
                  styles.ProductBody__content__right__content__bottom__price
                }
              >
                <p>478 000 ₸</p>
              </div>
              <div
                className={
                  styles.ProductBody__content__right__content__bottom__buy
                }
              >
                <button>Добавить в корзину</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductBody
