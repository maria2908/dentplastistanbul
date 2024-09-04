<script setup>
import { computed, ref } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import StarRating from "@/components/StarRating.vue";

const slides = ref([
  { name: 'Vita Vodopianova', date: '15.03.2024', title: 'main-page.feedback.slide.text-1', stars: 5 },
  { name: 'Radostina', date: '22.02.2024', title: 'main-page.feedback.slide.text-3', stars: 5 },
  { name: 'Ertan Gubes', date: '13.12.2023', title: 'main-page.feedback.slide.text-4', stars: 5 },
  { name: 'Mary Sean Taylor', date: '29.11.2023', title: 'main-page.feedback.slide.text-2', stars: 5 },
]);

const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
});

const breakpoints = ref({
  480: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  768: {
    itemsToShow: 1.5,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 2,
    snapAlign: 'center',
  },
  1280: {
    itemsToShow: 2.5,
    snapAlign: 'center',
  },
  1440: {
    itemsToShow: 2.5,
    snapAlign: 'center',
  },
});
</script>

<template>
  <div class="mb-12">
    <h1 class="text-center text-xl md:text-2xl lg:text-3xl">{{ $t('main-page.feedback.title')}}</h1>
    <div class="w-full pt-4">
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="(slide, index) in slides" :key="index" class=" flex">
          <div class="shadow mx-auto bg-white mt-9 rounded-2xl relative pt-4 px-6 w-3/4">
            <div class="w-16 h-16 bg-customDarkBeg text-white mx-auto text-2xl absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-full shadow-2">
              {{ slide.name.charAt(0) }}
            </div>
            <div class="text-center mt-12 font-bold">{{ slide.name }} / {{ slide.date }}</div>
            <div class=" mt-4 text-justify">{{ $t(slide.title) }}</div>
            <div class="mx-auto my-3">
              <StarRating :initialRating="slide.stars" :totalStars="5" />
            </div>
          </div>
        </Slide>
        <template #addons>
          <div class="navi-services">
            <Navigation />
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style lang="scss">
.active-slide {
  box-shadow: 0px 1px 20px -13px rgba(66, 68, 90, 1);
}
.carousel__slide {
  align-items: start;
  justify-content: center;
}
.navi-services {
  .carousel__next {
    position: absolute;
    left: 5% ;
    margin-left: 60px;
  }
  .carousel__prev, .carousel__next {
    position: absolute;
    color: white;
    padding: 5px;
    background-color: #AD9173;
    border-radius: 40px;
    left: 5%;
    top: 100%;
  }
}

@media (max-width: 800px) {
  .navi-services {
    .carousel__next {
      left: -10% !important;
      top: 0;
    }

    .carousel__prev {
      left: -10% !important;
      top: 0;
    }
  }
}

</style>
