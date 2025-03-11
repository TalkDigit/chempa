<template>
  <Swiper
    :modules="[Autoplay, Navigation]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    navigation
    class="my-swiper"
  >
    <SwiperSlide
      v-for="(item, index) in data.element.module"
      :key="index"
      class="slide"
      :class="{ 'center-text': index === 1 }"
      :style="{ backgroundImage: `url(${getAssets(getData(item, 'resim'))})` }"
    >
      <div class="container">
        <div class="slide-content">
          <h1 v-if="getData(item, 'baslik')" v-html="getData(item, 'baslik')"></h1>
          <h2 v-if="getData(item, 'alt_baslik')" v-html="getData(item, 'alt_baslik')"></h2>
          <p v-if="getData(item, 'aciklama')" v-html="getData(item, 'aciklama')"></p>

          <a
            v-if="getData(item, 'buton_adi')"
            class="slider__btn"
            :href="getData(item, 'buton_linki')"
          >
            {{ getData(item, 'buton_adi') }}
          </a>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.center-text .slide-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>


<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Autoplay, Navigation } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/navigation";

  import getData from "@/utilities/getData";
  import getAssets from "@/utilities/getAssets";
  const { data } = defineProps(["data"]);
</script>
