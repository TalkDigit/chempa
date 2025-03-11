
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
//   import getSettings from "~/utilities/getSettings";
  import getAssets from "~/utilities/getAssets";
  
  const PageStore = useProducts(),
    langStore = useLangControl(),
    { locale } = useI18n(),
    route = useRoute(),
    router = useRouter(),
    Page = computed(() => {
      const data = PageStore.Detay;
      if (data == 404) {
        throw createError({
          statusCode: 404,
          statusMessage: "Page Not Found",
        });
        return false;
      }
      if (data.data.slug[locale.value] != route.params.slug) {
        PageStore.fetchDetay();
        return false;
      }
  
      useSeoMeta({
        title: data.data.baslik[locale.value],
        ogTitle: data.data.baslik[locale.value],
        twitterTitle: data.data.baslik[locale.value],
        description:
          data.data.description && data.data.description[locale.value]
            ? data.data.description[locale.value]
            : null,
        ogDescription:
          data.data.description && data.data.description[locale.value]
            ? data.data.description[locale.value]
            : null,
        twitterDescription:
          data.data.description && data.data.description[locale.value]
            ? data.data.description[locale.value]
            : null,
        // ogImage: getAssets(
        //   getSettings("site-ayarlari", "varsayilan_meta_gorseli")
        // ),
        // twitterImage: getAssets(
        //   getSettings("site-ayarlari", "varsayilan_meta_gorseli")
        // ),
        twitterCard: "summary",
      });
  
      langStore.route.tr = "/" + data.data.slug.tr;
      langStore.route.en = "/en/" + data.data.slug.en;
  
      return data.data;
    });
  
  await callOnce(PageStore.fetchDetay);
  </script>
  