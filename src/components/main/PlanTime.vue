<script setup>
import { ref } from 'vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import MainButton from '@/components/MainButton.vue';

const slides = ref([
  { title: 'ринопластика', days: '5' },
  { title: 'увеличение груди', days: '6' },
  { title: 'абдоминопластика', days: '8' },
  { title: 'установка зубных имплантов', days: '3-5' },
  { title: 'установка циркониевых коронок', days: '5-7' },
  { title: 'создание «голливудской улыбки»', days: '5-7' }
]);

const settings = ref({
  itemsToShow: 4,
  snapAlign: 'center'
});

const breakpoints = ref({
  400: { itemsToShow: 1, snapAlign: 'right' },
  700: { itemsToShow: 2, snapAlign: 'right' },
  1024: { itemsToShow: 3, snapAlign: 'center' },
  1280: { itemsToShow: 3, snapAlign: 'center' }
});
</script>

<template>
  <div class="p-12">
    <div class="flex flex-wrap md:flex-nowrap" style="height: 80vh;">
      <div class="relative w-full md:w-1/2 mb-6 md:mb-0">
        <div class="p-6 rounded-2xl bg-opacity-60">
          <h2 class="text-3xl md:text-4xl capitalize">Медтуризм в Стамбуле: как спланировать время пребывания</h2>
          <p class="mt-4 text-base md:text-lg pt-2 pb-6">Свяжитесь с нашим менеджером, чтобы забронировать дату операции. В среднем на пребывание в Турции выделите неделю. Точное время (в днях) зависит от вида процедуры:</p>
        </div>
        <div class=" mt-8 z-10 bg-white rounded-2xl md:w-auto ">
          <Carousel v-bind="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in slides" :key="slide.title" class="py-6 pr-4">
              <div class="w-64 carousel__item bg-white text-black p-4 h-48 md:h-56 shadow rounded-2xl flex flex-col items-center justify-center hover:bg-customDark hover:text-white transition duration-500">
                <p class="uppercase mb-2">{{ slide.title }}</p>
                <span class="text-5xl md:text-7xl font-bold">{{ slide.days }}</span>
              </div>
            </Slide>
            <template #addons>
              <div class="navi-plan_time">
                <Navigation />
              </div>
            </template>
          </Carousel>
        </div>
        <div class="mt-12 w-full flex justify-between items-center">
          <p class="bg-opacity-60 p-6 rounded-2xl text-base md:text-lg w-full md:w-3/4">Это время включает диагностику, подготовительные работы, операцию, постреабилитационный период. Если вы планируете объединить услуги, медтуризм в Стамбуле может занять больше времени.</p>
          <MainButton class="hidden md:block">Подать заяву</MainButton>
        </div>
      </div>
      <div class="w-full md:w-2/5 mx-auto">
        <img class="w-full h-full object-cover rounded-2xl" src="../../assets/img/woman.JPG" alt="Woman">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.navi-plan_time .carousel__next {
  margin-left: 60px;
}

.navi-plan_time .carousel__prev, .navi-plan_time .carousel__next {
  position: absolute;
  color: white;
  padding: 5px;
  background-color: #182230;
  border-radius: 40px;
  top: 110% !important;
  left: 0;
}


.carousel__slide {
  display: flex;
  align-items: start;
  justify-content: center;
}

.carousel__pagination {
  margin-top: 35px;
}


</style>

<style scoped>

img {
  transform: scaleX(-1);
}
@media (max-width: 768px) {
  img {
    display: none;
  }


}

</style>
