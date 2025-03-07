<template>
  <Swiper
    :modules="[Autoplay, Navigation]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    navigation
    class="my-swiper"
  >
    <SwiperSlide v-for="(slide, index) in slides" :key="index" class="slide" :style="{ backgroundImage: `url(${slide.image})` }">
      <div class="container">
        <div class="slide-content">
          <h1>{{ slide.title }}</h1>
          <h2>{{ slide.title2 }}</h2>
          <p>{{ slide.description }}</p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  { image: "/assets/images/slider-1.jpg", title: "WELCOME TO", title2: "Leading Future", description: '"Your World Class Supply Partner"' },
  { image: "/assets/images/slider-3.jpg", title: "WELCOME TO", title2: "Leading Future", description: '"Your World Class Supply Partner"' },
  { image: "/assets/images/slider-4.jpg", title: "WELCOME TO", title2: "Leading Future", description: '"Your World Class Supply Partner"' },
];
</script>
