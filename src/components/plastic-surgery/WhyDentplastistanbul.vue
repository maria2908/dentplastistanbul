<template>
  <!-- Main Heading -->
  <h1 class="mt-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
    Почему стоит обратиться в Dentplastistanbul
  </h1>

  <!-- Introductory Paragraph -->
  <p class="mx-auto text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 py-6 ">
    Ваши здоровье и красота — смысл нашей работы. Свяжитесь с нами, чтобы согласовать подробности и запланировать визит.
  </p>

  <!-- Benefits Paragraph -->
  <p class="p-6 mt-6 text-xl text-white bg-customBeg mx-auto text-center w-full sm:w-3/4 md:w-2/3 lg:w-fit rounded-2xl">
    Список преимуществ, которые мы гарантируем своим клиентам:
  </p>

  <!-- Benefits List -->
  <div class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 pt-10 mx-auto">
    <ol class="gradient-list">
      <li>Услуги высококвалифицированных хирургов, чей опыт подтверждают турецкие и международные дипломы, отзывы экспертов.</li>
      <li>Использование самых современных методов и оборудования, благодаря чему пластическая клиника в Стамбуле обеспечивает пациентам максимальные безопасность и комфорт.</li>
      <li>Оптимальное сочетание «цена – качество». По сравнению с расценками медицины в странах ЕС и США стоимость пластической хирургии в Стамбуле в два раза ниже. При этом наши врачи предоставляют услуги, качество которых не уступает результатам операций в лучших европейских клиниках.</li>
      <li>Соответствие всех процедур требованиям и нормам, установленным Министерством здравоохранения Турции. Качество лечения контролируется Турецкой медицинской ассоциацией.
      </li>
      <li>Индивидуальный подход и комфорт. Наши менеджеры и врачи пластической клиники в Стамбуле, с которыми мы сотрудничаем, внимательно выслушают ваши пожелания и предложат оптимальные решения.
      </li>
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
