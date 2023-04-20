<template>
    <Header></Header>
    <div>
        <div class="back" v-for="item in list" :key="item.id">
            <div class="back-course">
                <div class="course-t">
                    <div>课程</div>
                    <div>
                        <el-icon>
                            <ArrowRightBold />
                        </el-icon>
                    </div>
                    <div>{{ item.state }}</div>
                    <div>
                        <el-icon>
                            <ArrowRightBold />
                        </el-icon>
                    </div>
                    <div>{{ item.text }}</div>
                </div>
                <div class="course">
                    <h1>{{ item.text }}</h1>
                    <div class="course-b">
                        <ul>
                            <li>
                                <img src="https://oss.xuexiluxian.cn/xiaoluxian-vcr/4820e28844b04e9391cba571b5e1c7ae.png" alt="">
                            </li>
                            <li class="li-auto">
                                <div>{{ item.teach }}</div>
                                <div>{{ item.teachs }}</div>
                            </li>
                        </ul>
                        <ul>
                            <li>难度 {{ item.nan }}</li>
                            <li>时长 {{ item.time }}</li>
                            <li>学习人数 {{ item.student }}</li>
                            <li>综合评分 {{ item.pinfen }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="tittle-t">
          <div class="title">
            <div :class="i == 1 ? 'active' : ''" @click="one()">课程章节
              <div :class="i == 1 ? 'yan':''"></div>
            </div>
            <div :class="i == 2 ? 'active' : ''" @click="two()">下载资料
              <div :class="i == 2 ? 'yan':''"></div>
            </div>
          </div>
        </div>
      <div>
        <First v-if="flag"></First>
        <Last v-if="!flag"></Last>
      </div>
    </div>
    <Footer></Footer>
</template>
<script setup lang='ts'>

import { ref, reactive,onBeforeMount } from 'vue'
import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';
import { ArrowRightBold } from "@element-plus/icons-vue";
import {about} from '../utils/api/about'
import First from '../components/detailed/First.vue'
import Last from '../components/detailed/Last.vue'
let list = ref()
onBeforeMount(()=>{
    about().then(res => {
        // console.log(res);
        list.value = res
    })
})
let i = ref<number>(1)
let flag = ref<boolean>(true)
const one = ()=>{
  i.value = 1
  flag.value = true
}
const two = ()=>{
  i.value = 2
  flag.value = false
}
</script>
<style scoped>
.back {
    background-color: rgb(145, 158, 255);
    width: 100%;
    height: 200px;
    z-index: -1;
}
.back-course {
    width: 1140px;
    height: 100%;
    margin: 0 auto;
    padding: 20px 0;
}
.course {
    color: white;
    margin-top: 30px;
}
.course h1 {
    font-size: 24px;
}
.course-t {
    display: flex;
    color: white;
}
.course-t>div {
    font-size: 16px;
    margin-right: 10px;
}
.course-b{
    margin-top: 10px;
    display: flex;
}
.course-b ul {
    display: flex;
    align-items: center;
    margin-right: 100px;
}
.course ul:first-child li {
    margin-right: 10px;
}
.course ul:last-child li {
    margin-right: 30px;
}
.course-b >ul li img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
}
.course-b ul li {
    font-size: 16px;
}
.tittle-t{
    width: 100%;
    height: 103px;
    background-color: #fff;
    box-shadow: 1px 5px 6px rgba(0, 0, 0, 0.16);
}
.title {
  width: 1140px;
  margin: 0 auto;
  display: flex;
  padding-top: 35px;
}
.title>div {
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  margin-right: 100px;
}
.active {
  color: #3483ff;
}
.yan {
  margin-top: 10px;
  background: #3483ff;
  width: 79px;
  height: 5px;
  border-radius: 20px;
}
</style>