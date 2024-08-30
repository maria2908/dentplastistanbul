<script setup>
import MainContainer from "@/layout/MainContainer.vue";
import TheMain from "@/components/liposuction-dentplastistanbul/TheMain.vue";
import HowChoseTheClinic from "@/components/liposuction-dentplastistanbul/HowChoseTheClinic.vue";
import TheProcedures from "@/components/liposuction-dentplastistanbul/TheProcedures.vue";
import TheProcedure from "@/components/liposuction-dentplastistanbul/TheProcedure.vue";
import WhyDentplastistanbul from "@/components/liposuction-dentplastistanbul/WhyDentplastistanbul.vue";
import {onMounted} from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <main-container>
    <TheMain />
    <HowChoseTheClinic />
    <TheProcedures />
    <TheProcedure />
    <WhyDentplastistanbul />
  </main-container>
</template>
