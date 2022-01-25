<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  colour: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: 'w-full',
  },
  btnContainer: {
    type: Boolean,
    default: false,
  },
  btnXPadding: {
    type: String,
    default: '20',
  },
});

const backgroundColour = computed(() => {
  return props.colour ? `btn-${props.colour}` : 'btn-default';
});

const buttonWidth = computed(() => props.width);

const buttonContainer = computed(() => {
  return {
    'btn-container': props.btnContainer,
  };
});

const btnXPadding = computed(() => {
  return `px-${props.btnXPadding}`;
});
</script>

<template>
  <div :class="buttonContainer">
    <button class="btn" :class="[backgroundColour, buttonWidth, btnXPadding]">
      <slot />
    </button>
  </div>
</template>

<style lang="postcss" scoped>
.btn-container {
  @apply fixed bottom-0 w-full text-sm rounded-t-md bg-secondary-600 p-6 pb-10;
}

.btn {
  @apply flex
    justify-center
    items-center
    transition-colors
    duration-300
    ease-in-out
    outline-none
    h-14
    text-white
    text-lg
    shadow-md
    rounded-lg
    py-8;

  &-primary {
    @apply bg-primary-400;
  }

  &-default {
    @apply bg-secondary-600  hover:bg-primary-400;
  }

  &-black {
    @apply bg-black;
  }
}
</style>
