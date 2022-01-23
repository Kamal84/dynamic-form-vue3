<script setup lang="ts">
import { reactive } from 'vue';
import BaseInput from './components/BaseInput.vue';
import schema from './schema/formFields';

const personDetails = reactive({
  title: '',
  firstName: '',
  lastName: '',
});
</script>

<template>
  <div class="mx-10">
    <h1>Application form</h1>
    <template>
      <BaseInput
        id="firstName"
        type="text"
        name="firstName"
        label="First name:"
        placeholder="First name"
        v-model="personDetails.firstName"
      />
    </template>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
