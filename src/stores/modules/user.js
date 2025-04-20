import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user'

export const useUserStore = defineStore(
  'event-user',
  () => {
    const token = ref('') // 登录凭证
    const setToken = (t) => {
      token.value = t
    }
    const removeToken = () => {
      token.value = ''
    }
    const user = ref({}) // 用户信息
    const getUser = async () => {
      const res = await userGetInfoService()
      user.value = res.data.data
    }
    const setUser = (obj) => {
      user.value = obj
    }
    return { token, setToken, removeToken, user, getUser, setUser }
  },
  {
    persist: true // 开启持久化存储
  }
)
