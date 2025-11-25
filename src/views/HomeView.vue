<template>
  <div class="page">
    <div class="container">
      <!-- HERO -->
      <section class="hero" id="top">
        <!-- LEFT -->
        <div>
          <div class="hero-badge hero-badge-green">
            <span class="hero-badge-dot" />
            <span>THESTARHOUSE · F&amp;B ĐA DỊCH VỤ</span>
          </div>

          <h1 class="hero-heading hero-heading-large">
            Ngôi nhà ẩm thực
            <br />
            <span>TheStarHouse</span>
            <br />
            dành cho mọi khoảnh khắc.
          </h1>

          <p class="hero-text">
            Mô hình kinh doanh F&amp;B đa dịch vụ: nhà hàng fine-dining, coffee &amp; bakery,
            take-away &amp; giao hàng, tiệc sự kiện. Tất cả vận hành trong một hệ sinh thái duy
            nhất.
          </p>

          <div class="hero-actions">
            <RouterLink to="/login" class="btn btn-primary">
              Bắt đầu trải nghiệm
            </RouterLink>
            <RouterLink to="/register" class="btn btn-outline">
              Đăng ký thành viên
            </RouterLink>
          </div>

          <div class="hero-meta">
            <div class="hero-meta-item">
              <strong>4+</strong>
              Dịch vụ F&amp;B trong một thương hiệu.
            </div>
            <div class="hero-meta-item">
              <strong>24/7</strong>
              Đặt bàn, đặt món online mọi lúc.
            </div>
          </div>
        </div>

        <!-- RIGHT: giữ nguyên card Fine-dining · Coffee · Bakery · Catering -->
        <div class="hero-visual">
          <div class="hero-glass">
            <div>
              <div class="hero-tagline">Fine-dining · Coffee · Bakery · Catering</div>
              <div class="hero-card-title">TheStarHouse Signature Experience</div>
              <div class="hero-pill-row">
                <span class="hero-pill">Nhà hàng view phố đêm</span>
                <span class="hero-pill">Bar &amp; rooftop lounge</span>
                <span class="hero-pill">Set menu theo mùa</span>
              </div>
            </div>

            <div>
              <div style="font-size: 0.8rem; color: #e5e7eb; margin-bottom: 4px">
                Trải nghiệm đa dịch vụ:
              </div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
                <span class="hero-pill">Ăn tại chỗ</span>
                <span class="hero-pill">Đặt tiệc</span>
                <span class="hero-pill">Mang đi</span>
                <span class="hero-pill">Giao hàng</span>
              </div>
            </div>
          </div>
        </div>
      </section>

              <section id="services" class="section section-center">
          <div class="section-header">
            <h2 class="section-title">Mô hình F&amp;B đa dịch vụ</h2>
            <p class="section-subtitle">
              TheStarHouse được thiết kế để vận hành nhiều dịch vụ ẩm thực trong cùng một thương hiệu,
              tối ưu doanh thu và trải nghiệm khách hàng.
            </p>
          </div>

          <div class="services-grid">
            <article class="service-card">
              <div class="service-card-image">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
                  alt="Nhà hàng &amp; Fine-Dining"
                />
                <div class="service-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
                </div>
              </div>
              <div class="service-card-body">
                <h3 class="service-card-title">Nhà hàng & Fine-Dining</h3>
                <p class="service-card-subtitle">Không gian phục vụ tại chỗ.</p>
                <p class="service-card-text">
                  Không gian ấm cúng, thực đơn theo mùa, pairing món ăn – rượu vang và quy trình phục vụ chuẩn fine-dining cho khách cá nhân, gia đình và doanh nghiệp.
                </p>
              </div>
            </article>

            <article class="service-card">
              <div class="service-card-image">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                  alt="Coffee, Bakery & Dessert"
                />
                <div class="service-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
                </div>
              </div>
              <div class="service-card-body">
                <h3 class="service-card-title">Coffee, Bakery & Dessert</h3>
                <p class="service-card-subtitle">Góc thư giãn trong hệ sinh thái.</p>
                <p class="service-card-text">
                  Khu vực coffee & bakery vận hành song song, tận dụng chung bếp trung tâm, tăng doanh thu theo khung giờ, phục vụ khách đi làm, học tập và gặp gỡ đối tác.
                </p>
              </div>
            </article>

            <article class="service-card">
              <div class="service-card-image">
                 <img
                  src="https://images.unsplash.com/photo-1628578569073-8ee77295315d?auto=format&fit=crop&w=1200&q=80"
                  alt="Catering &amp; Sự kiện"
                />
                <div class="service-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 13 8.5-8.5"/><path d="M14.24 3.29l1.42-1.42"/><path d="M18.49 7.54l1.41-1.42"/><path d="M11.41 6.12 9.29 4"/><path d="M17.88 12.59l2.12-2.13"/><path d="M15.76 10.46l-2.12-2.12"/><path d="M5.63 15.37 2 19l3.63 3.63 2.83-2.83-3.64-3.64 5.66-5.65 3.53 3.53"/><path d="M13.41 11.17 12 12.59"/></svg>
                </div>
              </div>
              <div class="service-card-body">
                <h3 class="service-card-title">Catering & Sự kiện</h3>
                <p class="service-card-subtitle">Từ tiệc tại gia đến MICE.</p>
                <p class="service-card-text">
                  Dịch vụ tổ chức sự kiện, tiệc cưới, sinh nhật, hội thảo, cùng hệ thống đặt tiệc online, quản lý menu, timeline và dịch vụ bổ sung.
                </p>
              </div>
            </article>
          </div>
        </section>


      <!-- EXPERIENCE -->
        <section id="experience" class="section section-center">
          <div class="section-header">
            <h2 class="section-title">Trải nghiệm số cho khách hàng</h2>
            <p class="section-subtitle">
              Website TheStarHouse là trung tâm đặt chỗ, đặt món, quản lý tài khoản tích điểm
              và kết nối đa kênh marketing.
            </p>
          </div>

          <div class="experience-grid">
            <!-- Card 1: Tài khoản thành viên -->
            <article class="experience-card">
              <div class="experience-icon">
                <!-- icon user outline trắng -->
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                  <path d="M4 20.5c1.6-3 4.4-4.5 8-4.5s6.4 1.5 8 4.5" />
                </svg>
              </div>
              <div class="experience-content">
                <h3 class="experience-title">Tài khoản thành viên</h3>
                <p class="experience-text">
                  Đăng ký, đăng nhập, ghi nhớ phiên làm việc, khôi phục mật khẩu. Đồng bộ dữ liệu
                  trên mọi thiết bị, quản lý lịch sử đặt bàn, ưu đãi và voucher.
                </p>
              </div>
            </article>

            <!-- Card 2: Đăng nhập Google & Facebook -->
            <article class="experience-card">
              <div class="experience-icon experience-icon-blue">
                <!-- icon lock outline trắng -->
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="5" y="11" width="14" height="9" rx="2" />
                  <path d="M9 11V8a3 3 0 0 1 6 0v3" />
                  <path d="M12 15v2" />
                </svg>
              </div>
              <div class="experience-content">
                <h3 class="experience-title">Đăng nhập Google &amp; Facebook</h3>
                <p class="experience-text">
                  Đăng nhập một chạm bằng tài khoản Google và Facebook, giúp khách trải nghiệm
                  dịch vụ nhanh chóng mà không phải nhớ thêm mật khẩu.
                </p>
              </div>
            </article>
          </div>
        </section>

      <!-- GALLERY -->
      <section id="gallery" class="section section-center">
        <div class="section-header">
          <h2 class="section-title">Không gian TheStarHouse</h2>
          <p class="section-subtitle">
            Khám phá không gian ẩm thực đẳng cấp với thiết kế hiện đại và view tuyệt đẹp.
          </p>
        </div>

        <div class="gallery-grid">
          <article class="gallery-card">
            <div
              class="gallery-image"
              style="background-image:url('https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1200')"
            ></div>
            <div class="gallery-overlay">
              <div>
                <div class="gallery-title">Rooftop Lounge</div>
                <div class="gallery-subtitle">View phố đêm tuyệt đẹp</div>
              </div>
            </div>
          </article>

          <article class="gallery-card">
            <div
              class="gallery-image"
              style="background-image:url('https://images.pexels.com/photos/3217151/pexels-photo-3217151.jpeg?auto=compress&cs=tinysrgb&w=1200')"
            ></div>
            <div class="gallery-overlay">
              <div>
                <div class="gallery-title">Fine Dining</div>
                <div class="gallery-subtitle">Trải nghiệm ẩm thực đẳng cấp</div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
