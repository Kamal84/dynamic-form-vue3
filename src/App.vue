<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
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
      phoneNumber: '',
    });

    const workDetails = reactive<Record<string, any>>({
      jobTitle: '',
      companyName: '',
    });

    return {
      formSchema,
      personDetails,
      workDetails,
    };
  },
});
</script>

<template>
  <div class="m-10">
    <h1 class="mb-6">Application form</h1>
    <template v-for="(inputSchema, index) in formSchema" :key="index">
      <div v-for="schema in inputSchema.workDetails" :key="schema.state">
        <component
          :is="schema.inputType"
          :id="schema.state"
          :type="schema.type"
          :name="schema.state"
          :label="schema.label"
          :placeholder="schema.placeholder"
          :options="schema.type === 'radio' ? schema.options : ''"
          :selected="schema.type === 'radio' ? workDetails[schema.state] : ''"
          v-model="workDetails[schema.state]"
        ></component>
      </div>
    </template>
  </div>
</template>

<style></style>
