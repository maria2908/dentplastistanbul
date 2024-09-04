<script setup>
</script>
<template>
  <div>
    <h1 class="mt-12 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">{{ $t('breast-enlargement.visit.title')}}
    </h1>
    <div class="timeline relative mx-auto w-full md:w-4/5 lg:w-3/4 flex flex-col">
      <div class="timeline-item flex justify-between items-center mb-12 md:h-48">
        <div class="timeline-content  md:pr-8 w-full md:w-1/2">
          <p class="pr-6 text-justify">{{ $t('breast-enlargement.visit.step-1')}}</p>
        </div>
        <div class="timeline-dot"></div>
        <div class="timeline-image flex justify-around items-center w-full md:w-1/2 md:pl-8 pl-8">
          <img class="w-1/6" src="../../assets/svg/clinical_notes.svg" />
        </div>
      </div>

      <div class="timeline-item flex justify-between items-center mb-12 md:h-48">
        <div class="timeline-image flex justify-center w-full md:w-1/2 md:pr-8">
          <img class="w-1/6" src="../../assets/svg/surgical.svg" />
        </div>
        <div class="timeline-dot"></div>
        <div class="timeline-content w-full md:w-1/2 md:pl-8">
          <p class="pl-6 text-justify">{{ $t('breast-enlargement.visit.step-2')}}
          </p>
        </div>
      </div>

      <div class="timeline-item flex justify-between items-center mb-12 md:h-48">
        <div class="timeline-content md:pr-8 w-full md:w-1/2">
          <p class="pr-6 text-justify">{{ $t('breast-enlargement.visit.step-3')}}</p>
        </div>
        <div class="timeline-dot"></div>
        <div class="timeline-image flex justify-center w-full md:w-1/2 md:pl-8">
          <img class="w-1/6" src="../../assets/svg/ecg_heart.svg" />
        </div>
      </div>

      <div class="timeline-item flex justify-between items-center mb-12 md:h-48">
        <div class="timeline-image flex justify-center w-full md:w-1/2 md:pr-8">
          <img class="w-1/6" src="../../assets/svg/edit_note.svg" />
        </div>
        <div class="timeline-dot"></div>
        <div class="timeline-content w-full md:w-1/2 md:pl-8">
          <p class="pl-6 text-justify">{{ $t('breast-enlargement.visit.step-4')}}</p>
        </div>
      </div>
      <!-- Repeat for more items -->
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