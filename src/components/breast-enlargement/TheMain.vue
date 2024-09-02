<script setup>
</script>

<template>
  <div>
    <!-- Image Section -->
    <div class="relative w-full h-64 sm:h-80 md:h-96 lg:h-[70vh]">
      <img class="w-full h-full object-cover rounded-2xl" src="../../assets/img/breast-enlargement.JPG">
      <h1 class="absolute bottom-0 bg-white text-lg sm:text-2xl md:text-3xl p-4 md:p-6 rounded-2xl left-0 right-0 mx-auto w-fit">
       {{ $t('breast-enlargement.main.title')}}
      </h1>
    </div>

    <!-- Text Section -->
    <div class="mt-4 flex flex-col md:flex-row">
      <p class="shadow md:w-1/2 bg-customGray bg-opacity-70 p-6 sm:p-8 md:p-14 rounded-2xl mb-4 md:mb-0 md:mr-4 text-base sm:text-lg md:text-lg">
        {{ $t('breast-enlargement.main.text-1')}}
      </p>
      <p class="shadow md:w-1/2  bg-customGray bg-opacity-70 p-6 sm:p-8 md:p-14 rounded-2xl md:ml-4 text-base sm:text-lg md:text-lg">
        {{ $t('breast-enlargement.main.text-2')}}
      </p>
    </div>
  </div>
</template>

<style scoped>
h1:before {
  content: "";
  width: 30px;
  height: 30px;
  z-index: 100;
  background-color: transparent;
  left: -2%;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  box-shadow: 15px 15px #ffffff;
}

h1:after {
  content: "";
  width: 30px;
  height: 30px;
  background-color: transparent;
  right: -2%;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  box-shadow: -15px 15px #ffffff;
}
</style>
