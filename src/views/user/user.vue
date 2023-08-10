<template>
  <div>
    <n-card>
      <n-data-table :columns="columns" :data="data" :pagination="pagination" />
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import { NCard, NDataTable } from 'naive-ui'
import { reactive, ref } from 'vue';


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
      key: 'actions'
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
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },
  {
    key: 1,
    staffId: 'GZ10548',
    name: 'Alan xue',
    nameCn: '薛科',
    avatar: 32,
    group: 'New York No. 1 Lake Park',
    role: ['nice', 'developer']
  },

])
const columns = createColumns()
</script>

<style scoped></style>
