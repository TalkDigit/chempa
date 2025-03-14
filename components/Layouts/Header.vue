<template>
    <div class="header" :class="{ 'is-fixed': isFixed }">
      <div class="container">
        <div class="header-main">
          <div class="header-logo">
            <a href="/">
              <img src="/assets/images/logo.png" alt="logo" />
            </a>
          </div>
  
          <!-- Desktop Menu -->
          <div class="header-menu desktop-menu">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/who-are-you">WHO WE ARE</a></li>
              <!-- <li><a href="/our-business">OUR BUSINESS</a></li> -->
              <li><a href="/products">PRODUCTS</a></li>
              <li><a href="/carrers">CARRERS</a></li>
              <li><a href="/contact">CONTACT</a></li>
            </ul>
          </div>
  
          <!-- Mobile Menu -->
          <div class="hamburger-menu" :class="{ active: isMenuOpen }" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="mobile-menu-overlay" :class="{ active: isMenuOpen }" @click="toggleMenu"></div>
          <div class="header-menu mobile-menu" :class="{ active: isMenuOpen }">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/who-are-you">WHO WE ARE</a></li>
              <!-- <li><a href="/our-business">OUR BUSINESS</a></li> -->
              <li><a href="/products">PRODUCTS</a></li>
              <li><a href="/carrers">CARRERS</a></li>
              <li><a href="/contact">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  
  const isFixed = ref(false);
  const isMenuOpen = ref(false);
  
  const handleScroll = () => {
    isFixed.value = window.scrollY > 100;
  };
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
  </script>
  