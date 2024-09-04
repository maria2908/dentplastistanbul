<script setup>
import { ref } from 'vue'

const dataList = ref([
  'liposuction.procedures.list.text-1',
  'liposuction.procedures.list.text-2',
  'liposuction.procedures.list.text-3',
  'liposuction.procedures.list.text-4',
  'liposuction.procedures.list.text-5',
  'liposuction.procedures.list.text-6',
  'liposuction.procedures.list.text-7',
  'liposuction.procedures.list.text-8',
  'liposuction.procedures.list.text-9'
])

</script>

<template>
  <h1 class="mt-12 text-xl sm:text-2xl md:text-3xl">{{ $t('liposuction.procedures.title') }}</h1>
  <p class="text-center pb-12 text-sm sm:text-base md:text-lg">{{ $t('liposuction.procedures.text') }}</p>
  <ul class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full sm:w-4/5 mx-auto gap-4 bg-customPink bg-opacity-80 p-4 rounded-2xl">
    <li v-for="(data, index) in dataList" :key="index" class="p-8 content-center text-center text-white">
      {{$t(data)}}
    </li>
  </ul>
</template>

<style scoped>
</style>
