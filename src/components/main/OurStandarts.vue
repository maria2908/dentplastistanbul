<template>
  <div class="bg-customGray bg-opacity-70  m-4 rounded-2xl py-6">
    <h1 class="text-center text-xl md:text-2xl lg:text-3xl mb-4">{{ $t('main-page.standards.title') }}</h1>
    <p class="mb-12 px-4 text-center my-auto mx-auto lg:w-1/2 md:w-full">{{ $t('main-page.standards.subtitle') }}    </p>
    <div class="tablet mx-48 flex">
      <div class="block w-full">
        <div class="flex w-full">
          <img style="height: 30vh; " class="w-full object-cover " src="../../assets/img/statistic.JPG">
          <p class="w-full bg-white text-black content-center text-center">{{ $t('main-page.standards.text-1') }}</p>
        </div>
        <div class="flex  w-full">
          <p class=" w-full bg-white text-black  content-center text-center">{{ $t('main-page.standards.text-2') }}</p>
          <img style="height: 30vh; " class=" w-full object-cover " src="../../assets/img/clinic.JPG">
        </div>
      </div>

      <div class="block w-full">
        <div class="flex w-full">
          <img style="height: 30vh" class="w-full object-cover " src="../../assets/img/our-standarts.JPG">
          <p class="w-full bg-white text-black  content-center text-center">{{ $t('main-page.standards.text-3') }}</p>
        </div>
        <div class="flex w-full">
          <p class="w-full bg-white text-black  content-center text-center">{{ $t('main-page.standards.text-4') }}</p>
          <img style="height: 30vh;" class="w-full object-cover " src="../../assets/img/our-standarts2.JPG">
        </div>
      </div>
    </div>

    <p class="py-12 text-center mx-auto lg:w-1/2 md:w-full">{{ $t('main-page.standards.subtitle-2') }}</p>
  </div>
</template>

<style scoped lang="scss">
ul {

  li {
    margin: 0 10px;
    border-radius: 15px;
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .tablet {
    display: block;
    margin: 0 20px;

    p {

    }
  }
}
</style>
<script setup>
</script>