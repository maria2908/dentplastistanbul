<template>
  <!-- Main Heading -->
  <h1 class="mt-12 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
    {{ $t('breast-enlargement.procedure.title')}}
  </h1>

  <!-- Main Content Area -->
  <div class="flex flex-col lg:flex-row text-justify">
    <div
        class="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 flex bg-customDark text-white flex-col items-center justify-center space-y-4 rounded-2xl lg:ml-8">
      <p>
        {{ $t('breast-enlargement.procedure.text')}}
      </p>
    </div>
    <!-- Accordion Section -->
    <div class="w-full lg:w-1/2 p-4 sm:p-6 md:p-8">
      <Accordion value="0">
        <AccordionPanel value="0">
          <AccordionHeader>{{ $t('breast-enlargement.procedure.accordion.title-1')}}</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              {{ $t('breast-enlargement.procedure.accordion.text-1')}}
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>{{ $t('breast-enlargement.procedure.accordion.title-2')}}</AccordionHeader>
          <AccordionContent>
            <p class="m-0">{{ $t('breast-enlargement.procedure.accordion.text-2')}}</p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>{{ $t('breast-enlargement.procedure.accordion.title-3')}}</AccordionHeader>
          <AccordionContent>
            <p class="m-0">{{ $t('breast-enlargement.procedure.accordion.text-3')}}</p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>

  </div>
</template>

<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
</script>
