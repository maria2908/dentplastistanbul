<script setup>
import TheWelcome from "@/components/main/TheWelcome.vue";
import TheStatistics from "@/components/main/TheStatistics.vue";
import OurStandarts from "@/components/main/OurStandarts.vue";
import MainContainer from "../layout/MainContainer.vue";
import OurServices from "@/components/main/OurServices.vue";
import PostoperativeSupport from "@/components/main/PostoperativeSupport.vue";
import WhereClinics from "@/components/main/WhereClinics.vue";
import PeculiaritieAccommodation from "@/components/main/PeculiaritieAccommodation.vue";
import PlanTime from "@/components/main/PlanTime.vue";
import TheFeedback from "@/components/main/TheFeedback.vue";
import TranslationContact from "@/components/main/TranslationContact.vue";
import {onMounted} from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <main-container>
    <the-welcome></the-welcome>
    <the-statistics></the-statistics>
  </main-container>
  <our-standarts></our-standarts>
  <main-container>
    <our-services></our-services>
    <postoperative-support></postoperative-support>
  </main-container>
  <where-clinics></where-clinics>
  <main-container>
    <peculiaritie-accommodation></peculiaritie-accommodation>
    <translation-contact></translation-contact>
  </main-container>
  <plan-time></plan-time>
  <main-container id="feedback-section">
    <the-feedback ></the-feedback>
  </main-container>

</template>
