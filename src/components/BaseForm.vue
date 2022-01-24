<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseRadioButtonGroup from '@/components/BaseRadioButtonGroup.vue';

export default defineComponent({
  components: {
    BaseInput,
    BaseRadioButtonGroup,
  },
  props: {
    obj: {
      required: true,
    },
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
      personDetails,
      workDetails,
    };
  },
});
</script>

<template>
  <template v-for="(inputSchema, index) in obj" :key="index">
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
</template>

<style></style>
