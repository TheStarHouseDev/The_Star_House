<template>
  <header class="navbar">
    <div class="nav-inner">
      <!-- Brand -->
      <RouterLink to="/" class="brand">
        <div class="brand-logo">★</div>
        <div class="brand-text">
          <span class="brand-title">THESTARHOUSE</span>
          <span class="brand-subtitle">F&amp;B MULTI-SERVICE</span>
        </div>
      </RouterLink>

      <!-- Center links -->
      <nav class="nav-links">
        <RouterLink class="nav-link" to="/">Trang chủ</RouterLink>
        <a class="nav-link" href="#services" @click.prevent="goHomeSection('services')">
          Dịch vụ
        </a>
        <a class="nav-link" href="#experience" @click.prevent="goHomeSection('experience')">
          Trải nghiệm
        </a>
        <a class="nav-link" href="#gallery" @click.prevent="goHomeSection('gallery')">
          Hình ảnh
        </a>
      </nav>

      <!-- Right side -->
      <div class="nav-right">
        <div v-if="user" class="user-chip">
          <div class="user-avatar">
            <span v-if="userInitial">{{ userInitial }}</span>
            <span v-else>👤</span>
          </div>
          <div>
            <div style="font-size: 0.78rem; color: #9ca3af">Xin chào</div>
            <div style="font-size: 0.8rem; font-weight: 500">
              {{ user.name || user.email }}
            </div>
          </div>
        </div>

        <RouterLink
          v-if="!user"
          to="/login"
          class="btn btn-outline"
          style="font-size: 0.82rem"
        >
          Đăng nhập
        </RouterLink>
        <button
          v-else
          class="btn btn-outline"
          style="font-size: 0.82rem"
          @click="handleLogout"
        >
          Đăng xuất
        </button>

        <button
          class="nav-menu-toggle"
          @click="toggleMenu"
          aria-label="Mở menu"
          v-if="isMobile"
        >
          <span />
        </button>
      </div>
    </div>

    <!-- Mobile drawer -->
    <div v-if="isMobile && mobileOpen" class="nav-drawer">
      <RouterLink class="nav-link" to="/" @click="closeMenu">Trang chủ</RouterLink>
      <a class="nav-link" href="#services" @click.prevent="goHomeSection('services')">
        Dịch vụ
      </a>
      <a class="nav-link" href="#experience" @click.prevent="goHomeSection('experience')">
        Trải nghiệm
      </a>
      <a class="nav-link" href="#gallery" @click.prevent="goHomeSection('gallery')">
        Hình ảnh
      </a>
      <RouterLink
        v-if="!user"
        to="/login"
        class="btn btn-primary"
        style="justify-content: center"
        @click="closeMenu"
      >
        Đăng nhập
      </RouterLink>
      <button
        v-else
        class="btn btn-outline"
        style="justify-content: center"
        @click="() => { handleLogout(); closeMenu(); }"
      >
        Đăng xuất
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { authState } from '../auth/authState'
import { logout } from '../auth/authService'

const route = useRoute()
const router = useRouter()

const mobileOpen = ref(false)
const isMobile = ref(false)

const user = computed(() => authState.user)

const userInitial = computed(() => {
  if (!user.value) return ''
  const name = user.value.name || user.value.email || ''
  return name.trim().charAt(0).toUpperCase()
})

function updateIsMobile() {
  isMobile.value = window.innerWidth < 768
}

function toggleMenu() {
  mobileOpen.value = !mobileOpen.value
}

function closeMenu() {
  mobileOpen.value = false
}

function handleLogout() {
  logout()
  router.push({ name: 'home' })
}

function goHomeSection(id) {
  if (route.name !== 'home') {
    router.push({ name: 'home', hash: `#${id}` })
  } else {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  closeMenu()
}

onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile)
})
</script>
