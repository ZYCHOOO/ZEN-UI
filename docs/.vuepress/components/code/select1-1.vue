<template>
  <div class="code-select">
    <div>
      <z-select
        v-model="value1"
        :list="list"
        placeholder="请选择城市"
        clearable
      />
      <z-select
        v-model="value2"
        :list="list"
        placeholder="请选择城市"
        clearable
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select1-1',
  components: {
    ZSelect: () => import('../../../../plugins/components/select/Select')
  },
  data() {
    return {
      value1: '',
      value2: '',
      list: [
        { value: 1, label: '广州市' },
        { value: 2, label: '东莞市' },
        { value: 3, label: '湛江市' }
      ]
    }
  }
}
</script>