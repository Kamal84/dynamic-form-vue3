<script setup lang="ts">
import { reactive } from 'vue';
import BaseInput from '@/components/BaseInput.vue';
import { formSchema } from './schema/formFields';

const personDetails = reactive<Record<string, any>>({
  firstName: '',
  lastName: '',
  email: '',
});
</script>

<template>
  <div class="mx-10">
    <h1>Application form</h1>
    <div v-for="(schema, index) in formSchema" :key="schema.state">
      <BaseInput
        :id="schema.state"
        type="text"
        :name="schema.state"
        :label="schema.label"
        :placeholder="schema.placeholder"
        v-model="personDetails[schema.state]"
      />
    </div>
  </div>
</template>

<style></style>
