<template>
  <div class="code-editor">
    <div>
      <z-editor
        v-model="content"
        placeholder="请输入内容"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Editor1-1',
  components: {
    ZEditor: () => import('../../../../plugins/components/editor/Editor')
  },
  data() {
    return {
      content: ''
    }
  }
}
</script>