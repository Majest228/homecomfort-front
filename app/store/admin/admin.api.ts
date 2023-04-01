import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import Cookies from "js-cookie"


export const adminApi = createApi({
    reducerPath: 'api/admin',
    tagTypes: ["Admin"],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/",
        prepareHeaders: (headers) => {
            headers.set("authorization", `Bearer ${Cookies.get("accessToken")}`)
            return headers
        },
    }),
    endpoints: (build) => ({
        getAll: build.query({
            query: () => ({
                url: "user/admin/all",
            }),
            providesTags: () => [{ type: "Admin" }]
        }),
        getById: build.query({
            query: (id) => ({
                url: `user/admin/profile/${id}`,
            }),
            providesTags: () => [{ type: "Admin" }]
        }),
        deleteUser: build.mutation({
            query: (id) => ({
                url: `user/admin/delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: () => [{ type: "Admin" }],
        }),
        updateProfile: build.mutation({
            query: ({ id, login }) => ({
                url: `user/admin/updateAccount/${id}`,
                method: "PUT",
                body: login,
            }),
            invalidatesTags: () => [{ type: "Admin" }],
        }),
    }),

})

export const {
    useGetAllQuery,
    useDeleteUserMutation,
    useGetByIdQuery,
    useUpdateProfileMutation
} = adminApi