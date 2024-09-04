<script setup>
import {Carousel, Navigation, Slide} from "vue3-carousel";
import {ref} from "vue";

const slides = ref([
  {
    img: 'https://media-cdn.holidaycheck.com/image/fetch/w_2880,h_1620,c_fit,q_auto,f_auto/https%3A%2F%2Fi.travelapi.com%2Flodging%2F6000000%2F5420000%2F5414600%2F5414579%2Fdd118b9c.jpg'
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/56040412.jpg?k=c0cb9b0584ad6dfa927359ae9e37231de196e72769db2b11c08b446c938af135&o=&hp=1'
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/218925878.jpg?k=ae1ce210d0ad5b3806b6f8090e5bd500ee7d903bd4b20c6886e742268ab55ca3&o=&hp=1'
  },
  {
    img: 'https://media-cdn.holidaycheck.com/image/fetch/w_2880,h_1620,c_fit,q_auto,f_auto/https%3A%2F%2Fi.travelapi.com%2Flodging%2F6000000%2F5420000%2F5414600%2F5414579%2Fdbab9701.jpg'
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/253948385.jpg?k=e212569e582a5d6636d544d501c87fcad77b741ce518b1073088ad5ecdb43676&o=&hp=1'
  },
  {
    img: 'https://media-cdn.holidaycheck.com/image/fetch/w_2880,h_1620,c_fit,q_auto,f_auto/https%3A%2F%2Fi.travelapi.com%2Flodging%2F6000000%2F5420000%2F5414600%2F5414579%2Ff51e3b8e.jpg'
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/218921167.jpg?k=782c4b7ad2215e331a3ced05cf1a440d8491cfb7788395f4a3e6b0babacc92f4&o=&hp=1'
  },
  {
    img: 'https://media-cdn.holidaycheck.com/image/fetch/w_2880,h_1620,c_fit,q_auto,f_auto/https%3A%2F%2Fi.travelapi.com%2Flodging%2F6000000%2F5420000%2F5414600%2F5414579%2Fb8f15c82.jpg'
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/218924309.jpg?k=2fb56474cb31ab6105ea6ba74c13bc99c2d672f15ea3d032499f393554f1b93e&o=&hp=1'
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/307440543.jpg?k=af10dbae58087b5208b2159d69f3dcf60a6138f1c2d23fb670a794bc509e4c45&o=&hp=1'
  },
  {
    img: 'https://media-cdn.holidaycheck.com/image/fetch/w_2880,h_1620,c_fit,q_auto,f_auto/https%3A%2F%2Fi.travelapi.com%2Flodging%2F6000000%2F5420000%2F5414600%2F5414579%2Fe11b502f.jpg'
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/252524901.jpg?k=de929d373a06a0485f1573be3483b0dc7c17eedb0d8b8b2164dacda73f61bd46&o=&hp=1'
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/56356749.jpg?k=247864660835733e248befb210d3f0550fdb1a76d880463d423d9f55a99ec0f4&o=&hp=1'
  },

]);


const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
  breakpoints: {
    769: {
      itemsToShow: 2,
      snapAlign: 'center',
    },
    1024: {
      itemsToShow: 3,
      snapAlign: 'center',
    },
    1440: {
      itemsToShow: 4,
      snapAlign: 'center',
    },
  }
})
</script>

<template>
  <h1 class="mt-12 text-center text-xl md:text-2xl lg:text-3xl">{{ $t('main-page.accommodation.title') }}</h1>
  <p class="w-11/12 md:w-3/4 text-center mx-auto mb-12">{{ $t('main-page.accommodation.text') }}</p>
  <Carousel v-bind="settings">
    <Slide v-for="(slide, index) in slides" :key="index" class="px-2 md:px-4 w-full h-48 md:h-72">
      <img class="w-full h-full object-cover rounded-lg" :src="slide.img">
    </Slide>
    <template #addons>
      <div class="navi-accommodation">
        <Navigation/>
      </div>
    </template>
  </Carousel>
  <p class="w-11/12 md:w-3/4 text-center mx-auto mt-20">{{ $t('main-page.accommodation.subtitle') }}</p>
</template>

<style lang="scss">
.navi-accommodation {
  .carousel__next {
    background-color: white;
    border-radius: 20px;
    position: absolute;
    right: -2%;
    top: 50%;
    transform: translateY(-50%);
  }

  .carousel__prev {
    background-color: white;
    border-radius: 20px;
    position: absolute;
    left: -2%;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
