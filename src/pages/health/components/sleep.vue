<template>
  <div>
    <div class="sleep">
      <div class="sleep-deep"></div>
      <div class="sleep-deep" style="left: 200px;width:25px;"></div>
      <div class="sleep-time"></div>
    </div>

    <div class="time-box">
      <span>00:30</span>
      <span>08:00</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.sleep {
  width: 670px;
  height: 140px;
  position: relative;
  .sleep-deep {
    position: absolute;
    height: 100%;
    width: 100px;
    border-radius: 12px 12px 0px 0px;
    background: #8d62d6;
    left: 120px;
    z-index: 100;
  }
  .sleep-time {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 14px;
    border-radius: 7px;
    background: #6ec1df;
    z-index: 99;
  }
}

.time-box {
    margin-top: 6px;
    display: flex;
    justify-content: space-between;
    span {
        color: #999;
        font-size: 24px;
    }
}
</style>