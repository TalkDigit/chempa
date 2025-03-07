<template>
    <div class="accordion">
      <div v-for="(item, index) in items" :key="index" class="accordion-item">
        <button class="accordion-header" @click="toggle(index)">
          <span class="icon" :class="{ 'open': activeIndex === index }">{{ activeIndex === index ? '-' : '+' }}</span>
          {{ item.title }}
        </button>
        <div v-show="activeIndex === index" class="accordion-content">
            <img :src="item.resim" alt=""/>
            <ul>
                <li v-for="(content, i) in item.contents" :key="i">{{ content }}</li>
            </ul>
        </div>
      </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

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

