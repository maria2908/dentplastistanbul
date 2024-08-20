<script setup>
import TheHeader from "@/components/TheHeader.vue";
import {onMounted} from 'vue';
import TheFooter from "@/components/TheFooter.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
localStorage.setItem('locale', 'ru');

</script>

<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
  <!--  <the-footer></the-footer>-->
</template>


<style scoped>
</style>