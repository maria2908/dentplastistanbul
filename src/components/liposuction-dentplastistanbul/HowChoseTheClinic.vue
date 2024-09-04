<template>
  <h1 class="mt-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
    {{ $t('liposuction.chose-clinic.title') }}
  </h1>

  <div class="flex flex-col lg:flex-row text-justify">
    <div class="w-full lg:w-1/2 p-4 sm:p-6 md:p-8">
      <Accordion value="0">
        <AccordionPanel value="0">
          <AccordionHeader>{{ $t('liposuction.chose-clinic.accordion.title-1') }}</AccordionHeader>
          <AccordionContent>
            <p class="m-0">{{ $t('liposuction.chose-clinic.accordion.text-1') }}</p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>{{ $t('liposuction.chose-clinic.accordion.title-2') }}</AccordionHeader>
          <AccordionContent>
            <p class="m-0">{{ $t('liposuction.chose-clinic.accordion.text-2') }}</p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>{{ $t('liposuction.chose-clinic.accordion.title-3') }}</AccordionHeader>
          <AccordionContent>
            <p class="m-0">{{ $t('liposuction.chose-clinic.accordion.text-3') }}</p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="3">
          <AccordionHeader>{{ $t('liposuction.chose-clinic.accordion.title-4') }}</AccordionHeader>
          <AccordionContent>
            <p class="m-0">{{ $t('liposuction.chose-clinic.accordion.text-4') }}</p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>

    <div
        class="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 flex bg-customDark text-white flex-col items-center justify-center space-y-4 rounded-2xl mt-8 lg:mt-0 lg:ml-8"
    >
      <p>{{ $t('liposuction.chose-clinic.text-1') }}</p>
      <p class="pt-12">{{ $t('liposuction.chose-clinic.text-2') }}</p>
    </div>
  </div>
</template>

<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
</script>
