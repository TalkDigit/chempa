<template>
    <section class="aboutSection" v-if="Page">
        <div class="container">
            <div class="wrapper">
                <aside class="sidebar">
                    <h2>Who We Are</h2>
                    <ul>
                        <template v-for="(item, index) in Page.modul" :key="item.id">
                            <li 
                                @click="setActiveMenu(item.element)" 
                                :class="{ active: activeMenu === item.element }"
                            >
                                {{ getData(item.element, 'menu_baslik') }}
                            </li>
                        </template>
                    </ul>
                    <a class="btn-a" href="/contact">Contact</a>
                </aside>

                <main class="content" v-if="activeMenu">
                    <transition name="content-fade" mode="out-in">
                        <div class="content-box">
                            <div class="img"><img :src="getAssets(getData(activeMenu, 'gorsel'))" alt="About Us" /></div>

                            <h3>{{ getData(activeMenu, 'icerik_baslik')}}</h3>
                            <p v-html="getData(activeMenu, 'editor')"></p>
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

const activeMenu = ref(null);
const PageStore = usePage();
const Page = computed(() => {
    const data = PageStore.AboutPage;
    if (!data) {
        PageStore.fetchAbout();
        return false;
    }
    return data.data;
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

await callOnce(PageStore.fetchAbout);



</script>
