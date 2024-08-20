<script setup>
import MainButton from "@/components/MainButton.vue";
import { ref } from 'vue';


const scrollToFeedback = () => {
  const section = document.getElementById('feedback-section');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
  <div class="flex flex-col lg:flex-row bg-customWhite p-4 sm:m-0 sm:p-0">
    <div class="relative w-full lg:w-2/3 mb-6 lg:mb-0">
      <div class="absolute bg-white p-7 logo w-32 sm:w-40">
        <img src="../../assets/img/logo.png" />
      </div>
      <img class="w-full h-72 lg:h-[93vh] object-cover rounded-2xl" src="../../assets/img/welcome-main.JPG">
    </div>
    <div class="w-full lg:w-1/3 lg:ml-12">
      <div class="bg-customDarkBeg rounded-2xl p-5 lg:mt-24 text-white">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl capitalize font-semibold">
          Медицинский туризм в Стамбуле с Dentplastistanbul
        </h2>
        <div class="flex flex-wrap justify-between mt-4 sm:mt-8 text-sm sm:text-base">
          <p>качество</p>
          <p>безопасность</p>
          <p>выгодные цены</p>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row justify-between my-8 lg:my-11 items-center">
        <div class="flex space-x-2">
          <img class="w-12 h-12 rounded-3xl"
               src="https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA"/>
          <img class="w-12 h-12 rounded-3xl"
               src="https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA"/>
          <img class="w-12 h-12 rounded-3xl"
               src="https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA"/>
        </div>
        <button @click="scrollToFeedback" class="flex mt-4 sm:mt-0 bg-customGray p-2 rounded-2xl cursor-pointer">
          <div class="w-12 h-12 rounded-3xl text-center pt-2.5">
            <span class="material-icons text-white">visibility</span>
          </div>
          <p class="mt-3 text-white pr-3">Наши отзывы</p>
        </button>
      </div>
      <div class="w-full gradient rounded-2xl pb-8 pt-4 px-4">
        <img class="w-full h-48 sm:h-72 object-cover mx-auto rounded-2xl" src="../../assets/img/apply.JPG"/>
        <div class="flex flex-col sm:flex-row justify-between mt-6">
          <p class="text-sm sm:text-base text-justify text-white lg:w-72 sm:mr-8 mb-2">Для подальшого співпрацювання подайте заяву, та ми якнайшвидще звяжимось з вами</p>
          <MainButton class="mt-4 h-fit ">Подати заяву</MainButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  border-bottom-right-radius: 30px;
}

.logo:before {
  content: "";
  width: 30px;
  height: 30px;
  background-color: transparent;
  right: -18%;
  top: 0;
  position: absolute;
  border-radius: 50%;
  box-shadow: -10px -10px #ffffff;;
}

.logo:after {
  content: "";
  width: 30px;
  height: 30px;
  background-color: transparent;
  left: 0;
  bottom: -18%;
  position: absolute;
  border-radius: 50%;
  box-shadow: -10px -10px #ffffff;;
}
</style>
