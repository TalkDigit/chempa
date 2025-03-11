<template>
    <section class="businessList" v-if="Page">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4" v-for="item in Page" >
                    <a :href="'/our-business/' + item.data.slug[locale]" > 
                        <div class="businessListContent">
                            <div class="img">
                                <img :src="getAssets(item.data.resim[locale])" :alt="item.data.baslik[locale]">
                                <i class="fa-solid fa-link"></i>
                            </div>
                            <h3 v-if="item.data.baslik && item.data.baslik[locale]" v-html="item.data.baslik[locale]"></h3>
                           <p v-if="item.data.aciklama && item.data.aciklama[locale]" v-html="item.data.aciklama[locale]""></p> 
                        </div>
                    </a>
                </div>  
            </div>
        </div>
    </section>
</template>

<script setup>

  import getData from "@/utilities/getData";
  import getAssets from "@/utilities/getAssets";
  const { data } = defineProps(["data"]);

const {locale} = useI18n()
  const PageStore = useBusiness(),
  Page = computed(() => {
    const data = PageStore.BusinessState;

    if (data == null) {
      PageStore.fetchBusiness();
      return false;
    }

    return data;
  });
  


  await callOnce(PageStore.fetchBusiness);


</script>