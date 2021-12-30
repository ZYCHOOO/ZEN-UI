# Table 表格

集合自定义头部/自定义列/页码选择器的表格组件。

---


### Table Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data   | 表格显示的数据 | array | — | - |
| columns     | 表格头配置，具体见下表 | array    | — | — |
| height     | 表格的高度，默认为自动高度 | string/number    | — | - |
| stripe     | 表格是否为斑马纹 | boolean    | — | false |
| border       | 表格是否带有纵向边框 | boolean | — | false |
| lazy       | 是否懒加载子节点数据 | boolean | — | false |
| load       | 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息 | Function(row, treeNode, resolve) | — | - |
| loading     | 表格是否在更新数据   | boolean   | — | false |
| show-index     | 表格是否有序号   | boolean   | — | false |
| show-selection     | 表格是否有多选   | boolean   | — | false |
| empty-image     | 空状态图片   | string   | — | - |
| empty-text     | 空状态文案   | string   | — | 暂无数据 |
| cell-class-name | 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。 | Function({row, column, rowIndex, columnIndex})/String | — | - |
| cell-style      | 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object    | — | — |
| header-row-class-name | 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。 | Function({row, column, rowIndex, columnIndex})/String    | — | - |
| header-row-style | 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object    | — | - |
| header-cell-class-name | 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。 | Function({row, column, rowIndex, columnIndex})/String    | — | - |
| header-cell-style | 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object | — | — |
| row-key | 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。 | boolean | — | false |
| tree-props | 渲染嵌套数据的配置选项 | boolean | — | false |
| default-expand-all | 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效 | boolean | — | false |
| default-theme-color | 表格头默认颜色 | string | — | rgb(246, 249, 255) |
| active-theme-color | 表格头点击触发后颜色 | string | — | rgb(232, 241, 254) |
| pagination | 页码选择器配置，具体见下表 | object | — | - |
| formatter | 用来格式化内容 | Function(row, column, cellValue, index) | — | - |


### Table Columns
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| key | 对应列内容的字段名 | string | — | — |
| label | 显示的标题  | string | — | — |
| width | 显示的宽度 | string | — | — |
| sortable | 对应列是否可以排序 | boolean | — | false |
| fixed | 列是否固定在左侧或者右侧，true 表示固定在左侧 | string, boolean | true, left, right | - |
| align | 对齐方式 | string | left/center/right | left |
| slot | 自定义列名 | string | — | - |


### Table Pagination
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| page | 当前页数 | number | — | — |
| limit | 每页显示条目个数  | number | — | — |
| count | 总条目数 | number | — | — |
| pagerCount | 页码按钮的数量，当总页数超过该值时会折叠 | number | — | 7 |
| pageSizes | 每页显示个数选择器的选项设置 | number[] | — | [10, 20, 30, 40, 50, 100] |
| layout | 组件布局，子组件名用逗号分隔 | string | sizes, prev, pager, next, jumper, ->, total, slot | prev, pager, next, jumper, ->, total |

### Table Slot
| name      | 说明          |
|----------- |-------------- |
| header-box ｜ 表格头部插槽，根据设计稿自行处理 |
| pagination-box | 组件自带页码选择器与设计稿相差过大，自行修改 |

### Table Events
| 事件名      | 说明          | 参数      |
|----------- |-------------- |------------ |
| page-change | 当前页码发生变化时会触发该事件 | page |
| limit-change | 当前页码显示条目个数发生变化时会触发该事件 | limit |
| filter-change | 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。| filters |
| selection-change | 当选择项发生变化时会触发该事件 | selection |


### Table Methods
| 方法名      | 说明          | 参数      |
|----------- |-------------- |------------ |
| clearSelection | 用于多选表格，清空用户的选择 | - |
| clearFilter | 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件 | columnKey |
| doLayout | 对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法 | - |
