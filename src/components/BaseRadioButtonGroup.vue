<script setup lang="ts">
import BaseRadioButton from '@/components/BaseRadioButton.vue';

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  selected: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  errorMessage: {
    type: String,
    default: '',
  },
  forceUseOfOptionObject: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="flex flex-col items-start mb-6">
    <p class="block pb-2 mb-2 font-medium text-sm">
      {{ label }}
    </p>
    <div class="flex flex-wrap">
      <BaseRadioButton
        v-for="option in options"
        :key="option"
        :option="option"
        :selected="selected"
        :error-message="errorMessage"
      />
    </div>
    <!-- <span v-if="errorMessage" class="error-msg">{{ errorMessage }}</span> -->
  </div>
</template>
