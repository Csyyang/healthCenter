<template>
  <div class="setting-box">
    <div class="title">
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

    <div>
      <p>{{people}}人参加</p>
      <p>{{tip}}</p>
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
    people: {
      type: Number,
      default: 13243124,
    },
    tip: {
      type: String,
      default: "晚上早点休息，多给大脑一点时间整理思绪吧！",
    },
  },
};
</script>

<style lang="less" scoped>
.setting-box {
  margin-top: 24px;
  padding: 24px 40px;
}
</style>