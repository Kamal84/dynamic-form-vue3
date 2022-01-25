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

    function onSubmit() {
      router.push(`/apply/${String(page.value)}`);
    }

    console.log(Object.keys(formSchema).length);
    return {
      formObj,
      onSubmit,
      obj,
    };
  },
});
</script>

<template>
  <form @submit.prevent="onSubmit">
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
    <BaseButton colour="primary">Continue</BaseButton>
  </form>
</template>
