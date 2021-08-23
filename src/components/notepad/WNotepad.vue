<template>
  <w-modal v-show="appData.isOpen" :data="appData" class>
    <w-note-header @minimize="minimize" @close="close"></w-note-header>
    <div class="no-drag">
      <w-note-content></w-note-content>
    </div>
  </w-modal>
</template>

<script>
import WNoteHeader from './header/NoteHeader.vue'
import WNoteContent from './content/NoteContent.vue'
import WModal from '../modal/WModal'
import { mapMutations } from 'vuex'
export default {
  name: 'WNotepad',
  components: {
    WNoteHeader,
    WModal,
    WNoteContent
  },
  props: {
    appData: {
      type: Object,
      default: () => { }
    }
  },
  methods: {
    ...mapMutations(['minizeWindow', 'closeWindow']),
    minimize () {
      this.minizeWindow(this.appData)
    },
    close () {
      this.closeWindow(this.appData)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
