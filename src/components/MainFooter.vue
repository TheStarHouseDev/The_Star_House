<template>
<footer class="footer">
  <div class="footer-inner">
    <!-- Hàng trên: logo + menu -->
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-brand-logo">
          <span>★</span>
        </div>
        <div class="footer-brand-text">
          <div class="footer-brand-title">THESTARHOUSE</div>
          <div class="footer-brand-subtitle">F&B MULTI-SERVICE</div>
        </div>
      </div>

      <nav class="footer-links">
        <a href="#about">Về chúng tôi</a>
        <a href="#policy">Chính sách</a>
        <a href="#terms">Điều khoản</a>
        <a href="#contact">Liên hệ</a>
      </nav>
    </div>

    <hr class="footer-divider" />

    <!-- Hàng dưới: bản quyền + giờ + hotline -->
    <div class="footer-bottom">
      <span>
        © {{ new Date().getFullYear() }} TheStarHouse · F&amp;B đa dịch vụ. All rights reserved.
      </span>

      <span>
        18:00 – 23:00 hằng ngày ·
        Hotline: <strong>1900 88 88 88</strong>
      </span>
    </div>
  </div>
</footer>

</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
