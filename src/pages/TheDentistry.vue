<script setup>
import TheMain from "@/components/dentistry/TheMain.vue";
import MainContainer from "@/layout/MainContainer.vue";
import DentalTreatment from "@/components/dentistry/DentalTreatment.vue";
import WhatServices from "@/components/dentistry/WhatServices.vue";
import WhyDentistryIstambul from "@/components/dentistry/WhyDentistryIstambul.vue";
import {onMounted} from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <main-container>
    <TheMain />
    <DentalTreatment />
    <WhatServices />
    <WhyDentistryIstambul />
  </main-container>
</template>
