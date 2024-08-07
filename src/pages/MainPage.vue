<script setup>
import TheWelcome from "@/components/TheMain/TheWelcome.vue";
import TheStatistics from "@/components/TheMain/TheStatistics.vue";
import OurStandarts from "@/components/TheMain/OurStandarts.vue";
import MainContainer from "../layout/MainContainer.vue";
import OurServices from "@/components/TheMain/OurServices.vue";
import PostoperativeSupport from "@/components/TheMain/PostoperativeSupport.vue";
import WhereClinics from "@/components/TheMain/WhereClinics.vue";
import PeculiaritieAccommodation from "@/components/TheMain/PeculiaritieAccommodation.vue";
import PlanTime from "@/components/TheMain/PlanTime.vue";
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
  </main-container>
  <plan-time></plan-time>


</template>
