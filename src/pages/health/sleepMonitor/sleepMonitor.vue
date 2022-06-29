<template>
  <div class="sleep-monitor">
    <div style="height: .88rem">
      <van-nav-bar class="nav" title="睡眠" left-arrow @click-left="onClickLeft" />
    </div>

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

      <div class="week-box">
        <VWeek text="一" />
        <VWeek text="二" />
        <VWeek text="三" />
        <VWeek text="四" />
        <VWeek text="今日" :isNow="true" />
        <VWeek text="六" />
        <VWeek text="日" />
      </div>

      <div class="today">
        <img :src="require('@img/now.png')">
        <div>
          <VLegend color="#fdad3e">
            <div class="today-msg">步行<span class="num">1,557</span>步</div>
          </VLegend>
          <VLegend color="#50c3d7">
            <div class="today-msg">呼吸训练<span class="num">0</span>次</div>
          </VLegend>
          <VLegend color="#8d62d7">
            <div class="today-msg">规律起床<span class="num">07：48</span></div>
          </VLegend>
        </div>
      </div>

      <div class="btn-box">
        <van-button block>编辑作息管理</van-button>
      </div>
    </div>

  </div>
</template>

<script>
import { VBar, VLegend, VWeek } from "./components/index";

export default {
  components: {
    VBar,
    VLegend,
    VWeek,
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

.week-box {
  display: flex;
  padding: 0 61px;
  justify-content: space-between;
  background: #f3f6f9;
  margin-bottom: 60px;
}

.today {
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 236px;
    height: 219px;
  }
  .today-msg {
    color: #999999;
    font-size: 28px;
    .num {
      font-size: 48px;
      color: #222;
      margin: 0 8px;
    }
  }
}
.btn-box {
  padding: 60px 135px;
}
.nav {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
}
.sleep-monitor /deep/ .van-button--default {
  border: 2px solid #dde4ef;
}
</style>