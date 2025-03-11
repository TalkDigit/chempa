<template>
    <section class="aboutSection" v-if="Page">
        <div class="container">
            <div class="wrapper">
                <aside class="sidebar">
                    <h2>Our Business</h2>
                
                    <ul>
                        <template v-for="(item, index) in liste">
                            <li>
                                <a :href="'/our-business/' + item.data.slug[locale]" > 
                                {{ item.data.baslik[locale] }}
                                </a>
                            </li>
                        </template>
                    </ul>
                    <a class="btn-a" href="/contact">Contact</a>
                </aside>
                <main class="content" v-if="Page">
                    <transition name="content-fade" mode="out-in">
                        <div class="content-box">
                            <div class="img"><img :src="getAssets(Page.resim[locale])" alt="About Us" /></div>

                            <h3>{{ Page.baslik[locale]}}</h3>
                            <p v-html="Page.aciklama[locale]"></p>
                        </div>
                    </transition>
                </main>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import keyConvert from "@/utilities/keyConvert";
import getData from "@/utilities/getData";
import getAssets from "~/utilities/getAssets";

const {locale} = useI18n()
const activeMenu = ref(null);
const PageStore = useBusiness();
const Page = computed(() => {
    const data = PageStore.Detay;
    if (!data) {
        PageStore.fetchDetay();
        return false;
    }
    return data.data;
});

const liste = computed(() => {
    const data = PageStore.BusinessState;
    if (!data) {
        PageStore.fetchBusiness();
        return false;
    }
    return data;
});


// Sayfa yüklendiğinde ilk sekmeyi aktif hale getir
onMounted(() => {
    if (Page.value?.modul?.length > 0) {
        activeMenu.value = Page.value.modul[0].element;
    }
});

const setActiveMenu = (item) => {
    activeMenu.value = item;
};

await callOnce(PageStore.fetchBusiness);
await callOnce(PageStore.fetchDetay);
</script>
