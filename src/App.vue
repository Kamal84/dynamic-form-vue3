<script lang="ts">
import { defineComponent, reactive } from 'vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseRadioButtonGroup from '@/components/BaseRadioButtonGroup.vue';
import { formSchema } from './schema/formFields';

export default defineComponent({
  components: {
    BaseInput,
    BaseRadioButtonGroup,
  },
  setup() {
    const personDetails = reactive<Record<string, any>>({
      title: '',
      firstName: '',
      lastName: '',
      email: '',
    });

    return { formSchema, personDetails };
  },
});
</script>

<template>
  <div class="mx-10">
    <h1>Application form</h1>
    <div v-for="(schema, index) in formSchema" :key="schema.state">
      <component
        :is="schema.inputType"
        :id="schema.state"
        :type="schema.type"
        :name="schema.state"
        :label="schema.label"
        :placeholder="schema.placeholder"
        :options="schema.options"
        v-model="personDetails[schema.state]"
      ></component>
    </div>
  </div>
</template>

<style></style>
