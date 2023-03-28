import React, { useState } from "react"
import styles from "./productCard.module.scss"
import Image from "next/image"
import Sofa from "../../../assets/sofa-example.jpg"
import Comparison from "../svg/comparison"
import Favorite from "../svg/favorite"
import { useAppDispatch } from "@/app/hook/hook"
import { toggleFavorite } from "@/app/store/favorite/favorite.slice"
import { useRouter } from "next/router"
import Link from "next/link"

const ProductCard = ({
  id,
  favorite = false,
  discount = 0,
  description = "Alia 3-x местный диван, обивка велюр, терракот",
  title,
  price
}) => {
  const [getFavorite, setFavorite] = useState(favorite)
  const action = {
    id,
    favorite,
    discount,
    description,
    price,
  }
  const dispatch = useAppDispatch()


  return (
    <Link href={`products/product/${id}`} className={styles.ProductCard}>
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
              <p>-{discount}%</p>
            </div>
          </div>
          <div className={styles.ProductCard__content__top__img}>
            <Image src={Sofa} alt='' />
          </div>
        </div>
        <div className={styles.ProductCard__content__middle}>
          <h3>{title}</h3>
          <div className={styles.ProductCard__content__middle__description}>
            <p>{description}</p>
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
                onClick={() => {
                  dispatch(toggleFavorite(action))
                  setFavorite(!getFavorite)
                }}
              >
                <Favorite fillInner={getFavorite ? "red" : "none"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ProductCard__content__bottom}>
          <div className={styles.ProductCard__content__bottom__price}>
            <div
              className={styles.ProductCard__content__bottom__price__discount}
            >
              <p>{Math.trunc(price * ((100 - discount) / 100))}тг</p>
            </div>
            <div
              className={styles.ProductCard__content__bottom__price__nodiscount}
            >
              <p>{price}тг</p>
            </div>
          </div>
          <div className={styles.ProductCard__content__bottom__add}>
            <button>
              <a></a>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
