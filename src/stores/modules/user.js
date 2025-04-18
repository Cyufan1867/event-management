import { defineStore } from 'pinia'
import { ref } from 'vue'

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
    return { token, setToken, removeToken }
  },
  {
    persist: true // 开启持久化存储
  }
)
