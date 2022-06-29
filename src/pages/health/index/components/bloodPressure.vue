<template>
  <div class="blood-pressure">
    <img class="arrow" :src="require('@img/arrow.png')">
    <div class="color-box">
      <div class="blue"></div>
      <div class="green"></div>
      <div class="yellow"></div>
      <div class="orange"></div>
      <div class="red"></div>
      <div class="brown"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.blood-pressure {
  width: 670px;
  height: 54px;
  padding-top: 40px;
  position: relative;
  .arrow {
    width: 26px;
    height: 16px;
    position: absolute;
    top: 0;
  }
  .color-box {
    display: flex;
    justify-content: space-between;
    div {
      width: 105px;
      height: 14px;
      border-radius: 10px;
    }
    .blue {
      background: #1fa4d6;
    }
    .green {
      background: #56bf9c;
    }
    .yellow {
      background: #ffaa01;
    }
    .orange {
      background: #ff5600;
    }
    .red {
      background: #e60000;
    }
    .brown {
      background: #b30000;
    }
  }
}
</style>