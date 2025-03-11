<template>
    <section class="advantage">
        <div class="container">
            <div class="advantage__title">
                <h4  v-if="getData(data, 'baslik')" v-html="getData(data, 'baslik')"></h4>
            </div>
            <div class="advantage__content">
                <p  v-if="getData(data, 'aciklama')" v-html="getData(data, 'aciklama')"></p>
                <img v-if="getData(data, 'resim')" :src="getAssets(getData(data, 'resim'))" alt="" />
              
            </div>
        </div>
    </section>
</template>

  
  <script setup>
  import getData from "@/utilities/getData";
  import getAssets from "@/utilities/getAssets";
  const { data } = defineProps(["data"]);
  </script>