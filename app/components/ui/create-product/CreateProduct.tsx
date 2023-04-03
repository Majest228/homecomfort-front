import apiAxios from '@/app/api/api.interceptor'
import styles from './CreateProduct.module.scss'
import { useState } from 'react'
import Cookies from 'js-cookie'
const CreateProduct = ({ result, setIsShowCreate }) => {

    const [title, setTitle] = useState("")
    const [slug, setSlug] = useState("")

    const createUser = async ({ title, slug }: any) => {
        await apiAxios.post(
            `product/admin/create`,
            {
                title, slug
            },
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get("accessToken")}`,
                },
            }
        )
        result.refetch()
        setIsShowCreate(false)
    }
    return (
        <div className={styles.create__modal}>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    createUser({ title, slug })
                    // updateUser({ id: idUser, login: login })
                }}
                className={styles.create__modal__content}
            >
                <h3 className={styles.create__modal__content__title}>
                    Создание продукта
                </h3>
                <div className={styles.create__modal__content__block}>
                    <div className={styles.create__modal__content__block__item}>
                        <p>Название</p>
                        <input
                            type='text'
                            placeholder='Название'
                            onChange={(e) => setTitle(e.target.value)}
                        // value={login}
                        />
                    </div>
                    <div className={styles.create__modal__content__block__item}>
                        <p>Ссыылка</p>
                        <input
                            type='text'
                            placeholder='Ссылка'
                            onChange={(e) => setSlug(e.target.value)}
                        // value={login}
                        />
                    </div>
                    <div className={styles.create__modal__content__block__item}>
                        <p>Описание</p>
                        <input
                            type='text'
                            placeholder='Описание'
                        // onChange={(e) => setLogin(e.target.value)}
                        // value={login}
                        />
                    </div>
                    <div className={styles.create__modal__content__block__item}>
                        <p>Цена</p>
                        <input
                            type='text'
                            placeholder='Цена'
                        // onChange={(e) => setLogin(e.target.value)}
                        // value={login}
                        />
                    </div>
                    <div className={styles.create__modal__content__block__item}>
                        <p>Размер</p>
                        <input
                            type='text'
                            placeholder='Размер'
                        // onChange={(e) => setLogin(e.target.value)}
                        // value={login}
                        />
                    </div>
                    <div className={styles.create__modal__content__block__item}>
                        <p>Цена со скидкой</p>
                        <input
                            type='text'
                            placeholder='Цена со скидкой'
                        // onChange={(e) => setLogin(e.target.value)}
                        // value={login}
                        />
                    </div>
                    <div className={styles.create__modal__content__block__item}>
                        <p>Механизм трансформации</p>
                        <input
                            type='text'
                            placeholder='Механизм трансформации'
                        // onChange={(e) => setLogin(e.target.value)}
                        // value={login}
                        />
                    </div>
                    <div className={styles.create__modal__content__block__item}>
                        <p>Дизайн</p>
                        <input
                            type='text'
                            placeholder='Дизайн'
                        // onChange={(e) => setLogin(e.target.value)}
                        // value={login}
                        />
                    </div>
                    <div className={styles.create__modal__content__block__item}>
                        <p>Материал каркаса</p>
                        <input
                            type='text'
                            placeholder='Материал каркаса'
                        // onChange={(e) => setLogin(e.target.value)}
                        // value={login}
                        />
                    </div>
                    <div className={styles.create__modal__content__block__item}>
                        <p>Материал обивки</p>
                        <input
                            type='text'
                            placeholder='Материал обивки'
                        // onChange={(e) => setLogin(e.target.value)}
                        // value={login}
                        />
                    </div>
                    <div className={styles.create__modal__content__block__item}>
                        <p>Форма</p>
                        <input
                            type='text'
                            placeholder='Форма'
                        // onChange={(e) => setLogin(e.target.value)}
                        // value={login}
                        />
                    </div>
                    <div className={styles.create__modal__content__block__item}>
                        <p>Материал ножек</p>
                        <input
                            type='text'
                            placeholder='Материал ножек'
                        // onChange={(e) => setLogin(e.target.value)}
                        // value={login}
                        />
                    </div>
                    <div className={styles.create__modal__content__block__item}>
                        <p>Цвет ножек</p>
                        <input
                            type='text'
                            placeholder='Цвет ножек'
                        // onChange={(e) => setLogin(e.target.value)}
                        // value={login}
                        />
                    </div>
                    <button type='submit'>Создать продукт</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct