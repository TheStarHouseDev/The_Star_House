import { reactive } from 'vue'

const USER_KEY = 'thestarhouse_user'

let storedUser = null
try {
  const raw = localStorage.getItem(USER_KEY)
  storedUser = raw ? JSON.parse(raw) : null
} catch (e) {
  storedUser = null
}

export const authState = reactive({
  user: storedUser
})

export const USER_STORAGE_KEY = USER_KEY
