<template>
  <!-- Main Heading -->
  <h1 class="mt-12 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
    {{ $t('plastic.services.title')}}
  </h1>

  <!-- Main Content Area -->
  <div class="flex flex-col lg:flex-row text-justify">
    <!-- Accordion Section -->
    <div class="w-full lg:w-1/2 p-4 sm:p-6 md:p-8">
      <p class="underline text-lg sm:text-xl text-center my-4 mb-8">
        {{ $t('plastic.services.sub-title')}}
      </p>
      <Accordion value="0">
        <AccordionPanel value="0">
          <AccordionHeader>{{ $t('plastic.services.accordion.title-1')}}</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              {{ $t('plastic.services.accordion.text-1')}}
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>{{ $t('plastic.services.accordion.title-2')}}</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              {{ $t('plastic.services.accordion.text-2')}}
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>{{ $t('plastic.services.accordion.title-3')}} </AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              {{ $t('plastic.services.accordion.text-3')}}
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="3">
          <AccordionHeader>{{ $t('plastic.services.accordion.title-4')}} </AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              {{ $t('plastic.services.accordion.text-4')}}
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="4">
          <AccordionHeader>{{ $t('plastic.services.accordion.title-5')}}</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              {{ $t('plastic.services.accordion.text-5')}}
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>

    <!-- Description Section -->
    <div
        class="w-full lg:w-1/2 p-6 sm:p-8 md:p-12 flex bg-customDark text-white flex-col items-center justify-center space-y-4 rounded-2xl mt-8 lg:mt-0 lg:ml-8">
      {{ $t('plastic.services.text')}}

    </div>
  </div>
</template>

<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
</script>
