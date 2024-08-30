<script setup>
import { computed, ref } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import StarRating from "@/components/StarRating.vue";

const slides = ref([
  { name: 'Vita', title: 'Фейслифтинг — подтяжка лица', stars: 3 },
  { name: 'Vita', title: 'Фейслифтинг — подтяжка лица', stars: 5 },
  { name: 'Katya', title: 'Фейслифтинг — подтяжка лица', stars: 4.5 },
  { name: 'Vita', title: 'Фейслифтинг — подтяжка лица', stars: 3 },
  { name: 'Vita', title: 'Фейслифтинг — подтяжка лица', stars: 3 },
  { name: 'Vita', title: 'Фейслифтинг — подтяжка лица', stars: 3 },
]);

const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
});

const breakpoints = ref({
  700: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 1.5,
    snapAlign: 'start',
  },
});

const firstLetterName = computed(() => {
  return slides.value.map(slide => slide.name.charAt(0));
});
</script>

<template>
  <div class="flex flex-wrap mb-8 mt-24">
    <!-- Text Section -->
    <div class="w-full md:w-1/2 text-left p-4">
      <h1 class="uppercase text-center">Наши счастливые клиенты</h1>
      <div class="p-4 md:pl-12 md:pr-24">
        <p class="text-justify">Мы гордимся тем, что смогли удовлетворить потребности наших клиентов и сделать их счастливыми. Вот что они говорят о нашем сервисе:</p>
        <p class="mt-12 md:mt-24 text-justify">Ваши положительные отзывы вдохновляют нас и помогают стать лучше. Мы благодарны за ваше доверие и уверены, что сможем продолжать радовать вас высоким качеством нашего сервиса!</p>
      </div>
    </div>

    <!-- Carousel Section -->
    <div class="w-full md:w-1/2 pt-12">
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="(slide, index) in slides" :key="index" class="px-4 h-96">
          <div class="shadow h-72 mx-auto bg-white mt-9 rounded-2xl relative pt-12 max-w-full sm:w-72 md:w-96">
            <div class="w-16 h-16 bg-customDarkBeg text-white mx-auto text-2xl absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-full shadow-2">
              {{ slide.name.charAt(0) }}
            </div>
            <div class="text-center mt-12">{{ slide.name }}</div>
            <div class="text-center mt-4 px-4">{{ slide.title }}</div>
            <div class="mx-auto mt-6">
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
    left: 5% !important;

  }
  .carousel__prev, .carousel__next {
    position: absolute;
    color: white;
    padding: 5px;
    background-color: #AD9173;
    border-radius: 40px;
    left: 5%;
    top: 100% ;
  }
}
</style>

