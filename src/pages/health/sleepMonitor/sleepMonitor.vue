<template>
  <div class="sleep-monitor">
    <van-nav-bar title="睡眠" left-arrow @click-left="onClickLeft" />

    <div class="tab-box">
      <van-tabs v-model="active">
        <van-tab title="周"></van-tab>
        <van-tab title="月"></van-tab>
        <van-tab title="年"></van-tab>
      </van-tabs>
    </div>

    <div class="time-box">
      <div class="time-pick">
        <img :src="require('@img/left.png')">
        <span>2022年6月17日-2022年6月23日</span>
        <img :src="require('@img/right.png')">
      </div>

      <div class="time-text">
        <span class="num">4</span>小时 <span class="num">56</span>分
      </div>

      <VBar />

      <div class="legend">
        <VLegend color="#8d62d6" text="深睡" />
        <VLegend color="#e0a5e8" text="浅睡" />
        <VLegend color="#ff5600" text="快速眼动" />
        <VLegend color="#ffaa01" text="清醒" />
        <VLegend color="#5679bf" text="零星小睡" />
      </div>
    </div>

    <div class="manage">
      <p class="name">作息管理</p>

      <div class="date">
        2022年6月23日 星期四
      </div>
    </div>
  </div>
</template>

<script>
import { VBar, VLegend } from "./components/index";

export default {
  components: {
    VBar,
    VLegend,
  },
  data() {
    return {
      active: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.tab-box {
  background: #f3f6f9;
  padding: 0 175px;
}
.time-box {
  background: #f3f6f9;
  overflow: hidden;
  margin-bottom: 24px;
  .time-pick {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 108px;
    margin-top: 36px;
    margin-bottom: 40px;
    span {
      font-size: 28px;
    }
    img {
      width: 24px;
      height: 28px;
    }
  }

  .time-text {
    text-align: center;
    font-size: 28px;
    color: #999999;
    margin-bottom: 60px;
    .num {
      font-size: 60px;
      font-weight: 500;
      color: #222;
      margin: 0 8px 60px;
    }
  }

  .legend {
    padding: 0 40px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;
  }
}

.manage {
  background: #f3f6f9;
  .name {
    padding: 24px 40px;
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 36px;
  }
  .date {
    text-align: center;
    font-size: 28px;
  }
}
</style>