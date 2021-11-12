<template>
  <el-cascader
    ref="cascader"
    v-model="modelVal"
    :options="trueOptions"
    :props="props"
    :clearable="clearable"
    :placeholder="placeholder"
    :show-all-levels="showAllLevels"
    :disabled="disabled"
    popper-class="selectArea"
    @change="selectChange"
  />
</template>

<script>
export default {
  name: 'Cascader',
  props: {
    value: {
      type: [String, Number, Array, Boolean],
      default: ''
    },
    options: {
      type: Array,
      default: () => [],
      required: true
    },
    props: {
      type: Object,
      default: () => {}
    },
    clearable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    allOptions: {
      type: Boolean,
      default: false
    },
    showAllLevels: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    attrs: {
      type: Object,
      default: () => {
        return {
          value: 'value',
          label: 'label',
          children: 'children'
        }
      }
    }
  },
  watch: {
    value(newVal) {
      this.modelVal = newVal
    }
  },
  data() {
    return {
      modelVal: this.value
    }
  },
  computed: {
    trueOptions() {
      const options = this.formatOptions(this.options)
      if (options.length > 0) {
        return this.allOptions
          ? [
            { value: '', label: '全部' },
            ...options
          ] : [...options]
      } else {
        return []
      }
    }
  },
  methods: {
    selectChange(val) {
      this.$emit('input', val)
      this.$emit('change', val)
      // 选择完毕关闭下拉框
      this.$refs.cascader.dropDownVisible = false
    },
    formatOptions(arr) {
      return arr
        ? arr.map(item => ({
            value: item[this.attrs.value],
            label: item[this.attrs.label],
            children: item[this.attrs.children]
              ? this.formatOptions(item[this.attrs.children]) : null
        })) : []
    }
  }
}
</script>

<style lang="scss">
  // 级联下拉框单选 文字选中样式
  .selectArea {
    .el-radio {
      position: absolute;
      left: 10px;
      top: 10px;
      width: 90%;
      height: 100%;
      z-index: 10;
    }
    .is-disabled { // 不允许选中样式
      cursor: not-allowed;
    }
  }
</style>
