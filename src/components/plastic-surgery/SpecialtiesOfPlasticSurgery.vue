<template>

  <h1 class="mt-12 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
    {{ $t('plastic.specialities.title')}}
  </h1>

  <p class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto text-center mt-4">
    {{ $t('plastic.specialities.text')}}
  </p>

  <div class="flex flex-col lg:flex-row my-12 space-y-6 lg:space-y-0 lg:space-x-8">
    <p class="w-full lg:w-1/3 p-6 flex items-center sm:p-8 md:p-12 lg:p-12 py-8 sm:py-10 md:py-16 lg:py-16 text-center border border-customDarkBeg bg-opacity-60 rounded-2xl">
      {{ $t('plastic.specialities.block-1')}}
    </p>
    <p class="w-full lg:w-1/3 p-6 flex items-center sm:p-8 md:p-12 lg:p-12 py-8 sm:py-10 md:py-16 lg:py-16 text-center bg-customDarkBeg bg-opacity-60 rounded-2xl">
      {{ $t('plastic.specialities.block-2')}}
    </p>
    <p class="w-full lg:w-1/3 p-6 flex items-center sm:p-8 md:p-12 lg:p-12 py-8 sm:py-10 md:py-16 lg:py-16 text-center border border-customDarkBeg bg-opacity-60 rounded-2xl">
      {{ $t('plastic.specialities.block-3')}}
    </p>
  </div>


</template>

<script setup>
</script>
