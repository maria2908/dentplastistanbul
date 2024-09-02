<script setup>
import { ref } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const slides = ref([
  {
    title: 'main-page.services.slider.title-1',
    img: 'https://dp-istanbul.net/wp-content/uploads/offer-1.png'
  },
  {
    title: 'main-page.services.slider.title-2',
    img: 'https://dp-istanbul.net/wp-content/uploads/offer-2.png'
  },
  {
    title: 'main-page.services.slider.title-3',
    img: 'https://dp-istanbul.net/wp-content/uploads/offer-6.png'
  },
  {
    title: 'main-page.services.slider.title-4',
    img: 'https://dp-istanbul.net/wp-content/uploads/offer-5.png'
  },
  {
    title: 'main-page.services.slider.title-5',
    img: 'https://dp-istanbul.net/wp-content/uploads/offer-3.png'
  },
  {
    title: 'main-page.services.slider.title-6',
    img: 'https://dp-istanbul.net/wp-content/uploads/offer-1.png'
  },
  {
    title: 'main-page.services.slider.title-7',
    img: 'https://dp-istanbul.net/wp-content/uploads/offer-4.png'
  },
])

const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
})

const breakpoints = ref({
  700: {
    itemsToShow: 2,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 3,
    snapAlign: 'start',
  },
})
</script>


<template>
  <h1 class="text-center">{{ $t('main-page.services.title') }}</h1>
  <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/3 p-6 rounded-2xl h-fit text-justify">
      <p>{{ $t('main-page.services.text-1') }}</p>
      <p class="mt-8 md:mt-32">{{ $t('main-page.services.text-2') }} </p>
    </div>
    <Carousel v-bind="settings" :breakpoints="breakpoints" class="w-full md:w-2/3 mt-8 md:mt-0">
      <Slide v-for="slide in slides" :key="slide">
        <div class="carousel__item mx-6">
          <img :src="slide.img" class="mx-auto" />
          <p class="w-80 mt-4 text-justify">{{$t(slide.title)}}</p>
        </div>
      </Slide>

      <template #addons>
        <div class="navi-services">
          <Navigation  />
        </div>
      </template>
    </Carousel>
  </div>
</template>

<style lang="scss">
.carousel__slide {
  align-items: start;
  justify-content: center;
}
.navi-services {
  margin-top: 50px;

  .carousel__next {
    margin-left: 60px;
  }
  .carousel__prev,
  .carousel__next {
    position: absolute;
    color: white;
    padding: 5px;
    background-color: #AD9173;
    border-radius: 40px;
    left: -10%;
    top: 100%;
  }
}
</style>

