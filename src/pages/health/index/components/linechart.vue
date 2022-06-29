<template>
  <div class="line-chart" :id="id"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  props: {
    id: {
      type: String,
      default: "line-default",
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
          type: "category",
          boundaryGap: true,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
          splitNumber: 3,
          min: function (value) {
            return value.min - 10;
          },
        },
        areaStyle: {
          color: "#D3EAE6",
        },
        grid: {
          left: "8%", // 与容器左侧的距离
          right: "0", // 与容器右侧的距离
          top: "6%", // 与容器顶部的距离
          bottom: "7%", // 与容器底部的距离
        },
        series: [
          {
            data: [80, 80, 81, 83, 82, 80, 79],
            symbolSize: 5,
            type: "line",
            areaStyle: {},
            itemStyle: {
              color: "#56BF9C",
              lineStyle: {
                color: "#56BF9C",
                width: 1,
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