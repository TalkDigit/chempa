<template>
  <div>
    <div
      class="w-100"
      v-if="getData(data, 'metin')"
      v-html="getData(data, 'metin')"
    ></div>
  </div>
</template>

<script setup>
import getData from "@/utilities/getData";
import getAssets from "@/utilities/getAssets";
const { data } = defineProps(["data"]);
</script>
