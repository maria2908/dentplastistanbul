<script setup>

</script>

<template>
  <div class="flex bg-customWhite">
    <div style="height: 92vh" class="w-2/3 m-10">
        <div class="absolute bg-customWhite p-7  logo">Logo</div>
        <img class="w-full h-full object-cover rounded-3xl" src="https://media.istockphoto.com/id/464869926/de/foto/jubeln-frau-offenen-armen-zu-sonnenaufgang-am-strand.jpg?s=612x612&w=0&k=20&c=XEbOHk29we-C3N9eIpz_FnNIJ7cVMenTm8i0owTFPi8=">
    </div>
    <div class="w-1/3 ">
      <div class="bg-white">
        <h1 class="text-xl ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
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
