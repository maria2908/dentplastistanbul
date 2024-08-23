<template>
  <!-- Main Heading -->
  <h1 class="mt-12 text-center">
    Почему за лечением зубов в Стамбуле стоит обратиться в Dentplastistanbul
  </h1>

  <!-- Introductory Paragraph -->
  <p class="mx-auto text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 py-6 ">
    Доверьтесь Dentplastistanbul — и получите идеальную улыбку без лишних затрат! Запишитесь на консультацию, заполнив форму на сайте нашего центра, и запланируйте визит в клинику стоматологии в Стамбуле в удобное вам время!
  </p>

  <!-- Benefits Paragraph -->
  <p class="p-6 mt-6 text-xl text-white bg-customBeg mx-auto text-center w-full sm:w-3/4 md:w-2/3 lg:w-fit rounded-2xl">
    От сотрудничества с нами вы получите такие преимущества:
  </p>

  <!-- Benefits List -->
  <div class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 pt-10 mx-auto">
    <ol class="gradient-list">
      <li>Доступные цены. Благодаря клиникам стоматологии в Стамбуле, которые мы рекомендуем, вы хорошо сэкономите на лечении.</li>
      <li>Высокое качество услуг. Наши стоматологи — специалисты с многолетним стажем, и для лечения зубов в Стамбуле они используют современные оборудование и материалы.</li>
      <li>Возможность комбинированных операций. В рамках одного визита вы можете не только сделать зубы, но и заказать одну из услуг пластической хирургии: липосакцию, увеличение груди, исправление формы носа или другую. Это позволит сэкономить время и деньги, которые пришлось бы потратить на повторный приезд.</li>
      <li>Русскоязычная поддержка. Не беспокойтесь о языковых барьерах! Наши сотрудники отлично говорят по-русски, поэтому вам будет удобно на всех процедурах, что подтверждают многочисленные отзывы.</li>
      <li>Комфортное проживание. Поможем выбрать отель и забронировать номер, максимально отвечающий вашим требованиям.</li>
      <li>Удобное месторасположение. Наша клиника стоматологии в Стамбуле находится в Таксиме — одном из самых оживленных районов города. Он славится достопримечательностями, магазинами, где можно купить интересные сувениры. На площади есть станция метро, поэтому сюда легко добраться из любой точки города.</li>
      <li>Совмещение лечения зубов в Стамбуле с отдыхом. Стоматологические процедуры обычно занимают несколько дней, а свободное время вы можете посвятить осмотру местных достопримечательностей, купанию в море. Мы поможем организовать культурную программу.</li>
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
