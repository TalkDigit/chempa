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

const PageStore = usePage(),
langStore = useLangControl(),
{ locale } = useI18n(),
route = useRoute(),
router = useRouter(),
Page = computed(() => {
  const data = PageStore.HomePage;

  if (data == null) {
    PageStore.fetchHomePage();
    return false;
  }


  return data.data;
});

await callOnce(PageStore.fetchHomePage);
</script>