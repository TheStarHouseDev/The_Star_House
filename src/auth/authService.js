import { authState, USER_STORAGE_KEY } from './authState'

export function loginWithEmail(email, password, rememberMe) {
  const fakeUser = {
    id: Date.now(),
    name: email.split('@')[0] || 'Khách hàng',
    email,
    provider: 'password'
  }

  setUser(fakeUser, rememberMe)
  return fakeUser
}

export function loginWithSocial(profile, provider, rememberMe = true) {
  const user = {
    id: profile.id || Date.now(),
    name: profile.name || 'Người dùng',
    email: profile.email || '',
    avatar: profile.picture || profile.avatar,
    provider
  }

  setUser(user, rememberMe)
  return user
}

export function logout() {
  authState.user = null
  try {
    localStorage.removeItem(USER_STORAGE_KEY)
  } catch (e) {
    // ignore
  }
}

function setUser(user, rememberMe) {
  authState.user = user
  try {
    if (rememberMe) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
    } else {
      localStorage.removeItem(USER_STORAGE_KEY)
    }
  } catch (e) {
    // ignore
  }
}
