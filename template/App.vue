<template>
  <n-config-provider :theme="theme" style="height: 100%;">
    <layout />
  </n-config-provider>
</template>

<script setup lang="ts">
import layout from "~/layout/index.vue";

import { useGlobalSettingStore } from '~/stores/global'
import { computed } from 'vue'
import { darkTheme, NConfigProvider } from 'naive-ui'
const store = useGlobalSettingStore()


const theme = computed(() => store.darkTheme ? darkTheme : null);

</script>
~/stores/global