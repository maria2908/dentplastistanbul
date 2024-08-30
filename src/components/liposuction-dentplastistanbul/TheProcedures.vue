<script setup>
import {ref} from 'vue'

const dataList = ref([
  'с живота',
  'боков (талии)',
  'участков между ногами в верхней части бедер',
  'внешней стороны бедер («галифе» или «ушки»)',
  'ягодиц',
  'спины',
  'одбородка и шеи',
  'груди',
  'коленей'
])

</script>

<template>
  <h1 class="mt-12">Как проходит процедура липосакции</h1>
  <p class="text-center pb-12">Чтобы улучшить контуры тела, хирург удаляет жировые отложения, которые сложно убрать с помощью физических
    упражнений и диеты, из проблемных зон: </p>
  <ul class="grid grid-cols-5 w-2/3 mx-auto gap-4">
    <li v-for="(data, index) in dataList" :key="index" class="bg-customBeg flex items-center justify-center p-12 rounded-2xl h-48 text-lg">{{data}}</li>
  </ul>
</template>

<style scoped>

</style>