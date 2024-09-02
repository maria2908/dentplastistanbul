<script setup>
import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import MainButton from '@/components/MainButton.vue';

const slides = ref([
  { title: 'main-page.plan-time.slider.title-1', days: '5' },
  { title: 'main-page.plan-time.slider.title-2', days: '6' },
  { title: 'main-page.plan-time.slider.title-3', days: '8' },
  { title: 'main-page.plan-time.slider.title-4', days: '3-5' },
  { title: 'main-page.plan-time.slider.title-5', days: '5-7' },
  { title: 'main-page.plan-time.slider.title-6', days: '5-7' }
]);

</script>

<template>
  <div class="p-4 sm:p-6 md:p-12">
    <div class="w-full mb-6 md:mb-0">
      <div class="p-4 md:p-6 rounded-2xl bg-opacity-60 text-center">
        <h2 class="text-xl sm:text-2xl md:text-4xl capitalize">{{ $t('main-page.plan-time.title') }}</h2>
        <p class="mt-4 text-sm sm:text-base md:text-lg pt-2 pb-4 md:pb-6">{{ $t('main-page.plan-time.text-1') }}</p>
      </div>

      <div class="bg-white rounded-2xl w-full md:w-auto flex flex-wrap justify-between">
        <div
            v-for="slide in slides"
            :key="slide.title"
            class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-2"
        >
          <div class="carousel__item bg-white text-black p-4 h-32 sm:h-40 md:h-48 lg:h-56 shadow rounded-2xl flex flex-col items-center justify-center hover:bg-customDark hover:text-white transition duration-500">
            <p class="uppercase mb-2 text-center text-xs sm:text-sm md:text-base">{{ $t(slide.title) }}</p>
            <span class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">{{ slide.days }}</span>
          </div>
        </div>
      </div>

      <div class="mt-4 w-full flex flex-col md:flex-row justify-between items-center">
        <p class="bg-opacity-60 p-4 md:p-6 rounded-2xl text-sm sm:text-base md:text-lg w-full mb-4 md:mb-0 md:w-3/4">
          {{ $t('main-page.plan-time.text-2') }}
        </p>
        <MainButton class="w-full md:w-auto">{{ $t('main-page.welcome.apply') }}</MainButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>

