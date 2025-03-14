<template>
  <section class="products">
      <div class="products__grid">
          <div class="products__left">
              <h5>Chempa</h5>
              <p>Check our variety of products in different sectors.</p>
              <a href="/products">Products <i class="fa-solid fa-arrow-right"></i> </a>
          </div>
          <Swiper 
            :modules="[Autoplay, Navigation]" 
            :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :navigation="false"
            class="productsSlider"
            :breakpoints="{
              1200: { slidesPerView: 2 },
              550: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }"
          >
            <SwiperSlide v-for="(slide, index) in slides" :key="index" class="slide">
              <div class="slide-bg"></div>
              <img :src="slide.image" />
              <div class="container">
                  <div class="slide-content">
                      <a :href="slide.link">{{ slide.title }}</a>
                      <div>
                          <a href="#">
                           <span> {{ slide.description }}</span>
                          </a>
                      </div>
                  </div>
              </div>
          </SwiperSlide>
          </Swiper>
      </div>
  </section>
</template>

<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Autoplay, Navigation } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/navigation";

  const slides = [
      { image: "/assets/images/Adhesive.jpg", link:"#", title: "Chemical Raw Materials", description: 'Heptane / Polyol / Toluen' },
      { image: "/assets/images/Metals-and-Ferro-Alloys.jpg", link:"#",  title: "Metallurgical Raw Material", description: 'Nickel / Cobalt / FeMo' },
  ];
</script>
