<template>
  <div class="flex flex-col md:flex-row mt-12">
    <div class="w-full md:w-1/2 py-12 text-center mx-auto bg-customDark text-white">
      <h1>Услуги переводчика</h1>
      <span class="material-symbols-outlined icons p-6 my-4 border border-white" style="border-radius: 40px">translate</span>
      <p class="w-4/5 md:w-2/3 mx-auto pb-12 mt-8">
        Мы обеспечиваем русско- и англоязычное сопровождение. Наши переводчики помогут на всех этапах, начиная с консультации и заканчивая послеоперационным наблюдением.
      </p>
    </div>
    <div class="w-full md:w-1/2 py-12 text-center mx-auto border border-customDark mt-6 md:mt-0">
      <h1>Как с нами связаться</h1>
      <p class="w-4/5 md:w-1/2 mx-auto pb-20">
        Чтобы согласовать с нами организацию медтуризма в Стамбуле, заполните форму на сайте. Оставьте контактные данные, укажите вид операции, которую планируете сделать. Менеджер свяжется с вами и ответит на все вопросы.
      </p>
      <MainButton>Связаться с нами</MainButton>
    </div>
  </div>
</template>

<script setup>
import MainButton from "@/components/MainButton.vue";
</script>
