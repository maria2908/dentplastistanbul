<script setup>
import {ref} from 'vue'

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
  <h1 class="mt-12">{{ $t('liposuction.procedures.title') }}</h1>
  <p class="text-center pb-12">{{ $t('liposuction.procedures.text') }}</p>
  <ul class="grid grid-cols-5 w-2/3 mx-auto gap-4">
    <li v-for="(data, index) in dataList" :key="index" class="bg-customBeg flex items-center justify-center p-12 rounded-2xl h-48 text-lg">{{$t(data)}}</li>
  </ul>
</template>

<style scoped>

</style>