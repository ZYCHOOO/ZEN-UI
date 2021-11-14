<template>
  <div class="code-cascader">
    <div>
      <z-cascader
        v-model="value"
        :options="options"
        placeholder="请选择地区"
        all-options
        clearable
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cascader1-2',
  components: {
    ZCascader: () => import('../../../../plugins/components/cascader/Cascader')
  },
  data() {
    return {
      value: [],
      options: [
        { value: 1, label: '广州市', children: [
          { value: 11, label: '荔湾区' },
          { value: 12, label: '天河区' },
          { value: 13, label: '黄浦区' }
        ]},
        { value: 2, label: '东莞市', children: [
          { value: 21, label: '南城' },
          { value: 22, label: '大岭山' }
        ]},
        { value: 3, label: '湛江市', children: [
          { value: 31, label: '赤坎区' },
          { value: 32, label: '霞山区' }
        ]}
      ]
    }
  }
}
</script>