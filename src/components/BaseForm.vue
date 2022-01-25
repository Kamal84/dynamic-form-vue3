<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BaseInput from '@/components/BaseInput.vue';
import BaseRadioButtonGroup from '@/components/BaseRadioButtonGroup.vue';
import BaseButton from '@/components/BaseButton.vue';
import { formSchema } from '@/schema/formFields';

export default defineComponent({
  components: {
    BaseInput,
    BaseRadioButtonGroup,
    BaseButton,
  },

  setup() {
    const route = useRoute();
    const router = useRouter();
    const page: Record<string, any> = computed(() => route.name);
    const obj = computed(() => formSchema[page.value]);

    const formObj = reactive<Record<string, any>>({});

    const routes = computed(() => {
      const obj = router.options.routes.find((r) => r.name === 'Apply');
      return obj?.children;
    });

    const routeIndex = computed(() => {
      return routes.value.findIndex((r) => r.name === page.value);
    });

    const next = () => {
      const route = routes.value[routeIndex.value + 1];
      return router.push(`/apply/${route.path}`);
    };

    const prev = () => {
      const route = routes.value[routeIndex.value - 1];
      return router.push(`/apply/${route.path}`);
    };

    const onSwitchButton = computed(() => {
      const routeLength = routes.value.length - 1;
      return routeLength !== routeIndex.value;
    });
    return {
      formObj,
      obj,
      routes,
      routeIndex,
      next,
      prev,
      onSwitchButton,
    };
  },
});
</script>

<template>
  <form>
    <div v-for="schema in obj" :key="schema.state">
      <component
        :is="schema.inputType"
        :id="schema.state"
        :type="schema.type"
        :name="schema.state"
        :label="schema.label"
        :placeholder="schema.placeholder"
        :options="schema.type === 'radio' ? schema.options : ''"
        :selected="schema.type === 'radio' ? formObj[schema.state] : ''"
        v-model="formObj[schema.state]"
      ></component>
    </div>
  </form>
  <div class="flex flex-row justify-between">
    <BaseButton
      v-if="routeIndex !== 0"
      width="w-20 mr-4"
      colour="default"
      @click.prevent="prev"
      >Prev</BaseButton
    >
    <BaseButton
      class="flex-1"
      colour="primary"
      @click.prevent="onSwitchButton ? next() : ''"
      >{{ onSwitchButton ? 'Continue' : 'Submit' }}
    </BaseButton>
  </div>
</template>
