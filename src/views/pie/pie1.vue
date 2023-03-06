<template>
  <div class="mark">标签对齐</div>
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

let xData = ["2023/01/01\n(基线)", "2023/03/03\n(术后3月)", "2023/06/06\n(术后6月)"];
let serieData1 = [
  { value: 1048, name: "Search Engine" },
  { value: 735, name: "Direct" },
  { value: 580, name: "Email" },
  { value: 484, name: "Union Ads" },
  { value: 300, name: "Video Ads" },
];
let serieData2 = [22, 3, 11];

let option: EChartsOption = {
  tooltip: {
    trigger: "item",
    textStyle: {
      lineHeight: 24,
      fontSize: 16,
      fontFamily: "SourceHanSansCN-Normal",
    },
    formatter: "{b}：{c} （{d}%）",
  },
  legend: {
    orient: "horizontal",
    bottom: "bottom",
  },
  series: [
    {
      name: "实有人口",
      type: "pie",
      radius: [0, "55%"],
      data: serieData1,
      label: {
        show: true,
        alignTo: "edge",
        formatter: "{name|{b}} \n {num|{c}}",
        minMargin: 5,
        edgeDistance: 15,
        lineHeight: 20,
        fontSize: 12,
        rich: {
          num: {
            fontSize: 12,
            color: "#999",
          },
        },
      },
      labelLine: {
        length: 15,
        length2: 0,
        maxSurfaceAngle: 80,
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
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
    width: 500px;
    padding: 20px;
    height: 355px;
  }
}
</style>
