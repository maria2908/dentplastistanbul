<script setup>
</script>
<template>
  <div class="mt-12">
    <h1 class="my-12 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">Как проходит пластическая процедура в Стамбуле Dentplastistanbul</h1>
    <div class="timeline relative mx-auto w-full md:w-4/5 lg:w-3/4 flex flex-col">
      <div class="timeline-item flex justify-between items-center mb-12 md:h-48">
        <div class="timeline-content  md:pr-8 w-full md:w-1/2">
          <p class="pr-6">На первой консультации перед операцией доктор подберет форму импланта, который сделает вашу грудь безупречной. Уточнит вид анестезии, наличие аллергии, оценит общее состояние здоровья. Возможно, понадобится сдать некоторые анализы, если вы не сделали их до приезда в Турцию.</p>
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
          <p class="pl-6">Операция проходит под общей анестезией. Импланты устанавливаются под большую грудную мышцу, чтобы придать груди красивую и естественную форму. Хирург делает 2 надреза с правой и левой стороны груди, через которые помещает импланты.
          </p>
        </div>
      </div>

      <div class="timeline-item flex justify-between items-center mb-12 md:h-48">
        <div class="timeline-content md:pr-8 w-full md:w-1/2">
          <p class="pr-6">Затем разрезы зашиваются многослойными швами. Через некоторое время они затянутся, а нити рассосутся.</p>
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
          <p class="pl-6">По времени операция занимает 1-2 часа. Еще 5-6 дней вы будете находиться под наблюдением врача. Чтобы восстановление прошло как можно быстрее, важно полностью выполнять его указания.</p>
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