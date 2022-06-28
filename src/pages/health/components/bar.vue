<template>
  <div class="box">
    <div :id="id" class="main"></div>
    <div class="text-box">
      <div class="text" :style="`color: ${color}`">{{ text[0] }}</div>
      <div class="value">{{ toThousands(12000) }}</div>
      <div class="text">{{ text[1] }}</div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  props: {
    id: {
      type: String,
      default: "test",
    },
    color: {
      type: String,
      default: "#5679BF",
    },
    // 暗色环颜色
    grey: {
        type: String,
        default: "#e2e2e2"
    },
    // 百分比
    value: {
      type: Number,
      default: 70,
    },
    text: {
      type: Array,
      default: () => ["步数", "步"],
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
          show: false,
        },
        angleAxis: {
          max: 100, // 满分
          clockwise: true, // 逆时针
          // 隐藏刻度线
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        radiusAxis: {
          type: "category",
          // 隐藏刻度线
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        polar: {
          center: ["50%", "50%"],
          radius: "180%", //图形大小
        },
        series: [
          {
            type: "bar",
            data: [
              {
                name: "作文得分",
                value: this.value,
                itemStyle: {
                  color: this.color,
                },
              },
            ],
            coordinateSystem: "polar",
            roundCap: true,
            barWidth: 10,
            barGap: "-100%", // 两环重叠
            z: 2,
          },
          {
            // 灰色环
            type: "bar",
            data: [
              {
                value: 100,
                itemStyle: {
                  color: this.grey,
                },
              },
            ],
            coordinateSystem: "polar",
            roundCap: true,
            barWidth: 10,
            barGap: "-100%", // 两环重叠
            z: 1,
          },
        ],
      };

      option && myChart.setOption(option);
    },
    toThousands(num = 0) {
      return num.toString().replace(/\d+/, function (n) {
        return n.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
      });
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  .main {
    width: 260px;
    height: 260px;
  }
  .text-box {
    padding: 43px 0;
    top: 0;
    width: 260px;
    height: 260px;
    text-align: center;
    position: absolute;
    .text {
      font-size: 32px;
      color: #999;
    }
    .value {
      font-size: 48px;
      padding: 12px 0;
      font-weight: 500;
    }
  }
}
</style>