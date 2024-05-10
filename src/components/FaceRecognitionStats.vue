<template>
    <!-- 时间选择 -->
    <div class="dropdown">
        <el-dropdown @command="handleCommand">
        <span
            class="el-dropdown-link"
            style="color: rgba(3, 228, 234, 255); font-size: 20px"
        >
            {{timeRange}}数据展示
            <el-icon class="el-icon--right">
            <arrow-down />
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
            <el-dropdown-item command="近7天">近7天</el-dropdown-item>
            <el-dropdown-item command="近1个月">近1个月</el-dropdown-item>
            <el-dropdown-item command="近半年">近半年</el-dropdown-item>
            </el-dropdown-menu>
        </template>
        </el-dropdown>
    </div>
    <!-- 控制开关 -->
    <div class="switch-box">
        <!-- 风机控制开关 -->
        <div>
            <span style="color: rgba(18, 150, 219, 255); margin-right: 10px">风机控制</span>
            <el-switch v-model="value1" size="large" />
        </div>
        <!-- 电源控制开关 -->
        <div>
            <span style="color: rgba(18, 150, 219, 255); margin-right: 10px">电源控制</span>
            <el-switch v-model="value2" size="large" />
        </div>
    </div>
    <!-- Echarts 图文图表插件 -->
    <div class="echart-box">
        <div class="echart" ref="charts1"></div>
        <div class="echart" ref="charts2"></div>
    </div>     
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { ArrowDown } from "@element-plus/icons-vue";


const value1 = ref(true);
const value2 = ref(true);
const charts1 = ref();
const charts2 = ref();
const timeRange = ref('近7天')

const handleCommand = (command)=>{
  timeRange.value = command
  // http.getTimeRangeData(command)
}

onMounted(() => {
  // http.getTimeRangeData(timeRange.value)
  if (charts1.value) {
    const myChart1 = echarts.init(charts1.value);

    window.addEventListener("resize", () => {
      myChart1.resize();
    });
    myChart1.setOption({
      title: {
        text: "Stacked Line",
        left: "center",
        textStyle: { color: "rgba(245,240,236,0.8)" },
      },
      tooltip: { trigger: "axis" },
      legend: {
        data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisLabel: {
          textStyle: { color: "#fff" },
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          textStyle: { color: "#fff" },
        },
      },
      series: [
        {
          name: "每日员工人脸识别总人数",
          type: "line",
          stack: "Total",
          data: [120, 132, 101, 134, 90, 230, 210],
          lineStyle: {
            color: "rgb(226,135,67)",
          },
          itemStyle: {
            color: "rgb(226,135,67)", // 设置数据点和tooltip图例标记的颜色为红色
          },
        },
        {
          name: "每日非员工人脸识别总人数",
          type: "line",
          stack: "Total",
          data: [220, 182, 191, 234, 290, 330, 310],
          lineStyle: {
            color: "rgba(1,251,251,.8)",
          },
          itemStyle: {
            color: "rgba(1,251,251,.8)",
          },
        },
      ],
    });
  }
  if (charts2.value) {
    const myChart2 = echarts.init(charts2.value);

    window.addEventListener("resize", () => {
      myChart2.resize();
    });
    myChart2.setOption({
      title: {
        text: "Stacked Area Chart",
        left: "center",
        textStyle: { color: "rgba(245,240,236,0.8)" },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: { backgroundColor: "rgba(1,251,251,.5)" },
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLabel: { textStyle: { color: "#fff" } },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: { textStyle: { color: "#fff" } },
        },
      ],
      series: [
        {
          name: "总人数",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: { focus: "series" },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
      ],
    });
  }
});

</script>

<style scoped>
.dropdown {
  text-align: center;
  font-size: 18px;
}
.switch-box {
  min-height: 86px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-end;
  justify-items: flex-end;
}
.echart-box {
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* 这将使 echart-box 占据所有剩余的空间 */
  gap: 20px;
  height: 0; /*??????? */
}
.echart {
  box-sizing: border-box;
  width: 100%;
  flex: 1;
  background-color: rgba(183, 227, 249, 0.1);
  border-radius: 20px;
  padding: 20px;
  border: 1px solid rgba(1, 251, 251, 0.2);
  box-shadow: inset 0 0 10px rgba(22, 105, 131, 0.4); /* 内发光 */
}

</style>