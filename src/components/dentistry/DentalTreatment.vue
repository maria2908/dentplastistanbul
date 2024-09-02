<template>
  <!-- Main Heading -->
  <h1 class="mt-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
    {{ $t('dentistry.treatment.title')}}
  </h1>

  <!-- Introductory Paragraph -->
  <p class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto text-base text-center mt-4">
    {{ $t('dentistry.treatment.text')}}
  </p>

  <!-- Flex Container for Text Blocks -->
  <div class="flex flex-col lg:flex-row my-12 space-y-6 lg:space-y-0 lg:space-x-8">
    <p class="w-full lg:w-1/3 p-6 flex items-center sm:p-8 md:p-12 lg:p-12 py-8 sm:py-10 md:py-16 lg:py-16 text-center border border-customDarkBeg bg-opacity-60 rounded-2xl">
      {{ $t('dentistry.treatment.block-1')}}
    </p>
    <p class="w-full lg:w-1/3 p-6 flex items-center sm:p-8 md:p-12 lg:p-12 py-8 sm:py-10 md:py-16 lg:py-16 text-center bg-customDarkBeg bg-opacity-60 rounded-2xl">
      {{ $t('dentistry.treatment.block-2')}}

    </p>
    <p class="w-full lg:w-1/3 p-6 flex items-center sm:p-8 md:p-12 lg:p-12 py-8 sm:py-10 md:py-16 lg:py-16 text-center border border-customDarkBeg bg-opacity-60 rounded-2xl">
      {{ $t('dentistry.treatment.block-3')}}

    </p>
  </div>
</template>

<script setup>
</script>
