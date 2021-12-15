<template>
  <div class="code-table">
    <div>
      <z-table
        :data="tableData"
        :columns="tableColumns"
        stripe
        border
      >
        <el-table-column slot="sex" label="性别">
          <template slot-scope="scope">
            <div class="sex-box" :style="sexBoxStyle(scope.row.sex)">
              {{ scope.row.sex === 1 ? 'boy' : 'girl' }}
            </div>
          </template>
        </el-table-column>
        <el-table-column slot="operate" label="操作" width="200">
          <template slot-scope="scope">
            <el-button type="primary" size="small" plain>查看</el-button>
            <el-button type="danger" size="small" plain>删除</el-button>
          </template>
        </el-table-column>
      </z-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table1-5',
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
        { slot: 'sex' },
        { key: 'birth', label: '生日' },
        { slot: 'operate' }
      ]
    }
  },
  methods: {
    sexBoxStyle(sex) {
      return sex === 1
        ? { border: '1px solid lightskyblue' } 
        : { border: '1px solid lightpink' }
    }
  }
}
</script>