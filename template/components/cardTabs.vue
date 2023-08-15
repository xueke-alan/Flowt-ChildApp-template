<template >
  <n-card class="card" style="" content-style="display: flex;flex-direction: column;padding-top: 10px;">

    <div class="header">
      <n-tabs class="tabs" type="line" @update:value="(name) => { router.push({ name }) }">
        <n-tab :name="(t.name as string)" v-for="t in tabsConfigtemp.children">
          <div class="tab">
            <n-icon size="20" class="icon">
              <component :is="t.meta?.icon" />
            </n-icon>
            <span>{{ t.name }}</span>
          </div>
        </n-tab>
      </n-tabs>

      <div class="right">
        <span class="subtitle">{{ tabsConfigtemp.meta.subtitle }}</span>
        <n-icon size="24" class="icon">
          <component :is="PersonFeedback24Regular" />
        </n-icon>
      </div>
    </div>

    <router-view></router-view>

  </n-card>
</template>

<script lang="ts" setup>
import { PersonFeedback24Regular } from '@vicons/fluent';
import { NCard, NTabs, NTab, NIcon } from 'naive-ui'
import { useRouter } from 'vue-router';

import { defineProps } from 'vue';

const props = defineProps({
  config: {
    type: Object,
    required: true
  }
});

console.log(props.config);


const router = useRouter();

const tabsConfigtemp = router.getRoutes().filter(({ path }) => {
  return path == props.config.path
})[0]

console.log(tabsConfigtemp);



</script>

<style lang="less" scoped>
.card {
  margin-bottom: 16px;
  height: 100%;

  .header {

    .tabs {
      margin-bottom: 10px;

      .tab {
        font-size: 16px;
        display: flex;
        align-items: center;

        .icon {
          margin-right: 8px;
        }
      }
    }

    .right {
      position: absolute;
      top: 10px;
      right: 24px;
      opacity: .8;
      height: 45px;
      overflow: hidden;
      display: flex;
      align-items: center;

      .icon {
        margin-right: 8px;
      }

      .subtitle {
        margin-right: 85px;
      }
    }
  }
}
</style>