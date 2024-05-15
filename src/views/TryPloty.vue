<template>
    <el-row :gutter="40">
        <el-col :span="12">
            <el-button plain @click="open">Click to open the Message Box</el-button>
            <div class="half">
                <h2>ECharts</h2>
                <div class="echart" ref="charts1"></div>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="half">
                <h2>Ploty</h2>
                <div class="echart" ref="charts2"></div>
            </div>

        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'

const open = () => {
  ElMessageBox.alert('This is a message', 'Title', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}

import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import Plotly from 'plotly.js-dist'
const charts1 = ref();
const charts2 = ref();

var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter'
};

var trace2 = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: 'scatter'
};

var data = [trace1, trace2];

var layout = {
    plot_bgcolor: 'rgba(0,0,0,0)',
    paper_bgcolor: 'rgba(0,0,0,0)'
}

var option = {
    xAxis: {
        data: [1,2,3,4]
    },
    yAxis: {
        type: 'value'
    },
    series: [
    {
        data: [10, 15, 13, 17],
        type: 'line'
    },{
        data: [16, 5, 11, 9],
        type: 'line'
    }]
};

onMounted(()=>{
    if (charts1.value) {
        const myChart1 = echarts.init(charts1.value);
        myChart1.setOption(option)
        myChart1.setOption({
            toolbox: {
                feature: {
                    saveAsImage: {}, // 保存为图片
                    dataZoom: {},    // 数据区域缩放
                    dataView: {},    // 数据视图
                    restore: {},     // 还原
                    magicType: {}    // 图表类型切换
                }
            }
        });
    }
    if (charts2.value) {
        Plotly.newPlot(charts2.value, data, layout);
    }
})

</script>

<style scoped>
.half {
    background-color: #F6F6F6;
    height: 600px;
}

.echart {
    width: 100%;
    height: 100%;
}
</style>