<template>
  <!-- Main Heading -->
  <h1 class="mt-12 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
    Какие услуги предоставляет центр Dentplastistanbul
  </h1>

  <!-- Main Content Area -->
  <div class="flex flex-col lg:flex-row mt-4 text-justify">
    <!-- Accordion Section -->
    <div class="w-full lg:w-1/2 p-4 sm:p-6 md:p-8">
      <p class="underline text-lg sm:text-xl text-center my-4 mb-8">
        Мы сотрудничаем с клиниками пластической хирургии в Стамбуле, предоставляющими такие услуги:
      </p>
      <Accordion value="0">
        <AccordionPanel value="0">
          <AccordionHeader>Увеличение груди</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
               Применяются импланты немецкого производителя Polytech / американского Mentor, обеспечивающие отличную биосовместимость и долговечность. Квалифицированные пластические хирурги в Стамбуле подбирают форму груди, которая выглядит максимально естественно и пропорционально.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>Подтяжка лица</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Направлена на коррекцию возрастных изменений и омоложение. Врачи избавляют от мелких морщин на лбу и вокруг глаз, складок в зоне носогубного треугольника, делают выразительнее скулы. Корректируют овал лица, шеи, убирают второй подбородок.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>Ринопластика </AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Восстановление или изменение формы носа. Операция может предусматривать уменьшение или увеличение его размера, устранение горбинки, коррекцию кончика. Планируя ринопластику, пластический хирург в Стамбуле обязательно учитывает особенности лица пациента.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="3">
          <AccordionHeader>Липосакция </AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Удаление жировых отложений на определенных участках тела (на животе, бедрах, ягодицах, предплечьях и пр.)
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="4">
          <AccordionHeader>Абдоминопластика</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Врачи восстанавливают эстетические пропорции живота, иссекая лишнюю кожу и жировые отложения. Это сложная операция, которая требует от врача большого опыта и знаний. У пластических хирургов в Стамбуле, с которыми мы сотрудничаем, такой опыт есть.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>

    <!-- Description Section -->
    <div
        class="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 flex bg-customDark text-white flex-col items-center justify-center space-y-4 rounded-2xl mt-8 lg:mt-0 lg:ml-8">
      <p>
        Мы предлагаем комплексные услуги пластической хирургии в Стамбуле, то есть возможность провести за один приезд сразу две операции на теле. Это сэкономит не только ваши деньги, но и время, потраченное на приезд, проведение анализов, реабилитацию.
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
