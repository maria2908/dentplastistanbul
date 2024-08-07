<script setup>

import MainButton from "@/components/MainButton.vue";

</script>

<template>
  <div class="flex bg-customWhite">
    <div style="height: 92vh" class="w-2/3 ">
      <div class="absolute bg-white p-7 logo">Logo</div>
      <img class="w-full h-full object-cover rounded-2xl" src="../../assets/img/welcome-main.JPG">
    </div>
    <div class="w-1/3 ml-12 ">
      <div class="bg-customBeg rounded-2xl p-5 mt-32 text-white md:mt-24">
        <h2 class="text-5xl capitalize font-semibold md:text-3xl">Медицинский туризм в Стамбуле с Dentplastistanbul</h2>
        <div class="flex justify-between mt-12">
          <p>качество</p>
          <p>безопасность</p>
          <p>выгодные цены</p>
        </div>
      </div>
      <div class="flex justify-between my-12 content-center md:my-6">
        <div class="flex w-12 h-12">
          <img class="h-full w-full rounded-3xl"
               src="https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA"/>
          <img class="h-full w-full rounded-3xl"
               src="https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA"/>
          <img class="h-full w-full rounded-3xl"
               src="https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA"/>
        </div>
        <div class="flex">
          <div class="w-12 h-12 gradient rounded-3xl mr-3 text-center pt-2.5"><span class="material-icons">visibility</span></div>
          <p class="mt-3">Наші відгуки</p>
        </div>
      </div>
      <div style="width: 100%; height: 43vh" class="gradient rounded-2xl pb-8 pt-4 px-4 ">
        <img class="w-full h-72 object-cover mx-auto rounded-2xl flex flex-col items-center md:h-52"
             src="../../assets/img/apply.JPG"/>
        <div class="flex justify-between mt-6 md:mt-4 content-center">
          <p class="w-2/3 mr-8 px-4 md:w-64">Для подальшого співпрацювання подайте заяву, та ми якнайшвидще звяжимось з вами</p>
          <MainButton class="h-fit w-1/3 md:mt-5">Подати заяву</MainButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon {
  color: #42b983;
  font-size: 36px;
}

.logo {
  border-bottom-right-radius: 30px;
}

.logo:before {
  content: "";
  width: 30px;
  height: 30px;
  background-color: transparent;
  right: -33%;
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
  bottom: -37%;
  position: absolute;
  border-radius: 50%;
  box-shadow: -10px -10px #ffffff;;
}
</style>
