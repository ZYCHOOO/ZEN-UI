# Select 下拉框

当选项过多时，使用下拉菜单展示并选择内容。

---

<common-CodeBox title="基本使用">
  <code-select1-1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-select">
        <z-select
          v-model="value1"
          :list="list"
          placeholder="请选择城市"
          clearable
        />
        <z-select
          v-model="value2"
          listKey="cityList"
          placeholder="请选择城市"
          clearable
        />
      </div>
    </template>
  </highlight-code>
</common-CodeBox>

<common-CodeBox title="包含全选选项" description="通过在数据源中设置all-options 字段来声明是否包含全选选项">
  <code-select1-2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-select">
        <z-select
          v-model="value"
          :list="list"
          placeholder="请选择城市"
          all-options
          clearable
        />
      </div>
    </template>
  </highlight-code>
</common-CodeBox>

<common-CodeBox title="禁用" description="通过在数据源中设置 disabled 字段来声明该选项是禁用的">
  <code-select1-3 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-select">
        <z-select
          v-model="value"
          :list="list"
          placeholder="请选择城市"
          clearable
          disabled
        />
      </div>
    </template>
  </highlight-code>
</common-CodeBox>

<common-AttrTable :table-data="tableData" />

<script>
  export default {
    data() {
      return {
        tableData: [
          { param: 'v-model/value', desc: '绑定值', type: 'String/Number/Boolean', optionValue: '', defaultValue: '' },
          { param: 'list', desc: '选项数组', type: 'Array', optionValue: '', defaultValue: '' },
          { param: 'listKey', desc: 'store的计算属性', type: 'String', optionValue: '', defaultValue: '' },
          { param: 'multiple', desc: '是否多选', type: 'Boolean', optionValue: '', defaultValue: 'false' },
          { param: 'allOptions', desc: '是否包含全选选项', type: 'Boolean', optionValue: '', defaultValue: 'false' },
          { param: 'collapseTags', desc: '多选时是否将选中值按文字的形式展示', type: 'Boolean', optionValue: '', defaultValue: 'false' },
          { param: 'clearable', desc: '是否支持清空选项', type: 'Boolean', optionValue: '', defaultValue: 'false' },
          { param: 'filterable', desc: '是否可搜索', type: 'Boolean', optionValue: '', defaultValue: 'false' },
          { param: 'placeholder', desc: '占位符', type: 'String', optionValue: '', defaultValue: '请选择' },
          { param: 'disabled', desc: '是否禁用', type: 'Boolean', optionValue: '', defaultValue: 'false' }
        ]
      }
    }
  }
</script>
