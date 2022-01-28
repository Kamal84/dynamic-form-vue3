<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import { useRouter } from 'vue-router';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

const router = useRouter();
function onClick() {
  router.push('/apply');
}

const { onResult } = useQuery(gql`
  query getRoutes {
    appRoute {
      path
    }
  }
`);

// Save alerts endpoint in store
onResult((result) => {
  const newvr = result.data.appRoute;
  console.log(newvr.map((r) => r.path));
});
</script>
<template>
  <BaseButton colour="primary" @click="onClick">Apply now</BaseButton>
</template>
