<template>
  <el-select
    v-model="modelValue"
    :placeholder="placeholder"
    :clearable="clearable"
    :multiple="multiple"
    :collapse-tags="collapseTags"
    :disabled="disabled"
    :filterable="filterable"
    @change="selectChange"
  >
    <el-option v-if="allOptions" value label="全部" />
    <el-option
      v-for="(item) in selectList"
      :key="item.value !== null ? item.value : item.val"
      :value="item.value !== null ? item.value : item.val"
      :label="item.label"
    />
  </el-select>
</template>
<script>
export default {
  name: 'Select',
  props: {
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    // 选项列表
    list: {
      type: Array,
      default: () => []
    },
    // vuex 对应state key
    listKey: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    collapseTags: {
      type: Boolean,
      default: false,
      required: false
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    allOptions: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    selectList: function() {
      if (this.list && this.list.length > 0) {
        return this.list
      } else {
        return this.$store.getters[this.listKey]
      }
    }
  },
  watch: {
    value(newVal) {
      this.modelValue = newVal
    }
  },
  data() {
    return {
      modelValue: this.value
    }
  },
  methods: {
    selectChange(val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  }
}
</script>
