<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import MainButton from "@/components/MainButton.vue";
import Button from "@/components/Button.vue";

const activeBarMenu = ref(false);
const isFixed = ref(false);

const menuItems = [
  { id: 0, text: "menu.main", link: '/' },
  { id: 1, text: 'menu.dentistry', link: '/dentistry' },
  { id: 2, text: 'menu.plastic-surgery', link: '/plastic-surgery' },
  { id: 3, text: 'menu.breast-enlargement', link: '/breast-enlargement' },
  { id: 4, text: 'menu.liposuction', link: '/liposuction' },
];

const { locale } = useI18n();
const headerRef = ref(null);

function setLanguage(lang) {
  locale.value = lang;
  localStorage.setItem('locale', lang);
  activeBarMenu.value = false;
}

function handleScroll() {
  const scrollOffset = window.scrollY;
  isFixed.value = scrollOffset >= 2;
}

const handleActiveBarMenu = () => {
  activeBarMenu.value = !activeBarMenu.value;
};

function clickOutside(event) {
  const header = headerRef.value;
  if (header && !header.contains(event.target)) {
    activeBarMenu.value = false;
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', clickOutside);
});
</script>

<template>
  <!-- Main Container -->
  <div :class="['flex flex-col lg:flex-row justify-between items-center z-10 p-0 absolute right-0 lg:top-6', { fixed: isFixed }]">

    <!-- Menu for Large Screens -->
    <ul class="hidden lg:flex bg-white p-3 rounded-3xl">
      <router-link
          v-for="(item) in menuItems"
          :key="item.id"
          class="hover:bg-customGray hover:bg-opacity-30 rounded-3xl p-4 px-8"
          :to="item.link"
      >
        {{ $t(item.text) }}
      </router-link>
      <div class="dropdown relative ml-3 mr-4 mt-4">
        <span class="material-icons pr-4 cursor-pointer">translate</span>
        <div class="dropdown-content lg:block">
          <p @click="setLanguage('ru')" :class="{ isActive: locale === 'ru' }">RU</p>
          <p @click="setLanguage('ua')" :class="{ isActive: locale === 'ua' }">UA</p>
          <p @click="setLanguage('en')" :class="{ isActive: locale === 'en' }">EN</p>
        </div>
      </div>

      <MainButton >{{ $t('main-page.welcome.apply') }}</MainButton>
    </ul>

    <!-- Small Screen Toggle Button -->
    <div class="lg:hidden flex justify-between w-full p-4 bg-white rounded-2xl" ref="headerRef">
      <div class="dropdown relative mt-2">
        <div class="flex justify-center">
          <span class="material-icons pr-4 cursor-pointer">translate</span>
        </div>
        <div class="dropdown-content lg:block mt-1">
          <p @click="setLanguage('ru')" :class="{ isActive: locale === 'ru' }">RU</p>
          <p @click="setLanguage('ua')" :class="{ isActive: locale === 'ua' }">UA</p>
          <p @click="setLanguage('en')" :class="{ isActive: locale === 'en' }">EN</p>
        </div>
      </div>
      <Button>{{ $t('main-page.welcome.apply') }}</Button>

      <button @click="handleActiveBarMenu" class="text-2xl ml-4">☰</button>
    </div>

    <!-- Menu for Small Screens -->
    <ul v-if="activeBarMenu" class="lg:hidden flex flex-col bg-white p-2 rounded-3xl mt-2 shadow-lg w-full">
      <router-link
          v-for="(item) in menuItems"
          :key="item.id"
          class="hover:bg-customGray hover:bg-opacity-30 rounded-3xl my-1 p-3 text-center"
          :to="item.link"
      >
        {{ $t(item.text) }}
      </router-link>

    </ul>

  </div>
</template>

<style scoped>

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  right: 1%;
  border-radius: 20px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: all 0.3s ease;
}

.dropdown-content p {
  cursor: pointer;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content p:hover {
  border-radius: 20px;
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.isActive {
  background-color: #ddd;
  border-radius: 20px;
  padding: 4px 8px;
}

.router-link-active {
  background-color: #adb1b3;
  color: white;
}

@media (min-width: 1024px) {
  .fixed {
    top: 2%;
    width: fit-content;
    border-radius: 40px;
    margin: 0 auto;
  }
}
</style>
