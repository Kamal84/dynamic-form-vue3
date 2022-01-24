<script setup lang="ts">
import BaseForm from '@/components/BaseForm.vue';
import { formSchema } from '@/schema/formFields';
</script>

<template>
  <div class="m-10">
    <h1 class="mb-10">Application form</h1>
    <BaseForm :obj="formSchema"></BaseForm>
  </div>
</template>

<style></style>
