<template>
  <div class="page auth-page">
    <div class="container">
      <div class="auth-wrapper">
        <section class="auth-card">
          <h1 class="page-title">Khôi phục mật khẩu</h1>
          <p class="page-subtitle">
            Nhập email đã đăng ký để nhận liên kết đặt lại mật khẩu cho tài khoản TheStarHouse.
          </p>

          <form class="auth-form" @submit.prevent="handleRecover">
            <div>
              <label class="label" for="email">Email</label>
              <input
                id="email"
                v-model="email"
                type="email"
                class="input"
                placeholder="you@example.com"
              />
            </div>

            <button type="submit" class="btn btn-primary" :disabled="loading">
              <span v-if="!loading">Gửi liên kết khôi phục</span>
              <span v-else>Đang xử lý…</span>
            </button>

            <p v-if="error" class="text-error" style="margin-top: 0.4rem">
              {{ error }}
            </p>
            <p v-if="success" class="text-success" style="margin-top: 0.4rem">
              {{ success }}
            </p>

            <p style="font-size: 0.8rem; margin-top: 0.8rem">
              Quay lại
              <RouterLink class="link" to="/login">Đăng nhập</RouterLink>
            </p>
          </form>
        </section>

        <aside class="auth-card">
          <h2 class="section-title">Bảo mật tài khoản</h2>
          <p class="card-body" style="margin-top: 4px">
            Trong bản triển khai thực tế, tính năng khôi phục mật khẩu sẽ:
          </p>
          <ul class="card-body" style="margin-top: 0; padding-left: 18px">
            <li>Gửi email chứa liên kết đặt lại mật khẩu có thời hạn.</li>
            <li>Xác thực token đặt lại mật khẩu ở phía server.</li>
            <li>Ghi lại lịch sử &amp; nhật ký bảo mật cho mỗi lần thay đổi.</li>
          </ul>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const email = ref('')
const error = ref('')
const success = ref('')
const loading = ref(false)

async function handleRecover() {
  error.value = ''
  success.value = ''

  if (!email.value) {
    error.value = 'Vui lòng nhập email để khôi phục mật khẩu.'
    return
  }

  loading.value = true
  try {
    success.value =
      'Nếu email tồn tại trong hệ thống, liên kết khôi phục sẽ được gửi (demo – chưa gửi thật).'
  } finally {
    loading.value = false
  }
}
</script>
