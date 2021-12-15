<template>
  <div class="z-table">
    <!-- 自定义头部 -->
    <div v-if="$slots['header-box']" class="z-table__header clearfix">
      <slot name="header-box" />
    </div>
    <!-- 表格 -->
    <div class="z-table__body">
      <el-table
        ref="table"
        v-loading="loading"
        :data="data"
        :stripe="stripe"
        :border="border"
        :height="height"
        :row-key="rowKey"
        :tree-props="treeProps"
        :cell-style="cellStyle"
        :cell-class-name="cellClassName"
        :header-row-style="headerRowStyle"
        :header-row-class-name="headerRowClassName"
        :header-cell-style="headerStyle"
        :header-cell-class-name="headerCellClassName"
        :default-expand-all="defaultExpandAll"
        @selection-change="selectionChange"
        @filter-change="filterChange"
        @header-dragend="headerDragend"
        @header-click="headerClick"
      >
        <!-- 是否有多选 -->
        <el-table-column v-if="showSelection" type="selection" width="50" />
        <!-- 是否有序号 -->
        <el-table-column v-if="showIndex" label="序号" type="index" width="50" />
        <template v-for="(col, index) in columns">
          <!-- 普通列 -->
          <el-table-column
            v-if="!col.slot"
            :key="index"
            :prop="col.key"
            :fixed="col.fixed"
            :label="col.label"
            :width="col.width"
            :align="col.align"
            :sortable="col.sortable"
            :column-key="col.columnKey"
            :formatter="formatter"
          />
          <!-- 操作列/自定义列 -->
          <slot v-else :name="col.slot" />
        </template>
        <slot />
      </el-table>
      <div class="pagination-bg" />
      <!-- 页码选择器 -->
      <div v-if="pagination" class="z-table__footer">
        <el-pagination
          background
          :current-page="pagination.page"
          :page-size="pagination.limit"
          :page-sizes="pagination.pageSizes"
          :layout="pagination.layout"
          :total="pagination.count"
          :pager-count="pagination.pagerCount"
          @size-change="changeLimit"
          @current-change="changePage"
        />
      </div>
      <slot name="pagination" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZTable',
  props: {
    rowKey: { type: String, default: 'id' },
    height: { type: [String, Number], default: null },
    defaultThemeColor: { type: String, default: 'rgb(246, 249, 255)' },
    activeThemeColor: { type: String, default: 'rgb(232, 241, 254)' },
    loading: { type: Boolean, default: false },
    stripe: { type: Boolean, default: false },
    border: { type: Boolean, default: false },
    showIndex: { type: Boolean, default: false },
    showSelection: { type: Boolean, default: false },
    defaultExpandAll: { type: Boolean, default: false },
    data: { type: Array, default: () => [], required: true },
    columns: { type: Array, default: () => [], required: true },
    pagination: { type: Object, default: () => {} },
    treeProps: { type: Object, default: () => {
      return {
        hasChildren: 'hasChildren',
        children: 'children'
      }
    } },
    cellClassName: { type: [Function, String], default: null },
    cellStyle: { type: [Function, Object], default: null },
    headerRowClassName: { type: [Function, String], default: null },
    headerRowStyle: { type: [Function, Object], default: null },
    headerCellClassName: { type: [Function, String], default: null },
    headerCellStyle: { type: [Function, Object], default: ()=> {
      return {
        color: '#3B414F',
        fontWeight: 'bold'
      }
    } },
    // eslint-disable-next-line no-unused-vars
    formatter: { type: Function, default: (row, column, cellValue, index) => {
      const rowKey = column.property
      return row[rowKey] || '--'
    }
    }
  },
  computed: {
    headerStyle() {
      let style = {}
      if (this.defaultThemeColor && !this.headerCellStyle.background) {
        style = {
          ...this.headerCellStyle,
          background: this.defaultThemeColor
        }
      } else {
        style = { ...this.headerCellStyle }
      }
      return style
    }
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page)
    },
    changeLimit(limit) {
      this.$emit('changeLimit', limit)
    },
    selectionChange(selection) {
      this.$emit('selectionChange', selection)
    },
    filterChange(filters) {
      this.$emit('filterChange', filters)
    },
    clearSelection() {
      this.$refs.table.clearSelection()
    },
    doLayout() {
      this.$refs.table.doLayout()
    },
    // eslint-disable-next-line no-unused-vars
    headerDragend(nw, ow, column, event) {
      const className = column.id
      // 只取第一行，则表头
      const selectClass = document.getElementsByClassName(className)[0]
      selectClass.style.backgroundColor = 'rgb(246, 249, 255)'
      if (nw - ow < 0) {
        this.dragBool = true
      }
      this.doLayout()
    },
    headerClick(column) {
      if (this.dragBool) {
        this.dragBool = false
        return
      }
      const className = column.id
      // 只取第一行，则表头
      const selectClass = document.getElementsByClassName(className)[0]
      // 两次点击取消样式
      if (selectClass.style.backgroundColor !== 'rgb(232, 241, 254)') {
        selectClass.style.backgroundColor = 'rgb(232, 241, 254)'
      } else {
        selectClass.style.backgroundColor = 'rgb(246, 249, 255)'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import './table.scss';
</style>
