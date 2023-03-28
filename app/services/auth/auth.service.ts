import apiAxios from "../../api/api.interceptor"
import { saveToStorage } from "@/app/services/auth/auth.helper"
import { AuthInterface } from "./auth.interface"

export const AuthService = {
  async register(email: string, password: string, login: string) {
    const res = await apiAxios.post<AuthInterface>("/auth/register", {
      email,
      password,
      login
    })
    return res
  },
  async login(email: string, password: string) {
    const res = await apiAxios.post<AuthInterface>("/auth/login", {
      email,
      password,
    })
    return res
  },
}