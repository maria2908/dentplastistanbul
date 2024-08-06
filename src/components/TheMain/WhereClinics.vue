<template>
  <h1 class="px-6">Где расположены наши клиники</h1>
  <div class="map bg-customBeg pt-12 pb-24 block relative">
    <div class="flex justify-center mt-12">
      <div class="block w-1/4 bg-customBeg h-fit rounded-2xl p-8 relative">
        <h2 class="text-2xl">Стоматология</h2>
        <span class="material-symbols-outlined icons text-white p-6 my-4">dentistry</span>
        <p class="pb-12 text-justify">Клиники стоматологии, с которыми мы сотрудничаем, находятся в одних из самых оживленных и привлекательных
          районов города: Таксиме, сердцем которого является одноименная площадь, и Нишанташи. </p>
        <router-link class="absolute bottom-0 right-0 px-3 py-2 bg-white rounded-br-2xl rounded-tl-2xl" to="https://www.google.com/maps/search/%D0%A2%D0%B0%D0%BA%D1%81%D0%B8%D0%BC+%D0%B8+%D0%BD%D0%B8%D1%88%D0%B0%D0%BD%D1%82%D0%B0%D1%88%D0%B8/@41.0463343,28.9393009,13z?entry=ttu"><span class="material-symbols-outlined">arrow_forward</span></router-link>
      </div>
      <div class="w-1/4 block bg-customBeg  rounded-2xl p-8 ml-24 relative">
        <h2 class="text-2xl">Пластическая хирургия</h2>
        <span class="material-symbols-outlined icons text-white p-6 my-4 ">clinical_notes</span>
        <p class="text-justify">Клиника пластической хирургии расположена в районе Кадыкёй, на берегу Мраморного моря. Рядом много музеев, галерей,
          театров и концертных залов, которые вы можете посетить в свободное время.</p>
        <router-link class="absolute bottom-0 right-0 px-3 py-2 bg-white rounded-br-2xl rounded-tl-2xl" to="https://www.google.com/maps/place/%D0%9A%D0%B0%D0%B4%D1%8B%D0%BA%D1%91%D0%B9%2F%D0%A1%D1%82%D0%B0%D0%BC%D0%B1%D1%83%D0%BB,+%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F/@40.9811636,29.0424535,14z/data=!3m1!4b1!4m6!3m5!1s0x14cac790b17ba89d:0xd2d24ea0437a7ee2!8m2!3d40.9818744!4d29.0576298!16zL20vMDV5cWY4?entry=ttu"><span class="material-symbols-outlined">arrow_forward</span></router-link>
      </div>
    </div>
    <div class="block absolute right-6 bottom-6 bg-white h-fit rounded-2xl p-8 text-justify w-1/4 mt-24">
      <h2 class="text-2xl">Дополнительная иформация</h2>
      <span class="material-icons icon p-6 my-4">church</span>
      <p>Среди известных достопримечательностей района — Дворец Долмабахче, Церковь Святой Троицы, а также башня Галата, с которой
        открывается потрясающий вид на город и Босфор. Медицинский туризм в Стамбуле позволит вам совместить лечение с осмотром
        культурных и исторических памятников. Наши менеджеры помогут вам подобрать подходящий маршрут.</p>
    </div>
  </div>
</template>

<style>
.map {
  background-image: url("../../assets/img/map.png");
  width: 100%;
  height: 90vh;
  margin: auto 0;
  background-size: cover;

  .block {
    box-shadow: 0px 0px 20px -13px rgba(66, 68, 90, 1);
  }

  .icon {
    border: 1px solid #AD9173;
    color: #AD9173;
    border-radius: 60px;
  }

  .icons {
    font-size: 30px;
    border: 1px solid #ffffff;
    border-radius: 60px;

  }

}
</style>
<script setup>
import MainButton from "@/components/MainButton.vue";
</script>