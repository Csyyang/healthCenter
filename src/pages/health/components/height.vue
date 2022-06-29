<template>
  <div class="line-chart" :id="id"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  props: {
    id: {
      type: String,
      default: "height-default",
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
        },
        yAxis: {
          type: "value",
          splitNumber: 3,
          min: function (value) {
            return value.min - 10;
          },
          max: function (value) {
            return value.min + 10;
          },
        },
        grid: {
          left: "8%", // 与容器左侧的距离
          right: "0", // 与容器右侧的距离
          top: "6%", // 与容器顶部的距离
          bottom: "7%", // 与容器底部的距离
        },
        series: [
          {
            data: [170, 171],
            symbolSize: 5,
            type: "line",
            itemStyle: {
              color: "#5679BF",
              lineStyle: {
                color: "#5679BF",
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