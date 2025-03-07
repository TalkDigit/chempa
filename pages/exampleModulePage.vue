<template>
  <div v-if="Page">
    <template v-for="item in Page.modul">
      <component
        :is="'Module' + keyConvert(item.key)"
        :data="item"
        :page="Page"
        v-if="getData(item, 'durum')"
      />
    </template>
  </div>
</template>

<script setup>
import keyConvert from "@/utilities/keyConvert";
import getData from "~/utilities/getData";
import getAssets from "~/utilities/getAssets";

const PageStore = useExample(),
  Page = computed(() => {
    const data = PageStore.exampleState;

    if (data == null) {
      PageStore.fetchExample();
      return false;
    }

    return data.data;
  });

await callOnce(PageStore.fetchExample);
</script>
