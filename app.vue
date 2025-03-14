<template>
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
import { useHead } from '#imports'

useHead({
  titleTemplate: (title) => title ? `${title} - Chempa` : 'Chempa',
  meta: [
    { 
      name: 'description', 
      content: 'Chempa DMCC is founded for Chemical and Metallurgical raw material trading activities. In addition to raw material trading activities, Chempa also focuses on offering private labeling solutions for Adhesives and Sealants. Its Global Supply Chain Network from USA to Japan enables to reach required products in terms of quality, speed and cost effectiveness.' 
    }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/assets/images/logo.png' } // Favicon ekleme
  ]
})
</script>

