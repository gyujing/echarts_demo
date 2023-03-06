<template>
  <div class="mark">添加标准线，x轴数据换行</div>
  <div class="main_wrap">
    <div ref="chartRef" id="chart" class="chart_wrap"></div>
  </div>
</template>
<script lang="ts">
export default {
  name: "recovery-chart",
};
</script>
<script lang="ts" setup>
import * as echarts from "echarts";
import { onMounted, ref } from "vue";

//label换行
let xData = ["2023/01/01\n(基线)", "2023/03/03\n(术后3月)", "2023/06/06\n(术后6月)"];
let serieData1 = [13, 6, 6];
let serieData2 = [22, 3, 11];

let option: EChartsOption = {
  tooltip: {
    trigger: "axis",
  },
  color: ["#3FC936", "#FF7617"],
  legend: {
    data: ["左 (健侧)", "右 (患侧)"],
    textStyle: {
      fontSize: 14,
    },
  },
  grid: {
    left: "4%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    axisLine: {
      lineStyle: {
        color: "#C9C9C9",
      },
    },
    axisLabel: {
      interval: 0,
      color: "#323233",
      opacity: 0.7,
      fontSize: 13,
      lineHeight: 20,
    },
    data: xData,
  },
  yAxis: {
    name: "周径 (cm)",
    nameLocation: "end",
    nameTextStyle: {
      color: "#323233",
      opacity: 0.8,
    },
    type: "value",
    minInterval: 5,
  },
  series: [
    {
      name: "左 (健侧)",
      type: "line",
      symbol: "circle",
      symbolSize: 5,
      data: serieData1,
      //标准线
      markLine: {
        label: {
          show: false,
        },
        symbol: ["none", "none"], // none为标线两端的样式为无，可更改
        lineStyle: {
          color: "#F08E89",
          type: "solid",
        },
        data: [
          {
            yAxis: 12,
          },
        ],
      },
    },
    {
      name: "右 (患侧)",
      type: "line",
      symbol: "circle",
      symbolSize: 5,
      data: serieData2,
    },
  ],
};

type EChartsOption = echarts.EChartsOption;

let myChart: echarts.ECharts | null = null;

const chartRef = ref(null);

let initChart = () => {
  myChart = echarts.init(chartRef.value!);
  option && myChart.setOption(option);
};

onMounted(() => {
  initChart();
});
</script>

<style lang="scss" scoped>
.mark {
  padding: 10px;
  color: red;
  font-weight: bold;
  border: 1px solid grey;
}
.main_wrap {
  width: 100%;
  height: 400px;
  background: #ffffff;
  margin-top: 12px;
  .chart_wrap {
    padding: 20px;
    width: 600px;
    padding: 20px;
    height: 355px;
  }
}
</style>
