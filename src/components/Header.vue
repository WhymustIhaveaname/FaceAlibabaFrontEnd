<template>
    <div class="img-box">
      <img
        class="logo"
        src="@/assets/logo.png"
        alt=""
      />
      <h1 class="text">人脸识别系统后台管理</h1>
    </div>
</template>

<script setup>

</script>

<style scoped>
.img-box {
  box-sizing: border-box;
  padding: 10px;
  min-height: 120px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 20px;
  border: 1px solid rgba(1, 251, 251, 0.3);
  background-image: url('@/assets/identification-person-through-facial-face-260nw-2294406649.webp');
  background-size: cover;
  background-position: top -300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  opacity: 0.8;
}

.logo {
  width: 80px;
  height: 80px;
  margin-right: 30px;
}
.text {
  color: rgba(1, 251, 251, 0.8);
}
</style>