import React, { useEffect, useRef, useState } from "react"
import styles from "../productList.module.scss"
import { CatalogInterface } from "./Catalog.interface"
import Category from "./category/category"

const ProductsFilters = () => {
  const [minValue, setMinValue] = useState(1300)
  const [maxValue, setMaxValue] = useState(999990)
  const [categoriesFull, setCategoriesFull] = useState(true)
  const categories: CatalogInterface[] = [
    {
      _id: 0,
      name: "Протеин для женщин",
    },
    {
      _id: 1,
      name: "Протеиновые батончики",
    },
    {
      _id: 2,
      name: "Комплексный протеин",
    },
    {
      _id: 3,
      name: "Казеин",
    },
    {
      _id: 4,
      name: "Сывороточный изолят",
    },
    {
      _id: 5,
      name: "Сывороточный изолят",
    },
    {
      _id: 6,
      name: "Сывороточный изолят",
    },
    {
      _id: 7,
      name: "Сывороточный изолят",
    },
  ]
  const progressRef = useRef<any>(null)

  const handleMax = (e: any) => {
    setMaxValue(e.target.value)
  }
  const handleChangeMaxValue = (e: any) => {
    setMaxValue(e.target.value)
  }

  const handleChangeMinValue = (e: any) => {
    setMinValue(e.target.value)
  }
  const handleMin = (e: any) => {
    setMinValue(e.target.value)
  }

  useEffect(() => {
    progressRef.current.style.left = (minValue / 999990) * 100 + "%"
    progressRef.current.style.right = 100 - (maxValue / 999990) * 100 + "%"
  }, [minValue, maxValue])
  return (
    <div>
      <div className={styles.ProductList__container__content__filters__title}>
        <h2
          className={
            styles.ProductList__container__content__filters__title__text
          }
        >
          Протеин
        </h2>
        <button
          className={
            styles.ProductList__container__content__filters__title__refresh
          }
        >
          Сбросить все фильтры
        </button>
      </div>
      <div className={styles.ProductList__container__content__filters__content}>
        <div
          className={
            styles.ProductList__container__content__filters__content__left
          }
        >
          <div
            className={
              styles.ProductList__container__content__filters__content__left__price
            }
          >
            <p>Цена, Рубли</p>
            <div
              className={
                styles.ProductList__container__content__filters__content__left__price__inputs
              }
            >
              <input
                className={
                  styles.ProductList__container__content__filters__content__left__price__inputs__prev
                }
                placeholder='от 1300'
                type='text'
                value={minValue}
                onChange={(e: any) => handleChangeMinValue(e)}
              />
              <input
                className={
                  styles.ProductList__container__content__filters__content__left__price__inputs__next
                }
                placeholder='до 999 990'
                type='text'
                value={maxValue}
                onChange={(e: any) => handleChangeMaxValue(e)}
              />
            </div>
            <div
              className={
                styles.ProductList__container__content__filters__content__left__price__slider
              }
            >
              <div
                className={
                  styles.ProductList__container__content__filters__content__left__price__slider__progress
                }
                ref={progressRef}
              ></div>
            </div>
            <div
              className={
                styles.ProductList__container__content__filters__content__left__price__range
              }
            >
              <input
                type='range'
                min='0'
                max='999990'
                defaultValue={minValue}
                className={
                  styles.ProductList__container__content__filters__content__left__price__range__min
                }
                onChange={handleMin}
                step='100'
              />
              <input
                type='range'
                min='0'
                max='999990'
                className={
                  styles.ProductList__container__content__filters__content__left__price__range__max
                }
                value={maxValue}
                onChange={(e: any) => setMaxValue(e.target.value)}
                step='100'
              />
            </div>
          </div>
          <div
            className={
              styles.ProductList__container__content__filters__content__left__category
            }
          >
            <form
              className={
                styles.ProductList__container__content__filters__content__left__category__form
              }
            >
              <h2
                className={
                  styles.ProductList__container__content__filters__content__left__category__form__title
                }
              >
                Категории
              </h2>
              <ul
                className={
                  styles.ProductList__container__content__filters__content__left__category__form__categories
                }
              >
                {categories.length > 4 && categoriesFull
                  ? categories
                      .slice(0, 5)
                      .map((category) => (
                        <Category
                          key={category._id}
                          _id={category._id}
                          name={category.name}
                        />
                      ))
                  : categories
                      .slice()
                      .map((category) => (
                        <Category
                          key={category._id}
                          _id={category._id}
                          name={category.name}
                        />
                      ))}

                {categoriesFull ? (
                  <button
                    className={
                      styles.ProductList__container__content__filters__content__left__category__form__categories__button
                    }
                    onClick={(e) => {
                      e.preventDefault()
                      setCategoriesFull(!categoriesFull)
                    }}
                  >
                    Показать еще
                  </button>
                ) : (
                  <button
                    className={
                      styles.ProductList__container__content__filters__content__left__category__form__categories__button
                    }
                    onClick={(e) => {
                      e.preventDefault()
                      setCategoriesFull(!categoriesFull)
                    }}
                  >
                    Скрыть
                  </button>
                )}
              </ul>
            </form>
          </div>
          <div
            className={
              styles.ProductList__container__content__filters__content__left__producer
            }
          >
            <form
              className={
                styles.ProductList__container__content__filters__content__left__producer__form
              }
            >
              <h2
                className={
                  styles.ProductList__container__content__filters__content__left__producer__form__title
                }
              >
                Производитель
              </h2>
              <ul
                className={
                  styles.ProductList__container__content__filters__content__left__producer__form__produceries
                }
              >
                {categories.map((category) => (
                  <Category
                    key={category._id}
                    _id={category._id}
                    name={category.name}
                  />
                ))}
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsFilters
