<template>
  <div class="img_container">
    <img
      :src="imgSrc"
      :alt="alt"
      :title="title"
      @error="onError"
      @load="onLoad"
      :style="{opacity:errorshow || onloading ? 0 : 1,filter: errorshow?`blur(5px)`:'none','border-radius':`${radius}${sizeType}`}"
    />
    <div class="errorImg" v-if="errorshow">
      <img
        :src="errorSrc"
        alt="img-error"
        :style="{width:`${size[0]}${sizeType}`,height:`${size[1]}${sizeType}`}"
      />
      <slot name="errorMessage"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      default: ""
    },
    errorSrc: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    size: {
      type: Array,
      required: false,
      default: () => {
        return [22, 22]
      }
    },
    sizeType: {
      type: String,
      required: false,
      default: "px"
    },
    radius: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      imgSrc: this.src || "erro",
      errorshow: false,
      onloading: true
    }
  },
  watch: {
    // prop改变
    src: function(v) {
      this.imgSrc = v || "erro"
    }
  },
  methods: {
    onError: function(e) {
      this.errorshow = true
      this.onloading = true
    },
    onLoad: function(e) {
      this.errorshow = false
      this.onloading = false
    }
  }
}
</script>

<style lang="less" scoped>
.img_container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  position: relative;
  & .errorImg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #cdcdcd;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > img {
      // margin-bottom: 0.1rem;
    }
  }
  & > img {
    // max-width: 100%;
    // max-height: 100%;
    height: 100%;
    width: auto;
    display: block;
    transition: opacity 0.3s ease;
  }
}
</style>
