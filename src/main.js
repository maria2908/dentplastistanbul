import './index.css'
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '../node_modules/flowbite-vue/dist/index.css'

// Translate
import { createI18n } from 'vue-i18n'
import en from './locale/en.json'
import ru from './locale/ru.json'
import ua from './locale/ua.json'

const savedLocale = localStorage.getItem('locale') || 'ru';

const i18n = createI18n({
    legacy: false,
    locale: savedLocale,
    fallbackLng: 'ru',
    messages: {
        ua: ua,
        ru: ru,
        en: en,
    }
})
const test = localStorage.getItem('locale');
console.log(test)

const app = createApp(App)

app.use(i18n)
app.use(router)
app.mount('#app')
