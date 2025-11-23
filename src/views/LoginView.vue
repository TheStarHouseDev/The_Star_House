<template>
  <div class="page auth-page">
    <div class="container">
      <div class="auth-wrapper">
        <section class="auth-card">
          <h1 class="page-title">Đăng nhập</h1>
          <p class="page-subtitle">
            Truy cập hệ sinh thái F&amp;B TheStarHouse: đặt bàn, đặt món, quản lý ưu đãi và lịch sử
            giao dịch.
          </p>

          <form class="auth-form" @submit.prevent="handleSubmit">
            <div>
              <label class="label" for="email">Email</label>
              <input
                id="email"
                v-model="email"
                type="email"
                class="input"
                placeholder="you@example.com"
                autocomplete="email"
              />
            </div>

            <div>
              <label class="label" for="password">Mật khẩu</label>
              <input
                id="password"
                v-model="password"
                type="password"
                class="input"
                placeholder="Nhập mật khẩu"
                autocomplete="current-password"
              />
            </div>

            <div class="checkbox-row">
              <label class="checkbox-row-left">
                <input v-model="rememberMe" type="checkbox" class="checkbox" />
                <span>Ghi nhớ đăng nhập trên thiết bị này</span>
              </label>

              <RouterLink class="link" to="/forgot-password">
                Quên mật khẩu?
              </RouterLink>
            </div>

            <button type="submit" class="btn btn-primary" :disabled="loading">
              <span v-if="!loading">Đăng nhập</span>
              <span v-else>Đang xử lý…</span>
            </button>

            <p v-if="error" class="text-error" style="margin-top: 0.4rem">
              {{ error }}
            </p>
            <p v-if="success" class="text-success" style="margin-top: 0.4rem">
              {{ success }}
            </p>

            <div class="divider">
              <div class="divider-line"></div>
              <span>Hoặc đăng nhập bằng</span>
              <div class="divider-line"></div>
            </div>

            <div class="social-row">
                <button
                    type="button"
                    class="btn btn-social btn-google"
                    @click="handleGoogleLogin"
                >
                    <span class="social-icon social-icon-google">G</span>
                    <span class="social-text">Tiếp tục với Google</span>
                </button>

                <button
                    type="button"
                    class="btn btn-social btn-facebook"
                    @click="handleFacebookLogin"
                >
                    <span class="social-icon social-icon-facebook">F</span>
                    <span class="social-text">Tiếp tục với Facebook</span>
                </button>
                </div>



            <p style="font-size: 0.8rem; margin-top: 0.8rem">
              Chưa có tài khoản?
              <RouterLink class="link" to="/register">Đăng ký TheStarHouse</RouterLink>
            </p>
          </form>
        </section>

        <aside class="auth-card" style="display: flex; flex-direction: column; gap: 12px">
          <h2 class="section-title">TheStarHouse cho khách hàng thân thiết</h2>
          <p class="card-body" style="margin-top: 4px">
            Tài khoản TheStarHouse giúp bạn đặt bàn nhanh, lưu sẵn thông tin, tích điểm và nhận ưu
            đãi theo từng dịch vụ: nhà hàng, coffee, bakery, catering.
          </p>
          <div class="grid">
            <div class="card" style="padding: 12px 14px">
              <div class="card-header">
                <div class="card-icon">⭐</div>
                <div>
                  <div class="card-title">Tích điểm đa dịch vụ</div>
                  <div style="font-size: 0.78rem; color: var(--text-muted)">
                    Một tài khoản cho mọi trải nghiệm.
                  </div>
                </div>
              </div>
            </div>
            <div class="card" style="padding: 12px 14px">
              <div class="card-header">
                <div class="card-icon">⏱️</div>
                <div>
                  <div class="card-title">Check-in nhanh</div>
                  <div style="font-size: 0.78rem; color: var(--text-muted)">
                    Ghi nhớ đặt bàn &amp; order gần nhất.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.5rem">
            Lưu ý: Phiên Bản này Bị béo không chạy dc thông cảm 😔🥀
          </p>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { loginWithEmail, loginWithSocial } from '../auth/authService'

const router = useRouter()

const email = ref('')
const password = ref('')
const rememberMe = ref(true)
const loading = ref(false)
const error = ref('')
const success = ref('')

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
const facebookAppId = import.meta.env.VITE_FACEBOOK_APP_ID

async function handleSubmit() {
  error.value = ''
  success.value = ''

  if (!email.value || !password.value) {
    error.value = 'Vui lòng nhập đầy đủ email và mật khẩu.'
    return
  }

  loading.value = true
  try {
    loginWithEmail(email.value.trim(), password.value, rememberMe.value)
    success.value = 'Đăng nhập thành công (demo, chưa kết nối backend).'
    router.push({ name: 'home' })
  } catch (e) {
    error.value = 'Không đăng nhập được, vui lòng thử lại.'
  } finally {
    loading.value = false
  }
}

function handleGoogleLogin() {
  error.value = ''
  success.value = ''

  if (!window.google || !window.google.accounts || !window.google.accounts.id || !googleClientId) {
    error.value =
      'Không thể khởi tạo Google Login. Kiểm tra lại .env (VITE_GOOGLE_CLIENT_ID) và thẻ script trong index.html.'
    return
  }

  window.google.accounts.id.initialize({
    client_id: googleClientId,
    callback: (credentialResponse) => {
      try {
        const payload = decodeJwt(credentialResponse.credential)
        const profile = {
          id: payload.sub,
          name: payload.name,
          email: payload.email,
          picture: payload.picture
        }
        loginWithSocial(profile, 'google', true)
        success.value = 'Đăng nhập Google thành công (demo).'
        router.push({ name: 'home' })
      } catch (e) {
        console.error(e)
        error.value = 'Không đọc được thông tin tài khoản Google.'
      }
    }
  })

  window.google.accounts.id.prompt()
}

function initFacebookSdk() {
  if (!facebookAppId) {
    console.warn('Thiếu VITE_FACEBOOK_APP_ID cho Facebook Login.')
    return
  }

  const init = () => {
    window.FB.init({
      appId: facebookAppId,
      cookie: true,
      xfbml: false,
      version: 'v19.0'
    })
  }

  if (window.FB) {
    init()
  } else {
    window.fbAsyncInit = function () {
      init()
    }
  }
}

function handleFacebookLogin() {
  error.value = ''
  success.value = ''

  if (!window.FB) {
    error.value =
      'Không thể khởi tạo Facebook Login. Kiểm tra lại thẻ script SDK Facebook trong index.html.'
    return
  }

  window.FB.login(
    (response) => {
      if (response.authResponse) {
        window.FB.api('/me', { fields: 'name,email,picture' }, (profile) => {
          const mapped = {
            id: profile.id,
            name: profile.name,
            email: profile.email,
            picture: profile.picture && profile.picture.data && profile.picture.data.url
          }
          loginWithSocial(mapped, 'facebook', true)
          success.value = 'Đăng nhập Facebook thành công (demo).'
          router.push({ name: 'home' })
        })
      } else {
        error.value = 'Bạn đã huỷ đăng nhập Facebook.'
      }
    },
    { scope: 'public_profile,email' }
  )
}

function decodeJwt(token) {
  const parts = token.split('.')
  if (parts.length !== 3) throw new Error('Token không hợp lệ')

  const payload = parts[1]
  const base64 = payload.replace(/-/g, '+').replace(/_/g, '/')
  const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), '=')
  const json = decodeURIComponent(
    atob(padded)
      .split('')
      .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  )
  return JSON.parse(json)
}

onMounted(() => {
  initFacebookSdk()
})
</script>
