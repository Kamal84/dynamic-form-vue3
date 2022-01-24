<script setup lang="ts">
import BaseForm from '@/components/BaseForm.vue';
import BaseButton from '@/components/BaseButton.vue';

import { formSchema } from '@/schema/formFields';
</script>
<template>
  <BaseForm :obj="formSchema.personDetails" />
  <router-link to="/apply/work-details"
    ><BaseButton colour="primary">Continue</BaseButton></router-link
  >
</template>
