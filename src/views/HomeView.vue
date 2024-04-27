<template>
  <div class="home-container">
    <!-- 标题区 -->
    <div class="img-box">
      <img
        class="logo"
        src="/Users/jiapeizou/vue-test/src/assets/4688.png"
        alt=""
      />
      <h1 class="text">人脸识别系统后台管理</h1>
    </div>
    <!-- 内容区 -->
    <div class="home">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12">
          <div class="card">
            <!-- 时间选择 -->
            <div class="dropdown">
              <el-dropdown>
                <span
                  class="el-dropdown-link"
                  style="color: rgba(3, 228, 234, 255); font-size: 20px"
                >
                  本周数据展示
                  <el-icon class="el-icon--right">
                    <arrow-down />
                  </el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>进1个月</el-dropdown-item>
                    <el-dropdown-item>进半年</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
            <!-- 控制开关 -->
            <div class="switch-box">
              <!-- 风机控制开关 -->
              <div>
                <span style="color: rgba(18, 150, 219, 255); margin-right: 10px"
                  >风机控制</span
                >
                <el-switch v-model="value1" size="large" />
              </div>
              <!-- 电源控制开关 -->
              <div>
                <span style="color: rgba(18, 150, 219, 255); margin-right: 10px"
                  >电源控制</span
                >
                <el-switch v-model="value2" size="large" />
              </div>
            </div>
            <!-- Echarts 图文图表插件 -->
            <div class="echart-box">
              <div class="echart" ref="charts1"></div>
              <div class="echart" ref="charts2"></div>
            </div>
          </div>
        </el-col>

        <el-col :xs="24" :sm="12">
          <div class="card">
            <!-- 视频展示 -->
            <div class="top">
              <div class="right-title">
                <span class="right-text">监控视频画面</span>
              </div>
              <div>
                <video
                  class="video"
                  src=""
                  width="100%"
                  loop
                  autoplay
                  muted
                  controls
                ></video>
              </div>
            </div>
            <!-- 人脸展示 -->
            <div class="bottom">
              <el-scrollbar>
                <div class="scrollbar-flex-content">
                  <div
                    v-for="item in 10"
                    :key="item"
                    class="scrollbar-demo-item"
                  >
                    <img
                      class="user-avatar"
                      src="/Users/jiapeizou/vue-test/src/assets/11111.jpeg"
                      alt=""
                    />
                    <span>姓名：{{ item }}</span>
                    <span>识别时间：{{ item }}</span>
                  </div>
                </div>
              </el-scrollbar>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";
import * as echarts from "echarts";
const value1 = ref(true);
const value2 = ref(true);
const charts1 = ref();
const charts2 = ref();

onMounted(() => {
  if (charts1.value) {
    const myChart1 = echarts.init(charts1.value);

    window.addEventListener("resize", () => {
      myChart1.resize();
    });
    myChart1.setOption({
      title: {
        text: "Stacked Line",
        left: "center",
        textStyle: {
          color: "rgba(245,240,236,0.8)",
        },
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisLabel: {
          textStyle: {
            color: "#fff",
          },
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "#fff",
          },
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
        textStyle: {
          color: "rgba(245,240,236,0.8)",
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "rgba(1,251,251,.5)",
          },
        },
      },
      toolbox: {
        feature: {
          saveAsImage: {},
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
          axisLabel: {
            textStyle: {
              color: "#fff",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#fff",
            },
          },
        },
      ],
      series: [
        {
          name: "总人数",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
      ],
    });
  }
});
</script>


<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
}
.home {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.logo {
  width: 80px;
  height: 80px;
  margin-right: 30px;
}

/* 卡片下沉效果 */
.card:hover {
  transform: translateY(4px); /* 向下移动 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 减少阴影以增强按压效果 */
}
.card {
  position: relative;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(1, 251, 251, 0.5);
  border-right: 1px solid rgba(1, 251, 251, 0.5);
  box-shadow: 5px 5px 8px 3px rgba(22, 105, 131, 0.4);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 700px;
  height: 80%;
  overflow: hidden; /* 确保伪元素不会溢出容器边界 */
}
.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("/Users/jiapeizou/vue-test/src/assets/img-dark.webp");
  background-size: cover;
  background-position: center;
  opacity: 0.8; /* 设置背景图的透明度 */
  z-index: -1; /* 确保背景图位于内容之后 */
}

.switch-box {
  min-height: 86px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-end;
  justify-items: flex-end;
}
.dropdown {
  text-align: center;
  font-size: 18px;
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
.top {
  border-radius: 20px;
}
.right-title {
  text-align: center;
  margin-bottom: 40px;
  height: 30px;
}
.right-text {
  color: rgba(3, 228, 234, 255);
  font-size: 20px;
  position: relative;
}
.right-text::after{
  content: "";
  position: absolute;
  top: 0; 
  left: -50%;
  width: 240px;
  height: 30px;
  background-image: url(/Users/jiapeizou/vue-test/src/assets/dataScreen-header-center-bg.png);
  background-size: contain;
  background-repeat: no-repeat;
}
.bottom {
  flex: 1;
  width: 100%;
  height: 350px;
  overflow-x: auto; /* 允许横向滚动 */
}
/* --人脸展示-- */
.img-box {
  box-sizing: border-box;
  padding: 10px;
  min-height: 120px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 20px;
  border: 1px solid rgba(1, 251, 251, 0.3);
  background-image: url(/Users/jiapeizou/vue-test/src/assets/identification-person-through-facial-face-260nw-2294406649.webp);
  background-size: cover;
  background-position: top -300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  opacity: 0.8;
}
.text {
  color: rgba(1, 251, 251, 0.8);
}
.scrollbar-flex-content {
  display: flex;
  height: 100%;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 200px;
  height: 260px;
  margin: 10px;
  padding: 10px;
  margin-bottom: 0;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  background-color: rgba(245, 253, 254, 0.2);
  border-right: 1px solid rgba(1, 251, 251, 0.5);
  box-shadow: 5px 5px 5px 3px rgba(0, 0, 0, 0.5);
}
.user-avatar {
  width: 80%;
  max-width: 200px;
  min-height: 160px;
  max-height: 200px;
}
</style>