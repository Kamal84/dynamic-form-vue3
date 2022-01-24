<script lang="ts">
import { defineComponent, reactive } from 'vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseRadioButtonGroup from '@/components/BaseRadioButtonGroup.vue';

export default defineComponent({
  components: {
    BaseInput,
    BaseRadioButtonGroup,
  },
  props: {
    obj: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const formObj = reactive<Record<string, any>>({});

    return {
      formObj,
    };
  },
});
</script>

<template>
  <div v-for="schema in obj" :key="schema.state">
    <component
      :is="schema.inputType"
      :id="schema.state"
      :type="schema.type"
      :name="schema.state"
      :label="schema.label"
      :placeholder="schema.placeholder"
      :options="schema.type === 'radio' ? schema.options : ''"
      :selected="schema.type === 'radio' ? formObj[schema.state] : ''"
      v-model="formObj[schema.state]"
    ></component>
  </div>
</template>
