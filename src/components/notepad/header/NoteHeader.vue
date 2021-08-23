<template>
  <div class="w-header">
    <div class="w-header__left">无标题 - 记事本</div>
    <div class="w-header__right">
      <div class="w-header__right-item" @click="minimize">
        <w-icon type="zuixiaohua"></w-icon>
      </div>
      <div class="w-header__right-item">
        <w-icon type="maximize"></w-icon>
      </div>
      <div class="w-header__right-item close" @click="closeApp">
        <w-icon type="close"></w-icon>
      </div>
    </div>
  </div>
</template>

<script>
import WIcon from 'comps/basic/WIcon'
export default {
  components: {
    WIcon
  },
  computed: {
    taskList: {
      get () {
        return this.$store.state.taskList
      },
      set (val) {
        this.$store.commit('updateTaskList', val)
      }
    }
  },
  methods: {
    minimize () {
      this.$emit('minimize')
    },
    closeApp () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="less" scoped>
.w-header {
  display: flex;
  justify-content: space-between;
  height: 40px;
  background-color: #fff;

  &__left {
    flex-shrink: 0;
    user-select: none;
    padding: 5px;
  }

  &__right {
    display: flex;

    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      &:hover {
        background-color: #f2f2f2;
      }
    }

    .close {
      &:hover {
        color: #fff;
        background-color: red;
      }
    }
  }
}
</style>
