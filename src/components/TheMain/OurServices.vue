<template>
  <h1 class="mb-4">Наши услуги в сфере медицинского туризма в Стамбуле</h1>
  <div class="flex">
    <div class="w-1/3 p-6 rounded-2xl h-fit text-justify">
      <p>
        Центр Dentplastistanbul сотрудничает с клиниками, которые специализируются на пластической хирургии, установке дентальных имплантов и виниров. В список услуг, которые мы предлагаем в рамках медтуризма в Стамбуле, входят:
      </p>
      <p class=" mt-32">В рамках программы медицинского туризма в Стамбуле доступны комбинированные операции, что сбережет ваши деньги и время, поскольку не придется приезжать дважды. Вы можете, например, сочетать фейслифтинг с маммопластикой, абдоминопластику с созданием «голливудской улыбки», ринопластику с установкой дентальных имплантов.</p>
    </div>
    <Carousel v-bind="settings" :breakpoints="breakpoints" class="w-2/3">
      <Slide v-for="slide in slides" :key="slide">
        <div class="carousel__item mx-6">
          <img :src="slide.img" class="mx-auto" />
          <p class="w-80 mt-4 text-justify">{{slide.title}}</p>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>

</template>
<style>
.carousel__slide {
  align-items: start;
  justify-content: center;
}

.carousel__pagination {
  margin-top: 35px;
}
.carousel__next {
  margin-left: 60px;
}
.carousel__prev, .carousel__next {
  position: absolute;
  color: white;
  padding: 5px;
  background-color: #AD9173;
  border-radius: 40px;
  left: -10%;
  top: 100% !important;
}

@media (min-width: 768px) { 
  .carousel__slide {
    margin: 0 20px;
  }
 }
</style>

<script setup>
import { ref } from 'vue'
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const slides = ref([
  {
    title: 'Фейслифтинг — подтяжка лица',
    img: 'https://dp-istanbul.net/wp-content/uploads/offer-1.png'
  },
  {
    title: 'Маммопластика — увеличение или уменьшение молочных желез. Клиники, с которыми мы сотрудничаем, работают с имплантами мировых брендов (Motiva, Mentor, Polytech).',
    img: 'https://dp-istanbul.net/wp-content/uploads/offer-2.png'
  },
  {
    title: 'Ринопластика — исправление или восстановление формы носа',
    img: 'https://dp-istanbul.net/wp-content/uploads/offer-6.png'
  },
  {
    title: 'Абдоминопластика и липосакция — удаление избыточной кожи и жировых отложений для улучшения контуров живота',
    img: 'https://dp-istanbul.net/wp-content/uploads/offer-5.png'
  },
  {
    title: 'Установка дентальных имплантов (Osstem, Dentium и MegaGen), включая процедуры All-on-4 и All-on-6, когда требуется поставить полный протез.',
    img: 'https://dp-istanbul.net/wp-content/uploads/offer-3.png'
  },
  {
    title: 'Установка циркониевых коронок. Отличаются высокой прочностью, долговечностью, идеально имитируют естественный цвет и прозрачность зубов.',
    img: 'https://dp-istanbul.net/wp-content/uploads/offer-1.png'
  },
  {
    title: 'Создание «голливудской улыбки» — установка керамических виниров на верхний и нижний ряд зубов, что позволяет спрятать все дефекты (кривизну, щели и пр.).',
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