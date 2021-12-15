<template>
  <div class="code-table">
    <div>
      <z-table
        :data="tableData"
        :columns="tableColumns"
        :formatter="formatter"
        stripe
        border
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table1-4',
  components: {
    ZTable: () => import('../../../../plugins/components/table/Table')
  },
  data() {
    return {
      tableData: [
        { name: '张三', sex: 1, birth: '1998-01-01' },
        { name: '李四', sex: 2, birth: '1998-01-01' },
        { name: '王五', sex: 1, birth: '1998-01-01' }
      ],
      tableColumns: [
        { key: 'name', label: '姓名' },
        { key: 'sex', label: '性别' },
        { key: 'birth', label: '生日' }
      ]
    }
  },
  methods: {
    formatter(row, column, cellValue, index) {
      const rowKey = column.property
      if (rowKey === 'sex') {
        return row[rowKey] === 1 ? '男士' : '女士'
      } else {
        return row[rowKey] || '--'
      }
    }
  }
}
</script>