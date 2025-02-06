<template>
  <Layout>
    <!--  首页动态gif  -->
    <template #home-hero-before>
      <HomeHero/>
    </template>

    <!-- <template #home-features-after>
      <ShareCard/>
    </template> -->
  </Layout>
</template>

<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import HomeHero from "./components/layout/HomeHero.vue";
import ShareCard from "./components/layout/ShareCard.vue";
const {Layout} = DefaultTheme;
</script>


<style scoped></style>
