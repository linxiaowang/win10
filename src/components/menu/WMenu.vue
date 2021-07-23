<template>
  <div class="w-menu">
    <div
      class="w-menu-item"
      :class="{ active: activeMenu === menu.name }"
      v-for="menu in menuList"
      :key="menu.name"
      @click="selectMenu(menu)"
    >
      <img class="w-menu-item__img" :src="menu.icon" :alt="menu.name" />
      <div class="w-menu-item__name">{{ menu.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        {
          name: 'chrome',
          icon: require('assets/imgs/icon-chrome.png')
        }
      ],
      activeMenu: ''
    }
  },

  methods: {
    selectMenu (menu) {
      this.activeMenu = menu.name === this.activeMenu ? '' : menu.name
    }
  }
}
</script>

<style lang="less" scoped>
.w-menu {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 30px 0 0 30px;

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    user-select: none;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    &__img {
      width: 30px;
      height: 30px;
      margin-bottom: 5px;
    }

    &__name {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 14px;
      white-space: normal;
      text-overflow: ellipsis;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .active {
    background-color: rgba(255, 255, 255, 0.3);
  }
}
</style>
