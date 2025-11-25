<template>
  <div class="page auth-page">
    <div class="container">
      <div class="auth-wrapper">
        <section class="auth-card">
          <h1 class="page-title">Đăng ký tài khoản</h1>
          <p class="page-subtitle">
            Tạo tài khoản TheStarHouse để trải nghiệm đầy đủ mô hình kinh doanh F&amp;B đa dịch vụ:
            nhà hàng, coffee, bakery, catering.
          </p>

          <form class="auth-form" @submit.prevent="handleRegister">
            <div class="form-row">
              <div>
                <label class="label" for="fullName">Họ và tên</label>
                <input
                  id="fullName"
                  v-model="fullName"
                  type="text"
                  class="input"
                  placeholder="Nguyễn Văn A"
                  autocomplete="name"
                />
              </div>
              <div>
                <label class="label" for="phone">Số điện thoại</label>
                <input
                  id="phone"
                  v-model="phone"
                  type="tel"
                  class="input"
                  placeholder="09xx xxx xxx"
                  autocomplete="tel"
                />
              </div>
            </div>

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

            <div class="form-row">
              <div>
                <label class="label" for="password">Mật khẩu</label>
                <input
                  id="password"
                  v-model="password"
                  type="password"
                  class="input"
                  placeholder="Tối thiểu 6 ký tự"
                  autocomplete="new-password"
                />
              </div>
              <div>
                <label class="label" for="confirmPassword">Nhập lại mật khẩu</label>
                <input
                  id="confirmPassword"
                  v-model="confirmPassword"
                  type="password"
                  class="input"
                  placeholder="Nhập lại mật khẩu"
                  autocomplete="new-password"
                />
              </div>
            </div>

            <button type="submit" class="btn btn-primary" :disabled="loading">
              <span v-if="!loading">Tạo tài khoản</span>
              <span v-else>Đang xử lý…</span>
            </button>

            <p v-if="error" class="text-error" style="margin-top: 0.4rem">
              {{ error }}
            </p>
            <p v-if="success" class="text-success" style="margin-top: 0.4rem">
              {{ success }}
            </p>

            <p style="font-size: 0.8rem; margin-top: 0.8rem">
              Đã có tài khoản?
              <RouterLink class="link" to="/login">Đăng nhập</RouterLink>
            </p>
          </form>
        </section>

        <aside class="auth-card">
          <h2 class="section-title">Tài khoản trong mô hình kinh doanh</h2>
          <p class="card-body" style="margin-top: 4px">
            Trong bản triển khai đầy đủ, tài khoản TheStarHouse sẽ gắn với:
          </p>
          <ul class="card-body" style="margin-top: 0; padding-left: 18px">
            <li>Lịch sử đặt bàn &amp; hóa đơn tại nhà hàng.</li>
            <li>Đơn hàng coffee, bakery, dessert mang đi &amp; giao tận nơi.</li>
            <li>Thông tin khách hàng doanh nghiệp khi đặt tiệc &amp; catering.</li>
            <li>Điểm thưởng, hạng thành viên và ưu đãi theo từng phân khúc.</li>
          </ul>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()

const fullName = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const confirmPassword = ref('')

const error = ref('')
const success = ref('')
const loading = ref(false)

async function handleRegister() {
  error.value = ''
  success.value = ''

  if (!fullName.value || !email.value || !password.value || !confirmPassword.value) {
    error.value = 'Vui lòng nhập đầy đủ các thông tin bắt buộc.'
    return
  }

  if (password.value.length < 6) {
    error.value = 'Mật khẩu phải có ít nhất 6 ký tự.'
    return
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'Mật khẩu nhập lại không khớp.'
    return
  }

  loading.value = true
  try {
    success.value = 'Đăng ký thành công (demo). Bây giờ bạn có thể đăng nhập.'
    setTimeout(() => {
      router.push({ name: 'login' })
    }, 800)
  } finally {
    loading.value = false
  }
}
</script>
