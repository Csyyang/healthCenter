<template>
  <div class="v-week">
    <div :class="[isNow?'now':'']">{{text}}</div>
    <img v-if="!isNow" :src="require('@img/asdfa.png')">
    <img v-else :src="require('@img/now.png')">
  </div>
</template>

<script>
export default {
  props: {
    isNow: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="less" scoped>
.v-week {
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    color: #999999;
    font-size: 28px;
    margin-bottom: 24px;
  }
  .now {
    color: #ff5600;
  }
  img {
    width: 42px;
    height: 39px;
  }
}
</style>