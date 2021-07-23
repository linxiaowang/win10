<template>
  <div class="footer-right">
    <div class="function-list">
      <div
        class="function-list__item footer-hover"
        v-for="item in functionList"
        :key="item.name"
      >
        <img
          class="function-list__item-img"
          :src="item.icon"
          :title="item.title"
        />
      </div>
      <div class="w-sys-time footer-hover" :title="timeTitle">
        <div class="w-time">{{ wTime }}</div>
        <div class="w-date">{{ wDate }}</div>
      </div>
    </div>
    <div class="desktop-button footer-hover" title="显示桌面"></div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
const weekDay = {
  0: '天',
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六'
}
export default {
  data () {
    return {
      functionList: [
        {
          name: 'battery',
          icon: require('assets/imgs/icon-battery.png'),
          title: '97% 可用'
        },
        {
          name: 'sound',
          icon: require('assets/imgs/icon-sound.png'),
          title: '扬声器静音'
        },
        {
          name: 'wifi',
          icon: require('assets/imgs/icon-wifi.png'),
          title: 'Internet 访问'
        }

      ],
      wTime: '',
      wDate: '',
      timer: null,
      timeTitle: ''
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.wDate = dayjs().format('YYYY/MM/DD')
      this.wTime = dayjs().format('HH:mm')
      this.timeTitle = dayjs().format('YYYY年MM月DD日') + '\n星期' + weekDay[dayjs().day()]
    }, 1000)
  },

  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="less" scoped>
.footer-right {
  display: flex;
}

.desktop-button {
  width: 5px;
  border-left: 1px solid #666;
}

.function-list {
  display: flex;
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    padding: 0 5px;

    &-img {
      width: 80%;
    }
  }
}

.w-sys-time {
  padding: 0 5px;
  text-align: center;
  user-select: none;
}
</style>
