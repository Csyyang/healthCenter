<template>
  <div class="circle-box">
    <span class="circle" :style="`background:${color}`"></span>
    <slot>{{ text }}</slot>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="less" scoped>
.circle-box {
    display: flex;
    align-items: baseline;
  .circle {
    display: inline-block;
    height: 16px;
    width: 16px;
    margin-right: 12px;
    border-radius: 50%;
  }
}
</style>