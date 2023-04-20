<template>
  <div class="content">
    <div class="top">
      <div>该课程暂无介绍</div>
      <div class="btn">
        <el-button type="danger" round>立即购买</el-button>
        <el-button type="info" round>加入购物车</el-button>
      </div>
    </div>
    <div class="bottom">
          <div>该课程暂无资料</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.content {
  background: #f0f2f4;
  padding: 50px 0;
}
.top {
  padding: 40px 20px;
  width: 1140px;
  height: 145px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 2px #eaeaea;
  background: #fff;
  margin: 0 auto;
}
.btn {
  position: relative;
  left: 900px;
  top: 90px;
}
.bottom {
  padding: 40px 20px;
  width: 1140px;
  height: 145px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 2px #eaeaea;
  background: #fff;
  margin: 25px auto;
}
</style>