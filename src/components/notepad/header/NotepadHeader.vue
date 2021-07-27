<template>
  <w-modal class="">
    <div class="w-header">
      <div class="w-header__left">无标题 - 记事本</div>
      <div class="w-header__right">
        <div class="w-header__right-item">
          <w-icon type="zuixiaohua"></w-icon>
        </div>
        <div class="w-header__right-item">
          <w-icon type="maximize"></w-icon>
        </div>
        <div class="w-header__right-item">
          <w-icon type="close"></w-icon>
        </div>
      </div>
    </div>
  </w-modal>
</template>

<script>
import WModal from 'comps/modal/WModal'
import WIcon from 'comps/basic/WIcon'
export default {
  components: {
    WModal,
    WIcon
  }
}
</script>

<style lang="less" scoped>
.w-header {
  display: flex;
  justify-content: space-between;
  height: 40px;
  background-color: #fff;

  &__right {
    display: flex;

    &-item{
      width: 50px;
      height: 40px;
    }
  }
}
</style>
