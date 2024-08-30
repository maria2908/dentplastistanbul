<template>
  <!-- Main Heading -->
  <h1 class="mt-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
    Как выбрать надежную клинику для липосакции в Стамбуле
  </h1>

  <!-- Main Content Area -->
  <div class="flex flex-col lg:flex-row mt-4 text-justify">
    <!-- Accordion Section -->
    <div class="w-full lg:w-1/2 p-4 sm:p-6 md:p-8">
      <Accordion value="0">
        <AccordionPanel value="0">
          <AccordionHeader>Лицензия</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Клиники имеют лицензию Министерства здравоохранения Турции. Документ подтверждает, что учреждение соответствует национальным стандартам качества и безопасности медицинских услуг.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>Современное оборудование</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              В клиниках установлено современное оборудование, которое позволяет проводить лечение мирового уровня.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>Сертификаты</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Хирурги имеют сертификаты Турецкой медицинской ассоциации, что подтверждает их квалификацию и право на практику в стране. Врачи являются членами Турецкой ассоциации пластической, реконструктивной и эстетической хирургии и/или Международной ассоциации эстетической пластической хирургии.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="3">
          <AccordionHeader>Курсы</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Специалисты-хирурги регулярно проходят курсы повышения квалификации, участвуют в профильных семинарах, научных и научно-практических конференциях.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>

    <!-- Description Section -->
    <div
        class="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 flex bg-customDark text-white flex-col items-center justify-center space-y-4 rounded-2xl mt-8 lg:mt-0 lg:ml-8">
      <p>
        Липосакция — сложная операция, которая при неумелом подходе способна спровоцировать серьезные побочные эффекты. Мы понимаем всю ответственность, поэтому работаем только с лучшими медицинскими центрами и врачами.
      </p>
      <p class="pt-12">
        Заботясь о клиентах, мы выбираем для липосакции в Стамбуле клиники, где на первом месте качество и профессионализм.
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
