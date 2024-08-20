<template>
  <div class="w-full block mt-12">
    <!-- Main Section -->
    <div class="bg-white rounded-2xl p-8 mb-12">
      <h2 class="mb-8 text-xl lg:text-3xl"><b>Медицинский туризм в Стамбуле</b> — один из самых перспективных в мире. Благодаря высокому уровню турецкой медицины и доступной стоимости услуг количество клиентов неуклонно растет, Турцию посетило пациентов:
      </h2>
      <!-- Statistic List -->
      <ul class="deco-list flex flex-col md:flex-row justify-around mt-6">
        <li class="text-center">
          <p>2021 г.</p>
          <h3>671 <span>тыс</span></h3>
        </li>
        <li class="text-center mt-6 md:mt-0">
          <p>2022 г.</p>
          <h3>1,3 <span>млн</span></h3>
        </li>
        <li class="text-center mt-6 md:mt-0">
          <p>2023 г.</p>
          <h3>1,8 <span>млн</span></h3>
        </li>
      </ul>
    </div>

    <!-- Information Section -->
    <div class="flex flex-col md:flex-row bg-white rounded-2xl p-8">
      <li class="w-full md:w-1/2 mb-6 md:mb-0">
        Эксперты прогнозируют, что до 2034 года медтуризм в Стамбуле будет активно развиваться, а количество иностранных пациентов — ежегодно увеличиваться на 5,9–6,5 %. И неудивительно. Если сравнивать со стоимостью услуг в странах ЕС и США, такие процедуры, как установка зубных имплантов, увеличение груди, абдоминопластика, ринопластика в Турции позволяют сэкономить до 50-60 %.
      </li>
      <li class="w-full md:w-1/2 md:ml-12">
        Главное, планируя лечение в Турции, — выбрать клинику, где работает опытный персонал, а качество услуг на высоте. И в этом поможет центр Dentplastistanbul, который предлагает услуги медтуризма в Стамбуле, сотрудничает с лучшими клиниками и врачами страны.
      </li>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.deco-list {
  list-style-type: none;
  padding: 0;

  li {
    position: relative;
    padding: 20px;

    &::before {
      position: absolute;
      z-index: 0;
      content: '';
      margin-left: -20px;
      margin-top: -10px;
      display: inline-block;
      width: 120px;
      height: 80px;
      background-color: #D067A9;
      opacity: 0.3;
      border-radius: 67% 33% 72% 28% / 36% 18% 82% 64%;
      margin-right: 10px;
      vertical-align: middle;
    }

    h3, p {
      position: relative;
      z-index: 1;
    }

    p {
      font-weight: bold;
    }

    h3 {
      font-family: "Nanum Myeongjo", serif;
      font-weight: bold;
      font-size: 40px; /* Smaller size for mobile */
      @media (min-width: 768px) {
        font-size: 60px; /* Larger size for desktop */
      }

      span {
        font-weight: normal;
        font-size: 20px; /* Adjusted for mobile */
        @media (min-width: 768px) {
          font-size: 30px; /* Adjusted for desktop */
        }
      }
    }
  }
}
</style>
