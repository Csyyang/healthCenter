
<template>
  <div id="v-nav">
    <div class="v-nav-box">
      <van-nav-bar left-arrow>
        <template #title>
          <div class="title-box">
            <div :class="getBgClass" />

            <div :class="[selected === '0'?'white':'']" @click="changeSele('0')">体检</div>
            <div :class="[selected === '1'?'white':'']" @click="changeSele('1')">健康</div>
            <div :class="[selected === '2'?'white':'']" @click="changeSele('2')">诊疗</div>
          </div>
        </template>
      </van-nav-bar>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["selected"]),
    getBgClass() {
      return {
        bg: true,
        left: this.selected === "0",
        middle: this.selected === "1",
        right: this.selected === "2",
      };
    },
  },
  methods: {
    changeSele(val) {
      if (val === this.selected) return;

      this.$store.commit("navBar/changeSelected", val);

      if (val === "1") {
        this.$router.push("/healthCenter/test");
      }
      if (val === "0") {
        this.$router.push("/healthCenter/index");
      }
    },
  },
};
</script>

<style lang="less" scoped>
#v-nav {
    height: 88px;
  .v-nav-box {
    position: fixed;
    top: 0;
    z-index: 100000;
    width: 100%;
  }
}

.title-box {
  position: relative;
  width: 460px;
  height: 70px;
  border-radius: 40px;
  background: #e3e9f2;
  border: 2px solid #dde4ef;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    font-size: 28px;
    color: #222;
    z-index: 100;
  }

  .bg {
    height: 60px;
    width: 150px;
    position: absolute;
    border-radius: 35px;
    background: #5679bf;
    z-index: 0;
    transition: all 0.5s;
  }

  .left {
    left: 5px;
  }

  .middle {
    left: 155px;
  }

  .right {
    right: 5px;
  }

  .white {
    color: #fff;
  }
}
/deep/ .van-nav-bar__title {
  max-width: 70%;
}
</style>
