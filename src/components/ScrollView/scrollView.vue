<template>
  <div class="scroll_content">
    <div class="scroll_conrainer" ref="scroll_conrainer">
      <slot name="default"></slot>
    </div>
    <div class="pulldownUpdate" v-show="pullDownRefresh">loading...</div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  props: {
    options: {
      type: Object,
      required: false,
      default: () => {
        return {
          scrollX: false,
          scrollY: true,
          click: true
        }
      }
    }
  },
  data() {
    return {
      pullDownRefresh: false,
      scroll: null
    }
  },
  destroyed: function() {
    this.scroll.destroy()
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.scroll_conrainer, this.options)
      this.scroll.on("pullingDown", () => {
        console.log("loading...")
        this.pullDownRefresh = true
        setTimeout(() => {
          console.log("加载成功！")
          this.pullDownRefresh = false
          this.scroll.finishPullDown()
        }, 1000)
      })
    })
  }
}
</script>

<style lang="less" scoped>
.scroll_content {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  .pulldownUpdate {
    width: 100%;
    height: 0.8rem;
    background: red;
    position: absolute;
    top: 0;
    left: 0;
  }
}
.scroll_conrainer {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
