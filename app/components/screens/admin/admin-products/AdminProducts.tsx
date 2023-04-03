import { useDeleteProductMutation, useGetAllProdutsQuery } from '@/app/store/admin/admin.api'
import styles from '../Admin.module.scss'
import { useState } from 'react'
import CreateProduct from '@/app/components/ui/create-product/CreateProduct'
import UpdateProducts from '@/app/components/ui/create-product/UpdateProducts'

const AdminProducts = () => {
    const result = useGetAllProdutsQuery("")
    const { data, isLoading } = useGetAllProdutsQuery("")
    console.log('products', data)

    const [deleteProduct] = useDeleteProductMutation()

    const removeProduct = (id: number) => {
        deleteProduct(id)
        result.refetch()
    }

    const [isShowCreate, setIsShowCreate] = useState(false)
    const [isShowUpdate, setIsShowUpdate] = useState(false)
    const [index, setIndex] = useState(0)
    return (
        <div className={styles.admin__users}>
            <div className={styles.admin__container}>
                <div className={styles.admin__users__content}>
                    <h3>Админ панель - Пользователи</h3>
                    <p>Количество пользователей - {isLoading ? 0 : data.length}</p>
                    <button onClick={() => setIsShowCreate(true)}>Создать продукт</button>
                    {isShowCreate ? <CreateProduct setIsShowCreate={setIsShowCreate} result={result} /> : ""}

                    <div className={styles.admin__users__content__items}>
                        {isLoading ? [] : data?.map((item, id) => (
                            <div className={styles.admin__users__content__items__item}>
                                {id + 1}
                                <div className={styles.admin__users__content__items__item__info}>
                                    <h3 className={styles.admin__users__content__items__item__info__email}>{isLoading ? "" : item?.title}</h3>
                                    <h3 className={styles.admin__users__content__items__item__info__login}>{isLoading ? "" : item?.articul}</h3>
                                    <p className={styles.admin__users__content__items__item__info__phone}>{isLoading ? "" : item?.price}</p>
                                    <p className={styles.admin__users__content__items__item__info__phone}>{isLoading ? "" : item?.slug}</p>
                                    <p className={styles.admin__users__content__items__item__info__phone}>{isLoading ? "" : item?.price}</p>
                                </div>
                                <div className={styles.admin__users__content__items__item__buttons}>
                                    <button onClick={() => {
                                        setIsShowUpdate(true)
                                        setIndex(item?.id)
                                    }}>Update</button>
                                    <button onClick={() => removeProduct(item?.id)}> X</button>
                                </div>
                            </div>
                        ))}
                        {isShowUpdate ? <UpdateProducts setIsShowUpdate={setIsShowUpdate} index={index} result={result} /> : ""}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AdminProducts