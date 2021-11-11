<template>
  <div class="demo-overflow-tooltip">
    <div>
      <!-- 简短文字 -->
      <z-overflow-tip
        :content="text1"
        :item-style="shortStyle"
      />
      <!-- 超长省略 -->
      <z-overflow-tip
        :content="text2"
        :item-style="longSingleStyle"
      />
      <!-- 超长省略2行 -->
      <z-overflow-tip
        :content="text3"
        :item-style="longMultipleStyle"
        :line="2"
        overflow-multiple
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OverflowTip1-1',
  components: {
    ZOverflowTip: () => import('../../../../plugins/components/overflow-tip/OverflowTip')
  },
  data() {
    return {
      text1: '这是简短描述',
      text2: '这是一条超长文字这是一条超长文字这是一条超长文字这是一条超长文字',
      text3: '这是一条超长文字这是一条超长文字这是一条超长文字这是一条超长文字这是一条超长文字这是一条超长文字这是一条超长文字这是一条超长文字这是一条超长文字',
      shortStyle: {
        padding: '2px',
        width: '100px',
        border: '1px solid #F2F2F2',
        borderRadius: '4px',
        color: '#3B414F'
      },
      longSingleStyle: {
        padding: '2px',
        width: '200px',
        border: '1px solid #F2F2F2',
        borderRadius: '4px',
        color: '#3B414F'
      },
      longMultipleStyle: {
        padding: '2px',
        width: '300px',
        border: '1px solid #F2F2F2',
        borderRadius: '4px',
        color: '#3B414F'
            }
    }
  }
}
</script>

<style lang="scss" scoped>
  .demo-overflow-tooltip{
    width: 100%;
    text-align: center;
    div {
      margin: 10px 0;
    }
  }
</style>