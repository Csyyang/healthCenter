<template>
  <div id="health">
    <VNav />

    <div class="annular">
      <Vbar id="bar1" key="bar1"/>
      <Vbar id="bar2" key="bar2" color="#FFAA01" :text="['热量','千卡']" grey="#F2EDE3"/>
    </div>
  </div>
</template>

<script>
import { VNav } from "@/components/index";
import Vbar from "./components/bar.vue";

export default {
  components: {
    VNav,
    Vbar,
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