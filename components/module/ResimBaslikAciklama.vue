<template>
    <section class="productsDetails">
        <div class="container">
            <div class="products__content">
                <div class="img">
                    <img v-if="getData(data, 'resim')" :src="getAssets(getData(data, 'resim'))" :alt="getData(data, 'baslik')" />
                </div>

                <h2 v-if="getData(data, 'baslik')" v-html="getData(data, 'baslik')"></h2>
                <p v-if="getData(data, 'aciklama')" v-html="getData(data, 'aciklama')"></p>
            </div>
        </div>
    </section>
</template>

<script setup>
    import getData from "@/utilities/getData";
    import getAssets from "@/utilities/getAssets";
    const { data } = defineProps(["data"]);
</script>

