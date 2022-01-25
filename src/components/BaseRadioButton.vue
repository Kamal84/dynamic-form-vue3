<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  option: {
    type: String,
    required: true,
  },
  selected: {
    type: [String, Number],
    default: '',
  },
  errorMessage: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <label
    :for="option"
    :class="{
      selected: selected === option,
      'input-error': errorMessage,
    }"
  >
    <input
      :id="option"
      :value="option"
      type="radio"
      name="radio-input"
      @change="
        (event) => $parent.$emit('update:modelValue', event.target.value)
      "
    />
    {{ option }}
  </label>
</template>

<style lang="postcss" scoped>
label {
  @apply flex justify-center p-4 mr-2 cursor-pointer border-2 rounded border-gray-500 focus:border-primary-300 bg-gray-200  text-gray-900 mb-2;
}

/* label:last-child {
  @apply mb-0;
} */

input[name='radio-input'] {
  @apply hidden;
}

.selected {
  @apply bg-primary-300 border-primary-300;
}

/* .input-error {
  @apply border-error-200 focus:border-error-200;
} */
</style>
