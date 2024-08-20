<script setup>
import {ref, onMounted, onUnmounted, watch} from 'vue';
import {useI18n} from 'vue-i18n';

const activeBarMenu = ref(false);
const activeMenu = ref(0);
const isFixed = ref(false);

const menuItems = [
  {text: "menu.main", link: '#'},
  {text: 'Стоматология', link: '#'},
  {text: 'Пластическая хирургия', link: '#'},
  {text: 'Увеличение груди', link: '#'},
  {text: 'Липосакция', link: '#'},
];

const {locale} = useI18n();
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

function setActiveMenu(index) {
  activeMenu.value = index;
  activeBarMenu.value = false;
}

const handleActiveBarMenu = () => {
  activeBarMenu.value = !activeBarMenu.value
}

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
  <div style="display: flex" :class="['bigscreen flex lg:flex lg:fixed absolute z-10 right-4 lg:right-12 content-center lg:mt-6', { fixed: isFixed }]">
    <!-- Menu Items -->
    <ul class="flex flex-col lg:flex-row bg-white p-2 rounded-3xl">
      <li
          v-for="(item, index) in menuItems"
          :key="index"
          :class="{'active': activeMenu === index, 'hover:bg-customGray hover:bg-opacity-30 rounded-3xl': true, 'p-2 lg:p-4': true}"
      >
        <router-link :to="item.link" class="block text-center">{{ $t(item.text) }}</router-link>
      </li>
    </ul>

    <!-- Language Dropdown -->
    <div class="dropdown mt-4 lg:mt-6">
      <span class="material-icons pr-4">translate</span>
      <div class="dropdown-content hidden lg:block">
        <p @click="setLanguage('ru')" :class="{ isActive: locale === 'ru' }">RU</p>
        <p @click="setLanguage('ua')" :class="{ isActive: locale === 'ua' }">UA</p>
        <p @click="setLanguage('en')" :class="{ isActive: locale === 'en' }">EN</p>
      </div>
    </div>
  </div>

  <div ref="headerRef" :class="['smallscreen flex flex-col absolute z-10 right-0 content-center items-center bg-white rounded-2xl', { fixedBar: isFixed }]">
    <div class="flex justify-between items-center p-6" >
      <div class="dropdown flex items-center mt-2">
        <span class="material-icons lg:ml-4 pr-4">translate</span>
        <div class="dropdown-content">
          <p @click="setLanguage('ru')" :class="{ isActive: locale === 'ru' }">RU</p>
          <p @click="setLanguage('ua')" :class="{ isActive: locale === 'ua' }">UA</p>
          <p @click="setLanguage('en')" :class="{ isActive: locale === 'en' }">EN</p>
        </div>
      </div>
      <button @click="handleActiveBarMenu" class=" mr-4 text-2xl">☰</button>
    </div>
    <ul v-if="activeBarMenu" class="flex flex-col bg-white p-2 rounded-3xl">
      <li
          v-for="(item, index) in menuItems"
          :key="index"
          :class="{'active': activeMenu === index, 'hover:bg-customGray hover:bg-opacity-30 rounded-3xl my-1': true, 'p-2 lg:p-4': true}"
          @click="setActiveMenu(index)"
      >
        <router-link :to="item.link" class="block text-center">{{ $t(item.text) }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  z-index: 100;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  right: 1%;
  border-radius: 20px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
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
}

.fixed {
  position: fixed;
  width: fit-content;
  margin-top: 15px;
  border-radius: 40px;
  padding: 10px;
  top: 0;
  right: 18%;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.fixedBar {
  position: fixed;
  justify-content: center !important;
  width: 100%;
  margin-top: 15px;
  border-radius: 40px;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.active {
  color: white;
  background-color: #797D7F;
}

li {
  margin-right: 5px;
  padding: 14px 45px;
}

@media (min-width: 1444px) {
  .bigscreen {
    display: block;
  }

  .smallscreen {
    display: none;
  }
}

@media (max-width: 1000px) {
  .smallscreen {
    display: block;
  }

  .bigscreen {
    display: none !important;
  }
}
</style>