<script setup>
import {ref} from 'vue'
import {Carousel, Slide} from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import {Navigation} from "vue3-carousel";
import MainButton from "@/components/MainButton.vue";

const slides = ref([
  {
    title: 'ринопластика',
    days: '5'
  },
  {
    title: 'увеличение груди',
    days: '6'
  },
  {
    title: 'абдоминопластика',
    days: '8'
  },
  {
    title: 'установка зубных имплантов',
    days: '3-5'
  },
  {
    title: 'установка циркониевых коронок',
    days: '5-7'
  },
  {
    title: 'создание «голливудской улыбки»',
    days: '5-7'
  },

])

const settings = ref({
  itemsToShow: 4,
  snapAlign: 'center',
})

const breakpoints = ref({
  700: {
    itemsToShow: 2,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 4,
    snapAlign: 'center',
  },
})
</script>
<template>
  <div class=" h-full p-12 pl-28">
    <div class="flex">
      <div class="relative w-1/2">
        <div class=" p-6 rounded-2xl bg-opacity-60 ">
          <h2 class="text-4xl capitalize ">Медтуризм в Стамбуле: как спланировать время пребывания</h2>
          <p class="mt-4 text-lg pt-2 pb-6">Свяжитесь с нашим менеджером, чтобы забронировать дату операции. В среднем на пребывание в Турции выделите
            неделю. Точное время (в днях) зависит от вида процедуры:</p>
        </div>
        <div class="absolute mt-8 z-10 bg-white rounded-2xl">
          <Carousel v-bind="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in slides" :key="slide" class="py-6 pr-4">
              <div style="width: 100%;" class=" cursor-pointer duration-500 transition ease-in-out carousel__item blocks bg-white text-black ml-8 p-2 h-56 rounded-2xl content-center px-2 hover:bg-customDark hover:text-white">
                <p class="uppercase mb-2 ">{{ slide.title }}</p>
                <span class="text-7xl font-bold ">{{ slide.days }}</span>
              </div>
            </Slide>
            <template #addons>
              <div class="navi-plan_time">
                <Navigation/>
              </div>
            </template>
          </Carousel>
        </div>
        <div class="flex absolute bottom-0 justify-between">
          <p class="w-3/4  bg-opacity-60 p-6 rounded-2xl text-lg">Это время включает диагностику, подготовительные работы, операцию, постреабилитационный период. Если вы планируете
            объединить услуги, медтуризм в Стамбуле может занять больше времени.</p>
          <main-button >Подать заяву</main-button>
        </div>
      </div>
      <div style="height: 70vh; width: 40%" class="mx-auto">
        <img class="w-full h-full object-cover rounded-2xl revert" src="../../assets/img/woman.JPG">
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.navi-plan_time {
  .carousel__next {
    margin-left: 60px;
  }

  .carousel__prev, .carousel__next {
    position: absolute;
    color: white;
    padding: 5px;
    background-color: #182230;
    border-radius: 40px;
    top: 110% !important;
    left: 0;
  }
}
</style>
<style scoped>

img {
  transform: scaleX(-1);
}
.carousel__slide {
  align-items: start;
  justify-content: center;
}

.blocks {
  box-shadow: 0px 1px 20px -13px rgba(66, 68, 90, 1);
}

.carousel__pagination {
  margin-top: 35px;
}


</style>
