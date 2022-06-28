<template>
  <div id="health">
    <VNav />

    <div class="annular">
      <VBar id="bar1" key="bar1" />
      <VBar id="bar2" key="bar2" color="#FFAA01" :text="['热量','千卡']" grey="#F2EDE3" />
    </div>

    <VCardBox>
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