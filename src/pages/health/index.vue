<template>
  <div id="health">
    <VNav />

    <div class="annular">
      <VBar id="bar1" key="bar1" />
      <VBar id="bar2" key="bar2" color="#FFAA01" :text="['热量','千卡']" grey="#F2EDE3" />
    </div>

    <VCardBox key="first">
      23322
    </VCardBox>

    <VCardBox title="体重管理" date="06/23" name="体重：" value="90.0公斤" key="second">
      23322
    </VCardBox>

    <VCardBox title="血压" date="06/23" name="正常高值：" value="113/92 mmhg" key="second">
      23322
    </VCardBox>

    <VCardBox title="静息心率" date="06/23" name="平均心率：" value="80次/分钟" key="heart">
      23322
    </VCardBox>

    <VCardBox title="身高" date="06/23" name="身高：" value="172cm" key="heart">
      23322
    </VCardBox>

  </div>
</template>

<script>
import { VNav } from "@/components/index";
import { VBar, VCardBox } from "./components/index";

export default {
  components: {
    VNav,
    VBar,
    VCardBox,
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
#health {
  .annular {
    height: 360px;
    background: #f3f6f9;
    padding-top: 50px;
    display: flex;
    justify-content: space-around;
  }
}
</style>