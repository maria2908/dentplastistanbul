<template>
  <!-- Main Heading -->
  <h1 class="mt-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
    Почему следует обратиться в центр Dentplastistanbul
  </h1>

  <!-- Introductory Paragraph -->
  <p class="mx-auto text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 py-6 ">
    Заполните заявку на сайте, чтобы получить подробную информацию о наших услугах и спланировать визит!
  </p>

  <!-- Benefits Paragraph -->
  <p class="p-6 mt-6 text-xl text-white bg-customBeg mx-auto text-center w-full sm:w-3/4 md:w-2/3 lg:w-fit rounded-2xl">
    Доверьтесь Dentplastistanbul — и вы получите главные преимущества:
  </p>

  <!-- Benefits List -->
  <div class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 pt-10 mx-auto">
    <ol class="gradient-list">
      <li>Доступные цены. Стоимость увеличения груди в Стамбуле в два раза ниже, чем в странах Европы и США.</li>
      <li>Широкий спектр услуг. Мы сотрудничаем со специалистами в сфере пластической хирургии и стоматологии. Скажите, что вам надо, и мы подберем лучшего врача для увеличение груди в Стамбуле или другой косметологической/стоматологической процедуры.</li>
      <li>Гарантированное качество. Мы работаем только с проверенными клиниками и высококвалифицированными врачами, что подтверждают благодарные отзывы клиенток.</li>
      <li>Возможность объединить операции в рамках визита в Турцию. Чтобы сэкономить время и деньги, вы можете сделать сразу две операции, например, увеличение груди в Стамбуле и ринопластику (изменение формы носа) или липосакцию (иссекание жировых отложений).</li>
      <li>Комфортный отдых. Хотите осмотреть достопримечательности турецкой столицы? Мы позаботимся о культурной программе и поможем организовать ваш досуг.</li>
    </ol>
  </div>
</template>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Raleway:400,400i,700,700i);

/* Colors */
$black: #1d1f20;
$blue: #adb1b3;
$green: #BDB2A3;
$yellow: #AD9173;
$white: #fafafa;

%boxshadow {
  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(75,0,0,0.05);
}

ol.gradient-list {
  counter-reset: gradient-counter;
  list-style: none;
  margin: 1.75rem 0;
  padding-left: 1rem;

  > li {
    background: white;
    border-radius: 0 0.5rem 0.5rem 0.5rem;
    @extend %boxshadow;
    counter-increment: gradient-counter;
    margin-top: 1rem;
    min-height: 3rem;
    padding: 1rem 1rem 1rem 3rem;
    position: relative;

    &::before,
    &::after {
      background: linear-gradient(135deg, $blue 0%, $green 100%);
      border-radius: 1rem 1rem 0 1rem;
      content: '';
      height: 3rem;
      left: -1rem;
      overflow: hidden;
      position: absolute;
      top: -1rem;
      width: 3rem;
    }

    &::before {
      align-items: flex-end;
      @extend %boxshadow;
      content: counter(gradient-counter);
      color: $black;
      display: flex;
      font: 900 1.5em/1 'Montserrat';
      justify-content: flex-end;
      padding: 0.125em 0.25em;
      z-index: 1;
    }

    @for $i from 1 through 5 {
      &:nth-child(10n + #{$i}):before {
        background: linear-gradient(135deg, rgba($green, $i * 0.2) 0%, rgba($yellow, $i * 0.2) 100%);
      }
    }

    @for $i from 6 through 10 {
      &:nth-child(10n + #{$i}):before {
        background: linear-gradient(135deg, rgba($green, 1 - (($i - 5) * 0.2)) 0%, rgba($yellow, 1 - (($i - 5) * 0.2)) 100%);
      }
    }

    + li {
      margin-top: 2rem;
    }
  }
}
</style>

<script setup>
</script>
