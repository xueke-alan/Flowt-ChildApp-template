<template>
  <div style="display: flex;justify-content: space-between;margin-bottom: 8px;">
    <n-button-group>
      <n-button ghost size="small">
        全部
      </n-button>
      <n-button ghost size="small">
        正式员工
      </n-button>
      <n-button ghost size="small">
        外包员工
      </n-button>
      <n-button size="small">
        实习生
      </n-button>
      <n-button size="small">
        已离职
      </n-button>
    </n-button-group>

    <div style="display: flex;">
      <n-input v-model:value="value" size="small" type="text" placeholder="工号/姓名/分机/分组" style="margin-right: 10px;width: 250px;" />

      <n-button ghost size="small" style="margin-right: 10px;"> 刷新 </n-button>

      <n-button-group>
        <n-button ghost size="small">
          录入
        </n-button>

      </n-button-group>
    </div>
  </div>

  <n-data-table striped :columns="(columns as TableColumns<any>)" :data="data" size="small" flex-height
    :single-line="false" :row-props="rowProps" :loading="!data.length" style="height: 100%;" />
</template>

<script lang="ts" setup>

import { NDataTable, NButtonGroup, NButton, NInput } from 'naive-ui'
import { onMounted, reactive, ref } from 'vue';

import { getUserAll } from "@/api/user";
import { TableColumns } from 'naive-ui/es/data-table/src/interface';
const paginationReactive = reactive({
  page: 1,
  pageSize: 15,
  showSizePicker: true,
  pageSizes: [5, 10, 15],
  onChange: (page: number) => {
    paginationReactive.page = page
  },
  onUpdatePageSize: (pageSize: number) => {
    paginationReactive.pageSize = pageSize
    paginationReactive.page = 1
  }
})

const rowProps = (row: any) => {
  return {
    style: 'cursor: pointer;',
    onClick: () => {
      console.log(row);

    }
  }
}

const columns = ref<any[]>([
  {
    title: '工号',
    key: 'staffId',
    width: 100,
  },
  {
    title: '姓名',
    key: 'username',
    width: 120,
    titleColSpan: 2,
    titleAlign: 'center',
  },
  {
    title: '中文名',
    key: 'usernameCn',
    width: 80,
  },
  {
    title: '性别',
    key: 'gender',
    width: 50,
    titleAlign: 'center',
    align: 'center',
    render: ({ gender }) => {
      return gender == 'M' ? "男" : "女"
    }
  },
  {
    title: '邮箱',
    key: 'email',
    width: 120,
  },
  {
    title: '手机号',
    key: 'mobile',
    width: 100,
  },
  {
    title: '分机号',
    key: 'shortDir',
    width: 100,
  },
  {
    title: '分组',
    key: 'group',
    width: 80,
    filterOptions: [
      {
        label: 'PH',
        value: 'PH'
      },
      {
        label: 'QA',
        value: 'QA'
      }
    ],
    filter(value, row) {
      return ~row.group.indexOf(value)
    }
  }
])

const data = ref<any[]>([]);
const value = ref("");

onMounted(async () => {
  // 根据页码拿到全部的user数据
  const { users } = await getUserAll({ page: 1, pagesize: 200 })
  console.log(users);
  data.value = users
})
</script>

<style scoped></style>