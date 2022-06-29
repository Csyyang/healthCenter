<template>
  <div class="circle-box">
    <span class="circle" :style="`background:${color}`"></span>
    {{ text }}
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
    align-items: center;
  .circle {
    display: inline-block;
    height: 15px;
    width: 15px;
    margin-right: 12px;
    border-radius: 50%;
  }
}
</style>