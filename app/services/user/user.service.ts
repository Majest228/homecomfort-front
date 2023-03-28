import { instance } from "@/app/api/api.interceptor"

export const UserService = {
  async getProfile() {
    return instance({ url: "user/profile", method: "GET" })
  },
  async updateProfile(data) {
    return instance({ url: "user/update", method: "PUT", data })
  },

  async toggleFavorite(productId: number) {
    return instance({
      url: `user/profile/favorite/${productId}`,
      method: "POST",
    })
  },
}
