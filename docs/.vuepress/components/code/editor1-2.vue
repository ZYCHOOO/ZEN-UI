<template>
  <div class="code-editor">
    <div>
      <z-editor
        v-model="content"
        :max="1800"
        show-word-limit
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Editor1-2',
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