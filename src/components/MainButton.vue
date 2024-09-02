<script setup>
import { ref } from "vue";
import ModalForm from '../components/ModalForm.vue'

const isModalOpened = ref(false);

const openModal = () => {
  isModalOpened.value = true;
};
const closeModal = () => {
  isModalOpened.value = false;
};

</script>

<template>
  <router-link to="#" class="hover:bg-opacity-0 hover:text-customDark hover:border-2 hover:border-customDark content-center bg-customDark text-white px-8 py-4 rounded-3xl" @click="openModal">
    <slot></slot>
  </router-link>
  <ModalForm :isOpen="isModalOpened" @modal-close="closeModal" name="first-modal"/>
</template>
