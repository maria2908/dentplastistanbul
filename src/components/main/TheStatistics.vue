<template>
  <div class="w-full block mt-12">
    <!-- Main Section -->
    <div class="bg-white rounded-2xl p-8 mb-12">
      <h2 class="mb-8 sm:lg text-xl lg:text-3xl">{{$t('main-page.statistic.title')}}</h2>
      <!-- Statistic List -->
      <ul class="deco-list flex flex-col md:flex-row justify-around mt-6">
        <li class="text-center">
          <p>{{$t('main-page.statistic.year-1')}}</p>
          <h3>{{$t('main-page.statistic.number-1')}} <span>{{$t('main-page.statistic.thousand')}}</span></h3>
        </li>
        <li class="text-center mt-6 md:mt-0">
          <p>{{$t('main-page.statistic.year-2')}}</p>
          <h3>{{$t('main-page.statistic.number-2')}} <span>{{$t('main-page.statistic.million')}}</span></h3>
        </li>
        <li class="text-center mt-6 md:mt-0">
          <p>{{$t('main-page.statistic.year-3')}}</p>
          <h3>{{$t('main-page.statistic.number-3')}}  <span>{{$t('main-page.statistic.million')}}</span></h3>
        </li>
      </ul>
    </div>

    <!-- Information Section -->
    <div class="flex flex-col md:flex-row bg-white rounded-2xl p-8">
      <li class="w-full md:w-1/2 mb-6 md:mb-0">{{$t('main-page.statistic.text-1')}}</li>
      <li class="w-full md:w-1/2 md:ml-12">{{$t('main-page.statistic.text-2')}}</li>
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
