<template>
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
                        src="/Users/jiapeizou/vue-test/src/assets/KmUdrQ_fw658.webp"
                        alt=""
                    />
                <span>姓名：{{ item }}</span>
                <span>识别时间：{{ item }}</span>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<script setup>

</script>

<style scoped>
.bottom {
  flex: 1;
  width: 100%;
  height: 350px;
  overflow-x: auto; /* 允许横向滚动 */
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