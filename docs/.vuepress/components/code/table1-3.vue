<template>
  <div class="code-table">
    <div>
      <z-table
        :data="tableData"
        :columns="tableColumns"
        show-index
        stripe
        border
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table1-3',
  components: {
    ZTable: () => import('../../../../plugins/components/table/Table')
  },
  data() {
    return {
      tableData: [
        { name: '张三', sex: '男', birth: '1998-01-01' },
        { name: '李四', sex: '女', birth: '1998-01-01' },
        { name: '王五', sex: '男', birth: '1998-01-01' }
      ],
      tableColumns: [
        { key: 'name', label: '姓名' },
        { key: 'sex', label: '性别' },
        { key: 'birth', label: '生日' }
      ]
    }
  }
}
</script>