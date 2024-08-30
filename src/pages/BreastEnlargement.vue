<script setup>
import TheMain from "@/components/breast-enlargement/TheMain.vue";
import MainContainer from "@/layout/MainContainer.vue";
import WhichClinics from "@/components/breast-enlargement/WhichClinics.vue";
import HowBreastIstDone from "@/components/breast-enlargement/HowBreastIstDone.vue";
import HowGoesTheVisit from "@/components/breast-enlargement/HowGoesTheVisit.vue";
import WhyDentplastistanbul from "@/components/breast-enlargement/WhyDentplastistanbul .vue";
import {onMounted} from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <main-container>
    <TheMain />
    <WhichClinics />
    <HowBreastIstDone />
    <HowGoesTheVisit />
    <WhyDentplastistanbul />
  </main-container>
</template>
