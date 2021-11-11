<template>
  <el-cascader
    ref="cascader"
    v-model="modelVal"
    :options="trueOptions"
    :props="props"
    :clearable="clearable"
    :placeholder="placeholder"
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
      default: ''
    },
    allOptions: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
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
      const options = this.options.map(item => ({
        value: item.value,
        label: item.label,
        children: this.formatOptions(item.extCustomTypes)
      }))
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
          value: item.id,
          label: item.name
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
