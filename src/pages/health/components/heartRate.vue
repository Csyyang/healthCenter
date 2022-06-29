<template>
  <div class="line-chart" :id="id"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  props: {
    id: {
      type: String,
      default: "blood-pressure-default",
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var chartDom = document.getElementById(this.id);
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        xAxis: {
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false
          },
          type: "category",
          boundaryGap: true,
        },
        yAxis: {
          type: "value",
          splitNumber: 3,
          min: function (value) {
            return value.min - 10;
          },
        },
        areaStyle: {
          color: "#F4E4E7",
        },
        grid: {
          left: "8%", // 与容器左侧的距离
          right: "0", // 与容器右侧的距离
          top: "6%", // 与容器顶部的距离
          bottom: "7%", // 与容器底部的距离
        },
        series: [
          {
            data: [51, 52, 53, 67, 100, 60, 88,102,100,],
            symbol: "none",
            type: "line",
            areaStyle: {},
            itemStyle: {
              color: "#FF4D4D",
              lineStyle: {
                color: "#FF4D4D",
                width: 0.5,
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.line-chart {
  width: 670px;
  height: 170px;
}
</style>