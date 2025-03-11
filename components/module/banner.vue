<template>
        <div class="banner__img" :style="{ backgroundImage: `url(${getAssets(getData(data, 'resim'))})` }">

            <h2 v-if="getData(data, 'baslik')" v-html="getData(data, 'baslik')"></h2>
        </div>
</template>
  
  <script setup>

  import getData from "@/utilities/getData";
  import getAssets from "@/utilities/getAssets";
  const { data } = defineProps(["data"]);
  
  </script>
  

  