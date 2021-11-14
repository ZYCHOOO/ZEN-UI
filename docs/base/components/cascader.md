# Cascader 级联选择器

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

---

<common-CodeBox title="基本使用">
  <code-cascader1-1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-cascader">
        <z-cascader
          v-model="value"
          :options="options"
          placeholder="请选择地区"
          clearable
        />
      </div>
    </template>
  </highlight-code>
</common-CodeBox>

<common-CodeBox title="包含全选选项" description="通过在数据源中设置all-options 字段来声明是否包含全选选项">
  <code-cascader1-2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-cascader">
        <z-cascader
          v-model="value"
          :options="options"
          placeholder="请选择地区"
          all-options
          clearable
        />
      </div>
    </template>
  </highlight-code>
</common-CodeBox>

<common-CodeBox title="显示完整路径" description="仅在输入框中显示选中项所在的完整路径，而不是选中项最后一级的标签">
  <code-cascader1-3 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-cascader">
        <z-cascader
          v-model="value"
          :options="options"
          placeholder="请选择地区"
          show-all-levels
          clearable
        />
      </div>
    </template>
  </highlight-code>
</common-CodeBox>

<common-CodeBox title="禁用" description="通过在数据源中设置 disabled 字段来声明该选项是禁用的">
  <code-cascader1-5 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-cascader">
        <z-cascader
          v-model="value"
          :options="options"
          placeholder="请选择地区"
          clearable
          disabled
        />
      </div>
    </template>
  </highlight-code>
</common-CodeBox>

<common-AttrTable :table-data="tableData" />

<common-AttrTable title="props" :table-data="propsData" />

<common-AttrTable title="attrs" :table-data="attrsData" />


<script>
  export default {
    data() {
      return {
        tableData: [
          { param: 'v-model/value', desc: '绑定值', type: 'Array', optionValue: '', defaultValue: '' },
          { param: 'options', desc: '可选项数据源', type: 'Array', optionValue: '', defaultValue: '' },
          { param: 'placeholder', desc: '占位符', type: 'String', optionValue: '', defaultValue: '请选择' },
          { param: 'disabled', desc: '是否禁用', type: 'Boolean', optionValue: '', defaultValue: 'false' },
          { param: 'clearable', desc: '是否支持清空选项', type: 'Boolean', optionValue: '', defaultValue: '' },
          { param: 'showAllLevels', desc: '输入框中是否显示选中值的完整路径', type: 'Boolean', optionValue: '', defaultValue: 'false' },
          { param: 'allOptions', desc: '是否包含全选选项', type: 'Array', optionValue: '', defaultValue: 'false' },
          { param: 'props', desc: '配置选项，具体见下表', type: 'Object', optionValue: '', defaultValue: '' },
          { param: 'attrs', desc: '键名配置选项，具体见下表', type: 'Object', optionValue: '', defaultValue: '' }
        ],
        propsData: [
          { param: 'expandTrigger', desc: '次级菜单的展开方式', type: 'String', optionValue: 'click/hover', defaultValue: "'click'" },
          { param: 'multiple', desc: '是否多选', type: 'Boolean', optionValue: '', defaultValue: 'false' },
          { param: 'checkStrictly', desc: '是否严格的遵守父子节点不互相关联', type: 'Boolean', optionValue: '', defaultValue: 'false' }
        ],
        attrsData: [
          { param: 'value', desc: '指定选项的值为选项对象的某个属性值', type: 'String', optionValue: '', defaultValue: "'value'" },
          { param: 'label', desc: '指定选项标签为选项对象的某个属性值', type: 'String', optionValue: '', defaultValue: "'value'" },
          { param: 'children', desc: '指定选项的子选项为选项对象的某个属性值', type: 'String', optionValue: '', defaultValue: "'children'" }
        ]
      }
    }
  }
</script>