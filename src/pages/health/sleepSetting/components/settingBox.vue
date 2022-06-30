<template>
  <div class="setting-box">
    <div class="title-left">
      <slot name="img">
        <img :src="require('@img/moon.png')">
      </slot>
      {{ name }}
    </div>
    <div class="icon">
      <img :src="require('@img/label')">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "早睡",
    },
  },
};
</script>

<style lang="less" scoped>
.setting-box {
  margin-top: 24px;
}
</style>