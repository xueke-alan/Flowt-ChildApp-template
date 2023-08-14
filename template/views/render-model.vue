<template>
  <component :is="model" :config="{ path }" />
</template>


<script lang="ts" setup>

import { useRouter } from 'vue-router';
import { defineProps } from 'vue';


defineProps({
  path: String, // 声明 config 作为 prop
  model: {} // 声明 config 作为 prop
});

</script>

<style scoped></style>