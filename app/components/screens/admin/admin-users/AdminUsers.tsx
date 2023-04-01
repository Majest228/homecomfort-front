import { useDeleteUserMutation, useGetAllQuery } from '@/app/store/admin/admin.api'
import styles from '../Admin.module.scss'
import { useState } from 'react'
import AdminModal from '@/app/components/ui/admin/modal/AdminModal'

const AdminUsers = () => {
    const result = useGetAllQuery("")
    const { data, isLoading } = useGetAllQuery("")
    const [deleteUser] = useDeleteUserMutation()
    const [index, setIndex] = useState(0)

    const removeUser = (id: number) => {
        deleteUser(id)
        result.refetch()
    }

    console.log("all", data)

    const [isShow, setIsShow] = useState(false)
    return (
        <div className={styles.admin__users}>
            <div className={styles.admin__container}>
                <div className={styles.admin__users__content}>
                    <h3>Админ панель - Пользователи</h3>
                    <p>Количество пользователей - {isLoading ? 0 : data.length}</p>
                    <div className={styles.admin__users__content__items}>
                        {isLoading ? [] : data?.map((item, id) => (
                            <div className={styles.admin__users__content__items__item}>
                                {id + 1}
                                <div className={styles.admin__users__content__items__item__info}>
                                    <h3 className={styles.admin__users__content__items__item__info__email}>{isLoading ? "" : item?.email}</h3>
                                    <h3 className={styles.admin__users__content__items__item__info__login}>{isLoading ? "" : item?.login}</h3>
                                    <p className={styles.admin__users__content__items__item__info__phone}>{isLoading ? "" : item?.phone}</p>
                                </div>
                                <div className={styles.admin__users__content__items__item__buttons}>
                                    <button onClick={() => {
                                        setIsShow(true)
                                        setIndex(item.id)
                                    }}>Update</button>
                                    <button onClick={() => removeUser(item?.id)}> X</button>
                                </div>
                            </div>
                        ))}
                        {isShow ? <AdminModal index={index} /> : ""}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AdminUsers