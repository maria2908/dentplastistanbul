<script>
import {defineComponent} from "vue";
import TheMain from "@/components/Dentistry/TheMain.vue";
import MainContainer from "@/layout/MainContainer.vue";
import DentalTreatment from "@/components/Dentistry/DentalTreatment.vue";
import WhatServices from "@/components/Dentistry/WhatServices.vue";
import WhyDentistryIstambul from "@/components/Dentistry/WhyDentistryIstambul.vue";

export default defineComponent({
  components: {WhyDentistryIstambul, WhatServices, DentalTreatment, MainContainer, TheMain}
})
</script>

<template>
  <main-container>
    <TheMain />
    <DentalTreatment />
    <WhatServices />
    <WhyDentistryIstambul />
  </main-container>
</template>
