<script setup lang="ts">
import { computed } from 'vue';

const emit = defineEmits(['update:modelValue']);

const onInput = computed<string | number>({
  get: () => props.modelValue,
  set: (value: string | number) => emit('update:modelValue', value),
});

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
});
</script>

<template>
  <div class="flex flex-col items-start">
    <label v-if="label" class="block" :for="id">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      class="base-input"
      v-model="onInput"
    />
  </div>
</template>

<style lang="postcss" scoped>
.base-input {
  @apply border-2 rounded border-gray-500 focus:border-primary-300 focus:outline-none bg-gray-200 text-gray-900 w-full p-2 mb-6;

  &::-webkit-input-placeholder {
    @apply text-gray-700;
  }
}

label {
  @apply block mb-2 font-medium text-sm;
}
</style>
