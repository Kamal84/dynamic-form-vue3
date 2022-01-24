<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pageHeading = computed(() => route.meta.pageHeading);
</script>
<template>
  <h2 class="mb-10 text-2xl">{{ pageHeading }}</h2>
  <router-view></router-view>
</template>
