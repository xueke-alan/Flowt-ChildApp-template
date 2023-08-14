<template>
  <n-descriptions bordered :column="3" label-placement="left" style="margin-bottom: 20px;">

    <n-descriptions-item>
      <template #label>
        工号
      </template>
      GZ10548
    </n-descriptions-item>
    <n-descriptions-item label="英文名">
      Alan Xue
    </n-descriptions-item>
    <n-descriptions-item label="中午名">
      薛科
    </n-descriptions-item>
    <n-descriptions-item label="性别">
      男
    </n-descriptions-item>
    <n-descriptions-item label="职务">
      测试工程师
    </n-descriptions-item>
    <n-descriptions-item label="在职状态">
      休假 2023.6.13 - 2023.6.15
    </n-descriptions-item>
    <n-descriptions-item label="手机号">
      19851335915
    </n-descriptions-item>
    <n-descriptions-item label="Dir. 直线">
      66756675 / 66756675
    </n-descriptions-item>
    <n-descriptions-item label="分机号">
      6675 / 6675
    </n-descriptions-item>

    <n-descriptions-item label="证件号">
      513030000000000000
    </n-descriptions-item>
    <n-descriptions-item label="Email" :span="2">
      alan.xue@sgs.com
    </n-descriptions-item>
    <n-descriptions-item label="入职日期">
      2023.6.15
    </n-descriptions-item>
    <n-descriptions-item label="E1用户">
      2023.6.15
    </n-descriptions-item>
    <n-descriptions-item label="VPN">
      2023.6.15
    </n-descriptions-item>
    <n-descriptions-item label="资产">
      2023.6.15
    </n-descriptions-item>
    <n-descriptions-item label="备注" :span="3">
      ------
    </n-descriptions-item>
    <n-descriptions-item label="信息码" :span="3">
      <div
        style="background-color: #aaaaaa88;height: 20px;font-size: 12px;line-height: 20px;display: flex;justify-content: center;">
        点击以获取加密信息码 </div>
    </n-descriptions-item>


  </n-descriptions>

 

</template>

<script setup lang="ts">
import { NDescriptions, NDescriptionsItem } from 'naive-ui'

</script>