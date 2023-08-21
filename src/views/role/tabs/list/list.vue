<template>
  <n-tree class="rolesTrees" block-line :data="data" :default-expanded-keys="defaultExpandedKeys" selectable
    :checkable="false" :default-expand-all="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { NTree } from "naive-ui";

import { TreeOption } from 'naive-ui'

const data: TreeOption[] = [
  {
    key: 0,
    label: "超级管理员",
    checkboxDisabled: true,
  },
  {
    key: 1,
    label: "管理员",
    checkboxDisabled: true,
  },
  {
    key: 2,
    label: "总监",
    checkboxDisabled: true,
  },
  {
    key: 3,
    label: "行政",
    checkboxDisabled: true,
  },
  {
    key: 4,
    label: "质量保证",
    checkboxDisabled: true,
  },
  {
    key: 8,
    label: "技术支持",
    checkboxDisabled: true,
  },
  {
    key: 5,
    label: "测试主管 (用户组)",
    checkboxDisabled: true,

    children: [
      {
        key: 11,
        label: "物理组 主管",
        checkboxDisabled: true,
      },
      {
        key: 22,
        label: "老化组 主管",
        checkboxDisabled: true,
      },
      {
        key: 33,
        label: "可靠性组 主管",
        checkboxDisabled: true,
      }
    ]
  },
  {
    key: 6,
    label: "测试工程师",
    checkboxDisabled: true,
  },
  {
    key: 7,
    label: "技术服务工程师",
    checkboxDisabled: true,
  },
  {
    key: 7,
    label: "技术服务工程师",
    checkboxDisabled: true,
  },
  {
    key: 7,
    label: "技术服务工程师",
    checkboxDisabled: true,
  },
  {
    key: 7,
    label: "技术服务工程师",
    checkboxDisabled: true,
  },
  {
    key: 7,
    label: "技术服务工程师",
    checkboxDisabled: true,
  },
  {
    key: 7,
    label: "技术服务工程师",
    checkboxDisabled: true,
  },
  {
    key: 7,
    label: "技术服务工程师",
    checkboxDisabled: true,
  },
  {
    key: 7,
    label: "技术服务工程师",
    checkboxDisabled: true,
  },
  {
    key: 7,
    label: "技术服务工程师",
    checkboxDisabled: true,
  },
  {
    key: 7,
    label: "技术服务工程师",
    checkboxDisabled: true,
  },
  {
    key: 7,
    label: "技术服务工程师",
    checkboxDisabled: true,
  },
  {
    key: 7,
    label: "技术服务工程师",
    checkboxDisabled: true,
  },
  {
    key: 7,
    label: "技术服务工程师",
    checkboxDisabled: true,
  },
  {
    key: 7,
    label: "技术服务工程师",
    checkboxDisabled: true,
  },
  {
    key: 7,
    label: "技术服务工程师",
    checkboxDisabled: true,
  },
  {
    key: 7,
    label: "技术服务工程师",
    checkboxDisabled: true,
  },
  {
    key: 7,
    label: "技术服务工程师",
    checkboxDisabled: true,
  },
  {
    key: 7,
    label: "技术服务工程师",
    checkboxDisabled: true,
  }
]
const defaultExpandedKeys = ref(['40', '41'])


</script>

<style lang="less">
.rolesTrees {
  &.n-tree.n-tree--block-line .n-tree-node:not(.n-tree-node--disabled).n-tree-node--selected {
    position: relative;
    transition: all .3s ease;
    background-color: transparent;

    &::before {
      background-color: var(--n-color-target);
    }
  }

  & .n-tree-node {
    border: 1px solid transparent;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: transparent;
      opacity: .2;
      border-radius: var(--n-node-border-radius);
      transition: .2s ease all;
    }
  }
}
</style>