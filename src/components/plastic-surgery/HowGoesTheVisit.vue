<script setup>
</script>
<template>
  <div class="mt-12">
    <h1 class="my-12 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">{{ $t('plastic.the-way.title')}}</h1>
    <div class="timeline relative mx-auto w-full md:w-4/5 lg:w-3/4 flex flex-col">
      <div class="timeline-item flex justify-between items-center mb-12 md:h-48">
        <div class="timeline-content text-justify md:pr-8 w-full md:w-1/2">
          <p class="pr-6">{{ $t('plastic.the-way.text-1')}}</p>
        </div>
        <div class="timeline-dot"></div>
        <div class="timeline-image flex justify-around items-center w-full md:w-1/2 md:pl-8 pl-8">
          <img class="w-1/6" src="../../assets/svg/bus.svg" />
          <span class="material-symbols-outlined">east</span>
          <img class="w-1/6" src="../../assets/svg/bed.svg" />
        </div>
      </div>

      <div class="timeline-item flex justify-between items-center mb-12 md:h-48">
        <div class="timeline-image flex justify-center w-full md:w-1/2 md:pr-8">
          <img class="w-1/6" src="../../assets/svg/clinical_notes.svg" />
        </div>
        <div class="timeline-dot"></div>
        <div class="timeline-content w-full md:w-1/2 md:pl-8">
          <p class="pl-6 text-justify">{{ $t('plastic.the-way.text-2')}}</p>
        </div>
      </div>

      <div class="timeline-item flex justify-between items-center mb-12 md:h-48">
        <div class="timeline-content md:pr-8 w-full md:w-1/2">
          <p class="pr-6 text-justify">{{ $t('plastic.the-way.text-3')}}</p>
        </div>
        <div class="timeline-dot"></div>
        <div class="timeline-image flex justify-center w-full md:w-1/2 md:pl-8">
          <img class="w-1/6" src="../../assets/svg/edit_note.svg" />
        </div>
      </div>

      <div class="timeline-item flex justify-between items-center mb-12 md:h-48">
        <div class="timeline-image flex justify-center w-full md:w-1/2 md:pr-8">
          <img class="w-1/6" src="../../assets/svg/communication.svg" />
        </div>
        <div class="timeline-dot"></div>
        <div class="timeline-content w-full md:w-1/2 md:pl-8">
          <p class="pl-6 text-justify">{{ $t('plastic.the-way.text-4')}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background-color: #D067A9;
  z-index: 1;
}
.timeline-item {


  .timeline-dot {
    position: absolute;
    left: calc(50% - 10px);
    width: 20px;
    height: 20px;
    background-color: #D067A9; // Dot color
    border-radius: 50%;
    z-index: 2;
    transform: translateY(-50%);
  }

}

</style>