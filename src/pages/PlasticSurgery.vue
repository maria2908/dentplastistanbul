<script setup>
import TheMain from "@/components/plastic-surgery/TheMain.vue";
import MainContainer from "@/layout/MainContainer.vue";
import SpecialtiesOfPlasticSurgery from "@/components/plastic-surgery/SpecialtiesOfPlasticSurgery.vue";
import WhatServices from "@/components/plastic-surgery/WhatServices.vue";
import HowGoesTheVisit from "@/components/plastic-surgery/HowGoesTheVisit.vue";
import WhyDentplastistanbul from "@/components/plastic-surgery/WhyDentplastistanbul.vue";
import {onMounted} from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <main-container>
    <TheMain />
    <SpecialtiesOfPlasticSurgery />
    <WhatServices />
    <HowGoesTheVisit />
    <WhyDentplastistanbul />
  </main-container>
</template>
