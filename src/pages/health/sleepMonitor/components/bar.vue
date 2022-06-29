<template>
  <div class="box">
    <div class="bar" :id="id"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  props: {
    id: {
      type: String,
      default: "bar-default",
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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: "6%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            axisTick: {
              show: false,
            },
            type: "category",
            data: [
              "06/17",
              "06/18",
              "06/19",
              "06/20",
              "06/21",
              "06/22",
              "06/23",
            ],
          },
        ],
        yAxis: {
          axisLabel: {
            show: false,
          },
        },
        series: [
          {
            name: "浅睡",
            type: "bar",
            barWidth: 10,
            stack: "Search Engine",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              color: "#e0a5e8",
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120],
          },
          {
            name: "深睡",
            type: "bar",
            stack: "Search Engine",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              color: "#8d62d6",
            },
            data: [120, 132, 101, 134, 290, 230, 220],
          },
          {
            name: "快速眼动",
            type: "bar",
            stack: "Search Engine",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              color: "#ff5600",
            },
            data: [60, 72, 71, 74, 190, 130, 110],
          },
          {
            name: "清醒",
            type: "bar",
            stack: "Search Engine",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              color: "#ffaa01",
            },
            data: [62, 82, 91, 84, 109, 110, 120],
          },
          {
            name: "零星小睡",
            type: "bar",
            stack: "Search Engine",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              color: "#5679bf",
            },
            data: [20, 11, 91, 84, 58, 29, 111],
          },
        ],
      };

      // 添加圆角
      option.series[option.series.length - 1].itemStyle = {
        borderRadius: [12, 12, 0, 0],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  padding: 0px 40px 36px;
  .bar {
    width: 670px;
    height: 354px;
  }
}
</style>