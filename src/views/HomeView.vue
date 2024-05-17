<template>
  <div class="home-container">
    <!-- 标题区 -->
    <Header />
    <!-- 内容区 -->
    <div class="home">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12">
          <div class="card">
            <FaceRecognitionStats />
          </div>
        </el-col>
        <el-col :xs="24" :sm="12">
          <div class="card">
            <!-- 视频展示 -->
            <LiveVideoStream />
            <!-- 人脸展示 -->
            <FacesListVue />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script setup>
import http from "@/api/http"
import Header from "@/components/Heade.vue"
import FaceRecognitionStats from "@/components/FaceRecognitionStats.vue"
import FacesListVue from "@/components/FacesList.vue"
import LiveVideoStream from "@/components/LiveVideoStream.vue"

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
/* 卡片下沉效果 */
.card:hover {
/*  transform: translateY(4px);*/ /* 向下移动 */
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
  background-image: url("@/assets/img-dark.webp");
  background-size: cover;
  background-position: center;
  opacity: 0.8; /* 设置背景图的透明度 */
  z-index: -1; /* 确保背景图位于内容之后 */
}
</style>