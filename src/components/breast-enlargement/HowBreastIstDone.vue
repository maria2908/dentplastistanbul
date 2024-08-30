<template>
  <!-- Main Heading -->
  <h1 class="mt-12 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
    Как делают увеличение груди в Стамбуле
  </h1>

  <!-- Main Content Area -->
  <div class="flex flex-col lg:flex-row mt-4 text-justify">
    <div
        class="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 flex bg-customDark text-white flex-col items-center justify-center space-y-4 rounded-2xl mt-8 lg:mt-0 lg:ml-8">
      <p>
        Маммопластика — это косметологическая процедура, которая позволяет увеличить размер груди, придать ей красивую форму с помощью имплантов. Клиники — наши партнеры — используют импланты известных брендов, обладающие высокой биосовместимостью и изготовленные в соответствии со стандартами ISO:
      </p>
    </div>
    <!-- Accordion Section -->
    <div class="w-full lg:w-1/2 p-4 sm:p-6 md:p-8">
      <Accordion value="0">
        <AccordionPanel value="0">
          <AccordionHeader>Mentor (США) </AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Круглые либо каплевидные изделия содержат гель, благодаря которому грудь остается мягкой и упругой. Импланты прошли всесторонние тестирования, подтверждающие их безопасность и эффективность, имеют маркировку CE (отвечают стандартам качества ЕС).
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>Polytech</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
               Импланты немецкой компании, известной качеством продукции, научными и производственными инновациями. Оболочка протезов сделана из нескольких слоев силиконового эластомера, стойкого к химическим и механическим повреждениям. Наполнитель — когезивный гель, молекулы которого тесно связаны друг с другом, образуя прочную трехмерную сеть. Это значит, что гель не вытекает из изделия даже при разрыве оболочки.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>Motiva Implants</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Импланты, качество которых отвечает стандартам ЕС и США. Есть круглые, каплевидные модели, а также эргономичные варианты, идеально имитирующие движение груди. Каждый имплант покрыт суперэластичной оболочкой TrueMonobloc, которая обладает высокой устойчивостью к разрывам. Специальный барьер в среднем слое изделия предотвращает просачивание геля-наполнителя в организм и предупреждает заражение.
            </p>
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
