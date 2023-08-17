<template >
  <n-card class="card" content-style="display: flex;flex-direction: column;padding-top: 10px;overflow: hidden;"
    :key="matchedRouter.name">
    <div class="header">
      <n-tabs class="tabs" type="line" @update:value="(name) => { router.push({ name }) }">
        <n-tab :name="(t.name as string)" v-for="t in matchedRouter.children">
          <div class="tab">
            <n-icon size="20" class="icon">
              <component :is="t.meta?.icon" />
            </n-icon>
            <span>{{ t.name }}</span>
          </div>
        </n-tab>
      </n-tabs>
      <div class="right">
        <span class="subtitle">{{ matchedRouter.meta.subtitle }}</span>
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
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const matchedRouter = computed(() => router.currentRoute.value.matched[0])


</script>

<style lang="less" scoped>
.card {
  margin-bottom: 16px;
  height: 100%;

  .header {
    .tabs {
      margin-bottom: 10px;

      .tab {
        font-size: 14px;
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