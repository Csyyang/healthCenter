<template>
  <div>
    <VNav />

    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      <div class="test">2</div>
      <p>2</p>
      <span>2</span>
    </van-cell-group>

    <van-button type="default" block @click="show = true">默认按钮</van-button>

    <VDatetimePicker :show.sync="show" />

  </div>
</template>

<script>
import { VDatetimePicker, VNav } from "@/components/index.js";

export default {
  components: {
    VDatetimePicker,
    VNav,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
};
</script>


<style lang="less">
.test {
  font-size: 20px;
  width: 100px;
}
p {
  height: 20px;
}
</style>