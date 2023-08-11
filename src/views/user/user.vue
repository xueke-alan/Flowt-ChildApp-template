<template>
  <div>
    <n-card>
      <n-data-table striped :columns="columns" :data="data" :pagination="pagination" />
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import { NCard, NDataTable } from 'naive-ui'
import { onMounted, reactive, ref } from 'vue';
import { h } from 'vue'
import actionRender from "./components/table/actionRender.vue";

const paginationReactive = reactive({
  page: 2,
  pageSize: 10,
  showSizePicker: true,
  pageSizes: [3, 5, 7, 10],
  onChange: (page: number) => {
    paginationReactive.page = page
  },
  onUpdatePageSize: (pageSize: number) => {
    paginationReactive.pageSize = pageSize
    paginationReactive.page = 1
  }
})

const pagination = paginationReactive



const createColumns = () => {
  return [
    {
      title: 'staffId',
      key: 'staffId'
    },
    {
      title: 'name',
      key: 'name'
    },
    {
      title: 'nameCn',
      key: 'nameCn'
    },
    {
      title: 'group',
      key: 'group'
    },
    {
      title: 'role',
      key: 'role'
    },
    {
      title: 'Action',
      key: 'actions',
      render(row: any) {
        return h(actionRender, { row })
      }
    }
  ]
}
const data = ref([
  {
    key: 0,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'PH',
    role: ['Developer']
  },
])

onMounted(() => {
  // 根据页码拿到全部的user数据
})

const columns = createColumns()
</script>

<style scoped></style>
