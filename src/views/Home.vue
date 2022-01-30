<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import { useRouter } from 'vue-router';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { useAppRoute } from '@/store/useAppRoute';

const router = useRouter();
const appRoute = useAppRoute();
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
  const routes = result.data.appRoute.map((name: any) => name.path);
  appRoute.givenRoutes(routes);
});
</script>
<template>
  <BaseButton colour="primary" @click="onClick">Apply now</BaseButton>
</template>
