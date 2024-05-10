<template>
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
</template>

<script setup>

</script>

<style scoped>
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
  background-image: url('@/assets/dataScreen-header-center-bg.png');
  background-size: contain;
  background-repeat: no-repeat;
}
</style>