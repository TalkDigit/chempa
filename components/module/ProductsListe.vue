

<template>
    <section class="productsList" v-if="Page">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4"  v-for="item in Page">
                    <a :href="'/products/' + item.data.slug[locale]" > 
                        <div class="productsListContent">
<!--                        
                             <Swiper :modules="[Autoplay]" :slides-per-view="3" :loop="true" :autoplay="{ delay: 3000, disableOnInteraction: false }" class="swiperProducts">
                                <SwiperSlide v-for="(item, index) in item.data.slider_gorseller[locale]"   class="slide" :style="{ backgroundImage: `url(${getAssets(item)})` }"> </SwiperSlide>
                            </Swiper>  -->
                            <a :href="'/products/' + item.data.slug[locale]" > 
                              {{item.data.baslik[locale]}}

                            </a>
                            <!-- <span>PRODUCT</span> -->
                            <div class="hr"></div>
                            <p v-if="item.data.aciklama && item.data.aciklama[locale]" v-html="item.data.aciklama[locale]"></p>

                        </div>
                    </a>
                </div>
                
            </div>
        </div>
    </section>
</template>
<script setup>


import { ref, computed, onMounted } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import keyConvert from "@/utilities/keyConvert";
import getData from "@/utilities/getData";
import getAssets from "~/utilities/getAssets";
const { data } = defineProps(["data"]);


const PageStore = useProducts();
const {locale} = useI18n()



const Page = computed(() => {
    const data = PageStore.ProductsState;

    if (data == null) {
      PageStore.fetchProducts();
      return false;
    }

    return data;
  });
  



onMounted(() => {
    if (Page.value?.modul?.length > 0) {
        item.value = Page.value.modul[0].element;
    }
});

await callOnce(PageStore.fetchProducts);
</script>

    



