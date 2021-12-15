# Table 表格

集合自定义头部/自定义列/页码选择器的表格组件。

---

<script>
  export default {
    data() {
      return {
        tableData: [
          { param: 'data', desc: '表格显示的数据', type: 'Array', optionValue: '', defaultValue: '' },
          { param: 'columns', desc: '表格头配置，具体见下表', type: 'Array', optionValue: '', defaultValue: '' },
          { param: 'height', desc: '表格的高度，默认为自动高度', type: 'String/Number', optionValue: '', defaultValue: '' },
          { param: 'stripe', desc: '表格是否为斑马纹', type: 'Boolean', optionValue: '', defaultValue: 'false' },
          { param: 'border', desc: '表格是否带有纵向边框', type: 'Boolean', optionValue: '', defaultValue: 'false' },
          { param: 'loading', desc: '表格是否在更新数据', type: 'Boolean', optionValue: '', defaultValue: 'false' },
          { param: 'show-index', desc: '表格是否有序号', type: 'Boolean', optionValue: '', defaultValue: 'false' },
          { param: 'show-selection', desc: '表格是否有多选', type: 'Boolean', optionValue: '', defaultValue: 'false' },
          { param: 'cell-class-name', desc: '单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。', type: 'Function({row, column, rowIndex, columnIndex})/String', optionValue: '', defaultValue: '' },
          { param: 'cell-style', desc: '单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。', type: 'Function({row, column, rowIndex, columnIndex})/Object', optionValue: '', defaultValue: '' },
          { param: 'header-row-class-name', desc: '表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。', type: 'Function({row, rowIndex})/String', optionValue: '', defaultValue: '' },
          { param: 'header-row-style', desc: '表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。', type: 'Function({row, rowIndex})/Object', optionValue: '', defaultValue: '' },
          { param: 'header-cell-class-name', desc: '表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。', type: 'Function({row, column, rowIndex, columnIndex})/String', optionValue: '', defaultValue: '' },
          { param: 'header-cell-style', desc: '表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。', type: 'Function({row, column, rowIndex, columnIndex})/Object', optionValue: '', defaultValue: '' },
          { param: 'row-key', desc: '行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。', type: 'Function(row)/String', optionValue: '', defaultValue: '' },
          { param: 'tree-props', desc: '渲染嵌套数据的配置选项', type: 'Object', optionValue: '', defaultValue: "{ hasChildren: 'hasChildren', children: 'children' }" },
          { param: 'default-expand-all', desc: '是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效', type: 'Boolean', optionValue: '', defaultValue: 'false' },
          { param: 'default-theme-color', desc: '表格头默认颜色', type: 'String', optionValue: '', defaultValue: 'rgb(246, 249, 255)' },
          { param: 'active-theme-color', desc: '表格头点击触发后颜色', type: 'String', optionValue: '', defaultValue: 'rgb(232, 241, 254)' },
          { param: 'pagination', desc: '页码选择器配置，具体见下表', type: 'Object', optionValue: '', defaultValue: '' },
          { param: 'formatter', desc: '用来格式化内容', type: 'Function(row, column, cellValue, index)', optionValue: '', defaultValue: '' },
        ],
        columnsData: [
          { param: 'key', desc: '对应列内容的字段名', type: 'String', optionValue: '', defaultValue: '' },
          { param: 'label', desc: '显示的标题', type: 'String', optionValue: '', defaultValue: '' },
          { param: 'width', desc: '显示的宽度', type: 'String', optionValue: '', defaultValue: '' },
          { param: 'sortable', desc: '对应列是否可以排序', type: 'Boolean', optionValue: '', defaultValue: 'false' },
          { param: 'slot', desc: '自定义列名', type: 'String', optionValue: '', defaultValue: '' }
        ],
        paginationData: [
          { param: 'page', desc: '当前页数', type: 'Number', optionValue: '', defaultValue: '' },
          { param: 'limit', desc: '每页显示条目个数', type: 'Number', optionValue: '', defaultValue: '' },
          { param: 'count', desc: '总条目数', type: 'Number', optionValue: '', defaultValue: '' },
          { param: 'pagerCount', desc: '页码按钮的数量，当总页数超过该值时会折叠', type: 'Number', optionValue: '', defaultValue: '7' },
          { param: 'pageSizes', desc: '每页显示个数选择器的选项设置', type: 'Number[]', optionValue: '', defaultValue: '[10, 20, 30, 40, 50, 100]' },
          { param: 'layout', desc: '组件布局，子组件名用逗号分隔', type: 'String', optionValue: 'sizes, prev, pager, next, jumper, ->, total, slot', defaultValue: 'prev, pager, next, jumper, ->, total' },
        ]
      }
    }
  }
</script>

