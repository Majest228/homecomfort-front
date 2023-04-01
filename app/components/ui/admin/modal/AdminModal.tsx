import React, { useState } from "react"
import styles from "./AdmimModal.module.scss"
import {
  useGetAllQuery,
  useGetByIdQuery,
  useUpdateProfileMutation,
} from "@/app/store/admin/admin.api"
import apiAxios from "@/app/api/api.interceptor"
import Cookies from "js-cookie"
import axios from "axios"

const AdminModal = ({ index }) => {
  const result = useGetByIdQuery("")
  const resALL = useGetAllQuery("")
  const { data, isLoading } = useGetByIdQuery(index)
  const [login, setLogin] = useState(isLoading ? "" : data?.login)
  console.log(data, "current")
  const idUser = isLoading ? 0 : data?.id

  const updateUser = async ({ id, login }) => {
    await apiAxios.put(
      `user/admin/updateAccount/${id}`,
      {
        login,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      }
    )
    resALL.refetch()
  }

  // const updateState = async () => {
  //     updateUser({ id: idUser, login })
  // }
  return (
    <div className={styles.admin__modal}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          updateUser({ id: idUser, login: login })
        }}
        className={styles.admin__modal__content}
      >
        <h3 className={styles.admin__modal__content__title}>
          Редактирование пользователя
        </h3>
        <div className={styles.admin__modal__content__block}>
          <div className={styles.admin__modal__content__block__login}>
            <p>Логин</p>
            <input
              type='text'
              onChange={(e) => setLogin(e.target.value)}
              value={login}
            />
          </div>
          <button type='submit'>Обновить</button>
        </div>
      </form>
    </div>
  )
}

export default AdminModal
