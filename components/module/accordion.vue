<template>
    <div class="container">
      <div class="accordion">

      <div v-for="(item, index) in data.element.module" :key="index" class="accordion-item">
        <button class="accordion-header" @click="toggle(index)">
          <span class="icon" :class="{ 'open': activeIndex === index }">{{ activeIndex === index ? '-' : '+' }}</span>
          {{ getData(item, 'baslik') }}
        </button>
        <div v-show="activeIndex === index" class="accordion-content">
          <!-- <img v-if="getData(item, 'resim')" :src="getAssets(getData(item, 'resim'))" alt="" /> -->
          <div v-html="getData(item, 'editor')">

          </div>
        </div>
      </div>
    </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

import getData from "@/utilities/getData";
import getAssets from "@/utilities/getAssets";
const { data } = defineProps(["data"]);


const items = ref([
  { 
    title: 'Monomers and Polymers', 
    resim:'/assets/images/products/Monomers.jpg', 
    contents: ['Vinyl Acetate Monomer', 'Styrene Monomer', 'Methyl Methacrylate' ,'Cyanoacrylate Monomer (Super Glue)','Polyethylene (PE)','Polypropylene (PP)'] 
  },
  { 
    title: 'Solvents', 
    resim: '/assets/images/products/solvents.jpg', 
    contents: ['Toluene', 'Hexane', 'Heptane', 'Acetone'] 
  },
  { 
    title: 'Resins', 
    resim:'/assets/images/products/resin.jpg', 
    contents: ['Hydrocarbon Resins', 'Aliphatic Resins'] 
  },
  { 
    title: 'Polyurethane Chemicals',  
    resim:'/assets/images/products/Polyurethane.jpg', 
    contents: ['Isocyanates', 'Polyols'] 
  },
  { 
    title: 'Additives', 
    resim:'/assets/images/products/Additives.jpg', 
    contents: ['Calcite', 'Talk', 'Cellulose'] 
  }
]);

const activeIndex = ref(null);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

