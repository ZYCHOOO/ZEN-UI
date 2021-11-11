<template>
  <div class="code-select">
    <div>
      <z-select
        v-model="value"
        :list="list"
        placeholder="请选择城市"
        clearable
        disabled
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select1-3',
  components: {
    ZSelect: () => import('../../../../plugins/components/select/Select')
  },
  data() {
    return {
      value: '',
      list: [
        { value: 1, label: '广州市' },
        { value: 2, label: '东莞市' },
        { value: 3, label: '湛江市' }
      ]
    }
  }
}
</script>