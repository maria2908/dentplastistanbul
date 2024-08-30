<template>
  <!-- Main Heading -->
  <h1 class="mt-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
    Какие услуги предлагает стоматология в Стамбуле
  </h1>

  <!-- Main Content Area -->
  <div class="flex flex-col lg:flex-row mt-4 text-justify">
    <!-- Accordion Section -->
    <div class="w-full lg:w-1/2 p-4 sm:p-6 md:p-8">
      <p class="underline text-lg sm:text-xl text-center my-4 mb-8">
        Мы сотрудничаем со стоматологическими клиниками, предоставляющими
        широкий спектр услуг. В числе самых востребованных:
      </p>
      <Accordion value="0">
        <AccordionPanel value="0">
          <AccordionHeader>Дентальная имплантация</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Возможность восстановить утраченные зубы, не повреждая соседние стачиванием. В челюстную кость внедряется титановый
              имплант, на который после приживления устанавливается циркониевая коронка. Этим методом можно сделать как зуб, так и
              всю челюсть. Стоматологи используют в работе импланты известных немецких и корейских производителей (Medentika,
              Osstem, Dentium, MegaGen), не вызывающие аллергии и отторжения. На все импланты дается гарантия на 5-10 лет (зависит
              от бренда).
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>Установка циркониевых коронок</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Установка циркониевых коронок, которые полностью имитируют натуральный цвет и прозрачность эмали. Коронки
              гипоаллергенные, долговечные и очень прочные. Устанавливаются на импланты или настоящий зуб, когда пломбирование
              неэффективно.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>Создание «голливудской улыбки»</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Прочные виниры из тончайшей керамики высокого качества прикрепляются к зубам, придавая им красивую форму, скрывая
              недостатки (кривизну, щели).
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="3">
          <AccordionHeader>Профессиональная чистка зубов</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              С помощью современного оборудования стоматолог полностью удаляет камни и бактериальный налет. Затем полирует эмаль,
              чтобы убрать неровности и трещинки, за которые могла бы зацепиться пища и окрасить эмаль, способствовать развитию
              микробов. На завершающем этапе проводится фторирование, укрепляющее эмаль и снижающее чувствительность зубов.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>

    <!-- Description Section -->
    <div
        class="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 flex bg-customDark text-white flex-col items-center justify-center space-y-4 rounded-2xl mt-8 lg:mt-0 lg:ml-8">
      <p>
        Стоматологическая операция проходит в несколько этапов, а потому занимает 5-7 дней. После имплантации ортодонт следит за
        тем, чтобы приживление титанового стержня прошло успешно. Затем ставит коронки, изготовленные по индивидуальным замерам
        (их делают на первой консультации).
      </p>
      <p class="pt-6">
        После установки коронок/виниров клиент оценивает, насколько они комфортны. Если есть хоть небольшое неудобство, ортодонт
        проводит коррекцию. На завершающем этапе стоматолог посоветует, как правильно ухаживать за искусственными коронками, чтобы
        они прослужили максимально долго.
      </p>
    </div>
  </div>
</template>

<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
</script>
