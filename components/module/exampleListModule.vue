<template>
  <div>
    <div v-for="item in data.element.module">
      <p v-html="getData(item, 'baslik')"></p>
    </div>
  </div>
</template>

<script setup>
import getData from "@/utilities/getData";
import getAssets from "@/utilities/getAssets";
const { data } = defineProps(["data"]);
</script>
