<template>
  <div class="star-rating">
    <span
        v-for="(star, index) in totalStars"
        :key="index"
        @click="setRating(index + 1)"
        :class="['star', { filled: index + 1 <= fullStars, half: isHalfStar(index) }]"
    >
      <template v-if="index < fullStars - 1 || !isHalfStar(index)">
        &#9734; <!-- Empty star -->
      </template>
      <template v-else>
        &#9733; <!-- Filled star for half-star effect -->
      </template>
    </span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  initialRating: {
    type: Number,
    default: 0,
  },
  totalStars: {
    type: Number,
    default: 5,
  },
});

const rating = ref(props.initialRating);
const fullStars = computed(() => Math.floor(rating.value));
const hasHalfStar = computed(() => rating.value % 1 >= 0.5);

function setRating(value) {
  rating.value = value;
}

function isHalfStar(index) {
  return index === fullStars.value && hasHalfStar.value;
}
</script>

<style scoped>
.star-rating {
  font-size: 2em; /* Adjust size as needed */
}

.star {
  display: inline-block;
  cursor: pointer;
  color: lightgray; /* Color of empty star */
}

.star.filled {
  color: gold; /* Color of filled star */
}

.star.half {
  position: relative;
}

.star.half::after {
  content: "\2605"; /* Unicode star character */
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  overflow: hidden;
  color: gold; /* Color of half star */
}
</style>
