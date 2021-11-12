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

<script>
  export default {
    data() {
      return {
        tableData: [
          { param: '', desc: '', type: '', optionValue: '', defaultValue: '' }
        ]
      }
    }
  }
</script>