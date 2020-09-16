<template>
  <span :class="[!pure?'booleanbtn':'']">
    <Button
      :type="type||'primary'"
      :icon="icon"
      :size="size"
      :ghost="ghost"
      :loading="loadingStatus"
      :shape="shape"
      :target="target"
      :disabled="disabled"
      :to="to"
      :custom-icon="icon"
      @click="()=>{clickEvent();checkloading()}"
      v-if="!pure && !custom"
    >
      <slot name="btnText"></slot>
    </Button>
    <div class="button_custom" v-if="custom" @click="()=>{clickEvent();checkloading()}">
      <i
        :class="`iconfont ${custom_icon_class}`"
        :style="{fontSize:`${custom_icon_size}px`,marginRight:'5px'}"
      />
      <slot name="btnText"></slot>
    </div>
    <slot name="default" :status="status" :clickEvent="clickEvent"></slot>
  </span>
</template>
<script>
import { Button, Icon } from "view-design"
export default {
  components: { Button, Icon },
  props: {
    type: {
      type: String,
      required: false
    },
    custom: {
      type: Boolean,
      required: false,
      default: false
    },
    custom_icon_class: {
      type: String,
      required: false
    },
    custom_icon_size: {
      type: Number,
      required: false,
      default: 15
    },
    icon: {
      type: String,
      required: false
    },
    size: {
      type: String,
      required: false,
      default: "default"
    },
    pure: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    long: {
      type: Boolean,
      required: false
    },
    shape: {
      type: String,
      required: false
    },
    to: {
      type: String,
      required: false
    },
    target: {
      type: String,
      required: false
    },
    ghost: {
      type: Boolean,
      required: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    async: {
      type: Boolean,
      required: false,
      default: false
    },
    asyncFun: {
      type: Function,
      required: false
    }
  },
  data: function() {
    return {
      status: false,
      loadingStatus: this.loading
    }
  },
  methods: {
    clickEvent: function() {
      this.status = !this.status
    },
    checkloading: async function() {
      if (this.async) {
        //如果是异步的就开启loading,禁止再次点击
        this.loadingStatus = true
        let res = await this.asyncFun().catch(e => {
          this.loadingStatus = false
        })
        if (res) {
          this.loadingStatus = false
        }
      }
    }
  }
}
</script>
<style scoped>
.booleanbtn {
  padding-left: 0px;
}
.button_custom {
  color: #fff;
  padding: 5px 16px;
  border-radius: 20px;
  background: #01adb3;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  height: 30px;
  transition: all 0.2s ease-in;
  user-select: none;
}
.button_custom:hover {
  background: #01bdc4;
}
</style>
