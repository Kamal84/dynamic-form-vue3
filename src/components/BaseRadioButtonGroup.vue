<script setup lang="ts">
import BaseRadioButton from '@/components/BaseRadioButton.vue';
import { PropType } from 'vue';
const props = defineProps({
  options: {
    type: Array as PropType<Array<string>>,
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
  <div class="flex flex-col items-start">
    <p class="block pb-2 mb-2 font-medium text-sm">
      {{ label }}
    </p>
    <div class="flex flex-wrap mb-4">
      <BaseRadioButton
        v-for="(option, index) in options"
        :key="index"
        :option="option"
        :selected="selected"
        :error-message="errorMessage"
      />
    </div>
    <!-- <span v-if="errorMessage" class="error-msg">{{ errorMessage }}</span> -->
  </div>
</template>
