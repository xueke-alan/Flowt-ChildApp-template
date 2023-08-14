<template >
  <n-card style="margin-bottom: 16px;height: 100%;">
    <n-tabs type="line" animated style="height: 100%;display: flex;flex-direction: column;" pane-wrapper-style="flex: 1;"
      pane-style="height:100%;display: flex;flex-direction: column;">
      <n-tab-pane :name="t.name" :display-directive="t.display" v-for="t in tabsConfig.pages">
        <template #tab>
          <div style="font-size: 16px;display: flex;align-items: center;">
            <n-icon size="20" style="margin-right: 8px;">
              <component :is="t.icon" />
            </n-icon>
            <span>{{ t.name }}</span>
          </div>
        </template>
        <component :is="t.component" />
      </n-tab-pane>
    </n-tabs>
    <div style="position: absolute;top: 20px;right: 24px;opacity: .8;height: 45px;overflow: hidden;display: flex;
    align-items: center;">
      <span style="margin-right: 85px;">{{ tabsConfig.subtitle }}</span>
      <n-icon size="24" style="margin-right: 8px;">
        <component :is="PersonFeedback24Regular" />
      </n-icon>
    </div>

  </n-card>
</template>

<script lang="ts" setup>
import { PersonFeedback24Regular } from '@vicons/fluent';
import { NCard, NTabs, NTabPane, NIcon } from 'naive-ui'

defineProps({
  tabsConfig: {
    type: Object,
    required: true
  }
});

</script>