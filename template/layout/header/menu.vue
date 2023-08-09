<template>
  <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" v-if="isLocal" />
</template>

<script lang="ts" setup>
import { h, onMounted, ref } from 'vue'
import { NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink, useRouter } from 'vue-router';

import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

const isLocal = ref(true)

onMounted(() => {

  // 如果是开发模式，则不显示头部
  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    isLocal.value = false
  }

})


const router = useRouter().getRoutes()


const menuOptions: MenuOption[] = router.map(({ name, path }) => {
  return {
    label: () => h(RouterLink, { to: { name } }, { default: () => path }),
    key: name as string,
  }
})

const activeKey = ref(null)

</script>
