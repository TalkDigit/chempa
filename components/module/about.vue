<template>
    <section class="aboutSection">
        <div class="container">
            <div class="wrapper">
                <!-- Sidebar -->
                <aside class="sidebar">
                    <h2>Who We Are</h2>
                    <ul>
                        <li v-for="item in menuItems" :key="item.id" :class="{ active: item.id === activeMenu.id }" @click="setActiveMenu(item)">
                            {{ item.title }}
                        </li>
                    </ul>
                    <a href="/contact">Contact</a>
                </aside>

                <main class="content">
                    <transition name="content-fade" mode="out-in">
                        <div :key="activeMenu.id" class="content-box">
                            <div class="img"><img :src="activeMenu.resim" alt="About Us"/></div>
                            
                            <h3>{{ activeMenu.titleContent }}</h3>
                            <p v-html="activeMenu.content"></p>
                        </div>
                    </transition>
                </main>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from "vue";

    // Menü başlıkları ve içerikler
    const menuItems = ref([
        { id: "about-us", title:"About US", resim:"/assets/images/palm-About.jpg", titleContent: "Palm Chemical About US", content: "<b>Palm Chemical</b> DMCC is founded for Chemical and Metallurgical raw material trading activities. In addition to raw material trading activities, <b>Palm Chemical</b> also focuses on offering private labeling solutions for Adhesives and Sealants. Its Global Supply Chain Network from USA to Japan enables to reach required products in terms of quality, speed and cost effectiveness. <br>   <br> The philosophy of <b>Palm Chemical</b> is to provide right sources for their customers, which makes all the difference. Therefore, <b>Palm Chemical </b>is capable to provide the best service of supplying Ferrous and non-ferrous products for foundries and steel mills, various types of Chemicals in several variants as well as 30 different types of adhesives and sealants for a wide spectrum of industries from furniture to construction sectors." },
        { id: "mission", title:"Mission", resim:"/assets/images/Palm-chemical-Mission.jpg", titleContent: "Palm Chemical Mission", content: "Becoming one of trustworthy trader company on all kinds of metallurgical and chemical raw materials trading including adhesives and sealants as finished goods in order to reach our vision." },
        { id: "vision", title:"Vision", resim:"/assets/images/Palm-chemical-Vision.jpg", titleContent: "Palm Chemical Vision", content: "Developing highly efficient and sustainable global supply chain network that deliver exceptional values, benefits and services to its customers with reaching high levels of satisfaction and perfection via continuous improvements. <br><br> Listening and responding to all needs of our stakeholders is only way to achieve this." },
        { id: "values", title:"Values", resim:"/assets/images/palm-Values.jpg", titleContent: "Palm Chemical Values", content: "Reaching perfection in our supply chain and services in accordance with continuous improvements... <br> Focusing on stakeholder satisfaction by sustaining well qualified services... <br> Being trustworthy and honest trader in all of our businesses is our key objective... <br> Entrepreneurialism and openness on new sectors creates new businesses where we can start coping with needs of new stakeholders... <br> Being responsible to keep our promises on what our stakeholders requires on us... <br>" },
    ]);

    const activeMenu = ref(menuItems.value[0]); // Varsayılan olarak ilk içerik

    // Menüye tıklanınca içeriği değiştir
    const setActiveMenu = (item) => {
        activeMenu.value = item;
    };
</script>

