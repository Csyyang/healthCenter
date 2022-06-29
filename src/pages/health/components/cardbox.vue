<template>
  <div class="card-box">
    <div class="title-box">
      <span class="title">{{ title }}</span>
      <span class="date">{{ date }}</span>
    </div>

    <slot></slot>

<div class="msg">
    <span>{{ name }}</span>
    <span>{{ value }}</span>
</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "睡眠",
    },
    date: {
      type: String,
      default: "06/23",
    },
    name: {
        type: String,
        default: '睡眠时长：'
    },
    value: {
        type: String,
        default: '7时30分'
    }
  },
};
</script>

<style lang="less" scoped>
.card-box {
  background: #f3f6f9;
  margin-top: 24px;
  padding: 24px 40px;
  .title-box {
    margin-bottom: 36px;
    .title {
        font-size: 32px;
        font-weight: 500;
        margin-right: 16px;
    }
    .date {
        font-size: 28px;
        color: #999999;
    }
  }

  .msg {
    margin-top: 20px;
    span {
        font-size: 28px;
    }
  }
}
</style>