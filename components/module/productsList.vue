<template>
    <section class="productsList">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <a href="/productsDetails">
                        <div class="productsListContent">
                            <Swiper :modules="[Autoplay]" :slides-per-view="3" :loop="true" :autoplay="{ delay: 3000, disableOnInteraction: false }" class="swiperProducts">
                                <SwiperSlide v-for="(slide, index) in slides" :key="index" class="slide" :style="{ backgroundImage: `url(${slide.image})` }"> </SwiperSlide>
                            </Swiper>
                            <a href="/productsDetails">
                                Adhesive and Construction Sealants
                            </a>
                            <span>PRODUCT</span>
                            <div class="hr"></div>
                            <p>
                                We are here to promote your brand. Our wide supply chain network provides you to create your brand or to continue your brand with high qualified and reliable adhesive and sealants solutions. Please use our
                                toolbox to generate your brand in the below.
                            </p>
                        </div>
                    </a>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <a href="/productsDetails">
                        <div class="productsListContent">
                            <Swiper :modules="[Autoplay]" :slides-per-view="3" :loop="true" :autoplay="{ delay: 3000, disableOnInteraction: false }" class="swiperProducts">
                                <SwiperSlide v-for="(slide, index) in slides2" :key="index" class="slide" :style="{ backgroundImage: `url(${slide.image})` }"> </SwiperSlide>
                            </Swiper>
                            <a href="/productsDetails">
                                Chemical Raw Material
                            </a>
                            <span>PRODUCT</span>
                            <div class="hr"></div>
                            <p>
                                Our Global Supply Chain aims to provide fast, appropriate and competitive raw materials in regard with easing customers supply chain processes to enable them manufacturing final goods for being used in human’s life more quickly and reliably.
                            </p>
                        </div>
                    </a>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <a href="/productsDetails">
                        <div class="productsListContent">
                            <Swiper :modules="[Autoplay]" :slides-per-view="3" :loop="true" :autoplay="{ delay: 3000, disableOnInteraction: false }" class="swiperProducts">
                                <SwiperSlide v-for="(slide, index) in slides3" :key="index" class="slide" :style="{ backgroundImage: `url(${slide.image})` }"> </SwiperSlide>
                            </Swiper>
                            <a href="/productsDetails">
                                Metal and Alloys
                            </a>
                            <span>PRODUCT</span>
                            <div class="hr"></div>
                            <p>
                                Palm Chemical is the trader of non-ferrous and Ferro alloys for foundries and steel mills. In expertise in global supply chain network, Palm Chemical is able to supply all requested items from all over the World in a dedicated timeframe.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { Swiper, SwiperSlide } from "swiper/vue";
    import { Autoplay, Navigation } from "swiper/modules";
    import "swiper/css";
    import "swiper/css/navigation";

    const slides = [
        { image: "/assets/images/products/Adhesive.jpg" },
        { image: "/assets/images/products/maddeback.jpg" },
        { image: "/assets/images/products/maddeback2.jpg" },
        { image: "/assets/images/products/Adhesive.jpg" },
        { image: "/assets/images/products/maddeback.jpg" },
        { image: "/assets/images/products/maddeback2.jpg" },
    ];

    const slides2 = [
        { image: "/assets/images/products/Chemical.jpg" },
        { image: "/assets/images/products/chemicalback.jpg" },
        { image: "/assets/images/products/Chemical.jpg" },
        { image: "/assets/images/products/chemicalback.jpg" },
        { image: "/assets/images/products/Chemical.jpg" },
        { image: "/assets/images/products/chemicalback.jpg" },
    ];

    const slides3 = [
        { image: "/assets/images/products/metal.jpg" },
        { image: "/assets/images/products/back.jpg" },
        { image: "/assets/images/products/metal.jpg" },
        { image: "/assets/images/products/back.jpg" },
        { image: "/assets/images/products/metal.jpg" },
        { image: "/assets/images/products/back.jpg" },
    ];
</script>
