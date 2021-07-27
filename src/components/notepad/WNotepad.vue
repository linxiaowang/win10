<template>
  <div v-show="appData.isOpen">
    <w-notepad-header></w-notepad-header>
  </div>
</template>

<script>
import WNotepadHeader from './header/NotepadHeader.vue'
export default {
  name: 'WNotepad',
  components: {
    WNotepadHeader
  },
  props: {
    appData: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
