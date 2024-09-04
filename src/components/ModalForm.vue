<script setup>
import {defineProps, defineEmits, ref} from "vue";
import {onClickOutside} from '@vueuse/core'
import emailjs from '@emailjs/browser';
import {onMounted} from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});


const name = ref('');
const email = ref('');
const message = ref('');
const phone = ref('');
const selected = ref('');


const sendEmail = () => {
  const templateParams = {
    from_name: name.value,
    from_email: email.value,
    from_phone: phone.value,
    from_selected: selected.value,
    message: message.value
  };

  emailjs.send('service_j25zsjd', 'template_57e024n', templateParams, 'PhgvgsCyJAJxrTpJK')
      .then((response) => {
        console.log('Email sent successfully:', response);
        console.log('Email sent successfully!');

        name.value = '';
        email.value = '';
        phone.value = '';
        selected.value = '';
        message.value = '';
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        console.log('An error occurred while sending the email.');
      });
};
const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["modal-close"]);

const target = ref(null)
onClickOutside(target, () => emit('modal-close'))
</script>
<template>
  <div v-if="isOpen" class="modal-mask content-center">
    <div style="max-width: 500px" class="form bg-white mx-auto rounded-2xl relative text-center " ref="target">
      <span @click.stop="emit('modal-close')" class="material-symbols-outlined absolute right-0 p-4 cursor-pointer">close</span>
      <div class="container px-20">
        <h2 class="pt-12 text-3xl">{{ $t('main-page.welcome.apply') }}</h2>
        <form id="stripe-login" @submit.prevent="sendEmail">
          <div class="input-container">
            <input v-model="name" required="" name="name"/>
            <label for="name" class="label">{{ $t('form.name') }}</label>
            <div class="underline"></div>
          </div>
          <div class="input-container">
            <input v-model="email" required="" name="email">
            <label for="email" class="label">{{ $t('form.email') }}</label>
            <div class="underline"></div>
          </div>
          <div class="input-container">
            <input v-model="phone" required="" name="phone">
            <label for="phone" class="label">{{ $t('form.phone') }}</label>
            <div class="underline"></div>
          </div>
          <div class=" pb-5">
            <select v-model="selected" class="selected-container ">
              <option disabled value="">{{ $t('form.type-of-operation') }}</option>
              <option>{{ $t('form.type-of-operation-option.text-1') }}</option>
              <option>{{ $t('form.type-of-operation-option.text-2') }}</option>
              <option>{{ $t('form.type-of-operation-option.text-3') }}</option>
              <option>{{ $t('form.type-of-operation-option.text-4') }}</option>
              <option>{{ $t('form.type-of-operation-option.text-5') }}</option>
              <option>{{ $t('form.type-of-operation-option.text-6') }}</option>
              <option>{{ $t('form.type-of-operation-option.text-7') }}</option>
            </select>
          </div>
          <textarea v-model="message" :placeholder="$t('form.comment')" class="mt-7"></textarea>

          <button type="submit" class="my-6 p-3 bg-customDark text-white rounded-xl px-9 mx-auto ">{{ $t('form.send') }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.input-container {
  position: relative;
  margin: 40px auto;
}

.input-container input, .selected-container  {
  margin: 0;
  color: inherit;
  font-size: 18px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px 0;
  background-color: transparent;
  outline: none;
}

textarea {
  min-height: 150px;
  width: 100%;
  border: 2px solid #ccc;
  padding: 10px ;
}

.selected-container {
  font-size: 17px;
}

textarea:focus,
select:focus {
  --tw-ring-shadow: none !important;
}

input:focus {
  box-shadow: none;
  border: transparent;
  outline: none;
}

.input-container .label {
  position: absolute;
  top: 0;
  left: 0;
  color: #000000;
  transition: all 0.3s ease;
  pointer-events: none;
}

.input-container input:focus ~ .label,
.input-container input:valid ~ .label {
  top: -20px;
  font-size: 12px;
  color: #333;
}

.input-container .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #333;
  transform: scaleX(0);
  transition: all 0.3s ease;
}

.input-container input:focus ~ .underline,
.input-container input:valid ~ .underline {
  transform: scaleX(1);
}

@media (max-width: 500px) {
  .form {
    max-width: 300px !important;
  }

  .container {
    padding: 0 40px;
  }

  textarea {
    min-height: 100px;
  }
}

</style>