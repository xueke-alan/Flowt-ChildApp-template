<template>
  <div class="main-layout">

    <headerLine />

    <div style="width:100%; flex:1">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>

import headerLine from '~/layout/header/index.vue'

</script>

<style  scope>
.main-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
