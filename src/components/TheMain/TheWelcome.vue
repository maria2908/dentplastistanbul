<script setup>

</script>

<template>
  <div class="flex bg-customWhite">
    <div style="height: 92vh" class="w-2/3 m-8">
        <div class="absolute bg-customWhite p-7  logo">Logo</div>
        <img class="w-full h-full object-cover rounded-2xl" src="https://media.istockphoto.com/id/464869926/de/foto/jubeln-frau-offenen-armen-zu-sonnenaufgang-am-strand.jpg?s=612x612&w=0&k=20&c=XEbOHk29we-C3N9eIpz_FnNIJ7cVMenTm8i0owTFPi8=">
    </div>
    <div class="w-1/3 mt-8 mr-8">
      <div class="bg-white rounded-2xl p-5">
        <h1 class="text-2xl  capitalize">Медицинский туризм в Стамбуле с Dentplastistanbul</h1>
        <div class="flex justify-between mt-12">
          <p>качество</p>
          <p>безопасность</p>
          <p>выгодные цены</p>
        </div>
      </div>
      <div class="flex justify-between mt-12">
        <div class="flex w-12 h-12">
          <img class="h-full w-full rounded-3xl" src="https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA" />
          <img class="h-full w-full rounded-3xl"  src="https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA" />
          <img class="h-full w-full rounded-3xl" src="https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA" />
        </div>
        <p>Our feedbacks</p>
      </div>
      <div class="gradient rounded-2xl pb-8">
        <img class="mx-auto py-3 rounded-3xl" src="https://static.beautytocare.com/cdn-cgi/image/width=390,height=286,sharpen=1,f=auto/media/promo/spotlight/18/homepage-img.jpg"/>
        <p>Lorem ipsum</p>
      </div>
    </div> 
  </div>
</template>

<style scoped>
.logo {
  border-bottom-right-radius: 30px;
}
  .logo:before {
    content: "";
    width: 30px;
    height: 30px;
    background-color: transparent;
    right: -33%;
    top: 0;
    position: absolute;
    border-radius: 50%;
    box-shadow: -10px -10px #F6F2EB;;
  }
  .logo:after {
    content: "";
    width: 30px;
    height: 30px;
    background-color: transparent;
    left: 0;
    bottom: -37%;
    position: absolute;
    border-radius: 50%;
    box-shadow: -10px -10px #F6F2EB;;
  }
</style>
