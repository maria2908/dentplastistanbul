<template>
  <!-- Main Heading -->
  <h1 class="mt-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
    Какие услуги предлагает стоматология в Стамбуле
  </h1>

  <!-- Main Content Area -->
  <div class="flex flex-col lg:flex-row mt-4 text-justify">
    <!-- Accordion Section -->
    <fwb-accordion class="w-full lg:w-1/2 p-4 sm:p-6 md:p-8" flush>
      <p class="px-2 pb-4 sm:pb-8 font-bold text-center mx-auto underline text-base sm:text-lg md:text-xl">
        Мы сотрудничаем со стоматологическими клиниками, предоставляющими широкий спектр услуг. В числе самых востребованных:
      </p>

      <fwb-accordion-panel>
        <fwb-accordion-header>Дентальная имплантация</fwb-accordion-header>
        <fwb-accordion-content>
          <div>
            <p class="mb-2">
              Дентальная имплантация — возможность восстановить утраченные зубы, не повреждая соседние стачиванием. В челюстную
              кость внедряется титановый имплант, на который после приживления устанавливается циркониевая коронка. Этим методом
              можно сделать как зуб, так и всю челюсть. Стоматологи используют в работе импланты известных немецких и корейских
              производителей (Medentika, Osstem, Dentium, MegaGen), не вызывающие аллергии и отторжения. На все импланты дается
              гарантия на 5-10 лет (зависит от бренда).
            </p>
          </div>
        </fwb-accordion-content>
      </fwb-accordion-panel>

      <fwb-accordion-panel>
        <fwb-accordion-header>Установка циркониевых коронок</fwb-accordion-header>
        <fwb-accordion-content>
          <div>
            <p class="mb-2">
              Установка циркониевых коронок, которые полностью имитируют натуральный цвет и прозрачность эмали. Коронки
              гипоаллергенные, долговечные и очень прочные. Устанавливаются на импланты или настоящий зуб, когда пломбирование
              неэффективно.
            </p>
          </div>
        </fwb-accordion-content>
      </fwb-accordion-panel>

      <fwb-accordion-panel>
        <fwb-accordion-header>Создание «голливудской улыбки»</fwb-accordion-header>
        <fwb-accordion-content>
          <div>
            <p class="mb-2">
              Прочные виниры из тончайшей керамики высокого качества прикрепляются к зубам, придавая им красивую форму, скрывая
              недостатки (кривизну, щели).
            </p>
          </div>
        </fwb-accordion-content>
      </fwb-accordion-panel>

      <fwb-accordion-panel>
        <fwb-accordion-header>Профессиональная чистка зубов</fwb-accordion-header>
        <fwb-accordion-content>
          <div>
            <p class="mb-2">
              С помощью современного оборудования стоматолог полностью удаляет камни и бактериальный налет. Затем полирует эмаль,
              чтобы убрать неровности и трещинки, за которые могла бы зацепиться пища и окрасить эмаль, способствовать развитию
              микробов. На завершающем этапе проводится фторирование, укрепляющее эмаль и снижающее чувствительность зубов.
            </p>
          </div>
        </fwb-accordion-content>
      </fwb-accordion-panel>
    </fwb-accordion>

    <!-- Description Section -->
    <div class="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center space-y-4 border-2 border-customDark rounded-2xl mt-8 lg:mt-0 lg:ml-8 ">
      <p>
        Стоматологическая операция проходит в несколько этапов, а потому занимает 5-7 дней. После имплантации ортодонт следит за тем, чтобы приживление титанового стержня прошло успешно. Затем ставит коронки, изготовленные по индивидуальным замерам (их делают на первой консультации).
      </p>
      <p class="pt-6">
        После установки коронок/виниров клиент оценивает, насколько они комфортны. Если есть хоть небольшое неудобство, ортодонт проводит коррекцию. На завершающем этапе стоматолог посоветует, как правильно ухаживать за искусственными коронками, чтобы они прослужили максимально долго.
      </p>
    </div>
  </div>
</template>

<script setup>
import {
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
} from 'flowbite-vue'
</script>
