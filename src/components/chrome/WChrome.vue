<template>
  <w-modal v-show="appData.isOpen"  :data="appData" class="">
    <div class="w-chrome">
      <div class="w-chrome__header">header</div>
      <div class="w-chrome__nav no-drag">nav</div>
      <div class="w-chrome__content no-drag">
      </div>
    </div>
  </w-modal>
</template>

<script>
import WModal from '../modal/WModal'
export default {
  name: 'chrome',
  components: { WModal },
  props: {
    appData: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      url: ''
    }
  }

}
</script>

<style lang="less" scoped>
.w-chrome {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fff;

  &__header{
    height: 40px;
    flex-shrink: 0;
  }

  &__nav{
    height: 40px;
  }

  &__content{
    flex: 1;
  }
}
</style>
