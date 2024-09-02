<template>
  <div class="flex flex-col md:flex-row mt-12">
    <div class="w-full md:w-1/2 py-12 px-1 text-center mx-auto bg-customDark text-white">
      <h1>{{ $t('main-page.translation-contact.title-1') }}</h1>
      <span class="material-symbols-outlined icons p-6 my-4 border border-white" style="border-radius: 40px">translate</span>
      <p class="w-4/5 md:w-2/3 mx-auto pb-12 mt-8">{{ $t('main-page.translation-contact.text-1') }}</p>
    </div>
    <div class="w-full md:w-1/2 py-12 px-1 text-center mx-auto border border-customDark mt-6 md:mt-0">
      <h1>{{ $t('main-page.translation-contact.title-2') }}</h1>
      <p class="w-4/5 md:w-1/2 mx-auto pb-20">{{ $t('main-page.translation-contact.text-2') }}</p>
      <MainButton>{{ $t('main-page.welcome.apply') }}</MainButton>
    </div>
  </div>
</template>

<script setup>
import MainButton from "@/components/MainButton.vue";
</script>
