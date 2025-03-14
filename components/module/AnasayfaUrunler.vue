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
              <SwiperSlide v-for="(item, index) in data.element.module" :key="index" class="slide">
                <div class="slide-bg"></div>
                <img :src="getAssets(getData(item, 'resim'))" alt="">

                <div class="container">
                    <div class="slide-content">
                        <a v-if="getData(item, 'baslik')" :href="getData(item, 'link')">
                                {{ getData(item, 'baslik') }}
                            </a>
                        <!-- <div>
                            <a v-if="getData(item, 'aciklama')" :href="getData(item, 'link')">
                                <span>{{ getData(item, 'aciklama') }}</span>
                            </a>
                        </div> -->
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

    import getData from "@/utilities/getData";
    import getAssets from "@/utilities/getAssets";
    const { data } = defineProps(["data"]);

  </script>
  