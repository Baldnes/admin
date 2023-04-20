<template>
  <div class="nav-swiper">
    <div class="nav-swiper-main">
      <div class="swiper-t">
        <ul @mouseleave="mouseOut">
          <li v-for="item in caidan" :key="item.id" @mouseenter="mouseHover(item.id)"
              :class="item.id == curindex ? 'active' : ''">
            <span>{{ item.text }}</span>
            <el-icon>
              <CaretRight/>
            </el-icon>
          </li>
          <div class="active-r" v-if="ishow">
            <div class="active-r-t">
              <h3 class="active-title">基础知识</h3>
              <div>
                <div>知识点：</div>
                <ul v-for="item in erarr" :key="item.id">
                  <li v-for="msg in item.text">
                    {{ msg.name }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="active-r-b" v-for="item in erarr" :key="item.id">
              <ul>
                <li v-for="msg in item.content" @click="send">
                  <img :src="msg.img" alt="">
                  <div>
                    <div class="active-course-title">{{ msg.text }}</div>
                    <div class="active-course-type">{{ msg.dengji }}</div>
                    <div class="active-course-price">{{ msg.price }}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </ul>
        <div class="lun">
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in list" :key="item">
              <img :src="item.image" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <ul class="swiper-b">
        <li>
          <h3>
            <img src="../../assets/img/chuji.png" alt="">
          </h3>
          <div>
            <h4>初级课程</h4>
            <span>入门快，岗位多</span>
          </div>
        </li>
        <li>
          <h3>
            <img src="../../assets/img/zhongji.png" alt="">
          </h3>
          <div>
            <h4>初级课程</h4>
            <span>入门快，岗位多</span>
          </div>
        </li>
        <li>
          <h3>
            <img src="../../assets/img/gaoji.png" alt="">
          </h3>
          <div>
            <h4>初级课程</h4>
            <span>入门快，岗位多</span>
          </div>
        </li>
        <li>
          <h3>
            <img src="../../assets/img/xiangmu.png" alt="">
          </h3>
          <div>
            <h4>初级课程</h4>
            <span>入门快，岗位多</span>
          </div>
        </li>
        <li>
          <h3>
            <img src="../../assets/img/suanfa.png" alt="">
          </h3>
          <div>
            <h4>初级课程</h4>
            <span>入门快，岗位多</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang='ts'>
import {ref, onBeforeMount, reactive, toRefs} from "vue"
import {CaretRight} from "@element-plus/icons-vue"
import {getSliders, newList, erlist} from "../../utils/api/slider"
import router from '../../router/index'
// 轮播图
let list = ref()
// 一级菜单
let caidan = ref()
// 二级菜单
let erarr = ref()
onBeforeMount(() => {
  // axios获取轮播图数据
  getSliders().then(res => {
    list.value = res
  })
  // axios获取一级菜单
  newList().then(res => {
    // console.log(res);
    caidan.value = res
  })
})
// 右侧数据切换
let ishow = ref(false)
let curindex = ref()
const mouseHover = (id: unknown) => {
  ishow.value = true;
  curindex.value = id
  console.log(id);
  erlist({
    erid: id
  }).then(res => {
    erarr.value = res
  })
}
const mouseOut = () => {
  ishow.value = false
  curindex.value = ''
}
const send = () => {
  router.push({path:'/About'})
}
</script>
<style scoped lang="less"> .nav-swiper {
  width: 100%;
  margin-top: 20px;
  height: 600px;
  background: url(../../assets/img/bei.png);
}

.swiper-t > ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 300px;
  height: 100%;
  background-color: #2b283d;
  border-radius: 11px 0 0 0;
  position: relative;
}

.active-r {
  position: absolute;
  top: 0;
  left: 300px;
  z-index: 999;
  width: 750px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 0 11px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .active-r-t {
    padding: 23px 30px;

    div {
      margin-top: 11px;
      display: flex;

      ul {
        margin-top: 11px;
        margin-left: 7px;
        display: flex;

        li + li {
          margin-left: 20px;
        }
      }
    }
  }
}

.swiper-t > ul > li {
  display: flex;
  height: 37px;
  width: 100%;
  color: white;
  font-size: 14px;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 20px;
  cursor: pointer;
}

.nav-swiper-main {
  width: 1200px;
  padding: 47px 0;
  margin: 0 auto;

  .swiper-t {
    width: 1200px;
    display: flex;
    height: 373px;
    border-radius: 11px 11px 0 0;

    .lun {
      width: 900px;
      height: 300px;

      img {
        width: 900px;
        height: 400px;
      }
    }
  }

  .active {
    background: linear-gradient(90deg, #3fe5ff 0%, rgba(62, 222, 255, 0.93) 2%,
    rgba(60, 203, 255, 0.73) 9%, rgba(58, 186, 253, 0.56) 17%, rgba(57, 172,
    255, 0.41) 25%, rgba(55, 160, 255, 0.28) 33%, rgba(54, 150, 255, 0.18) 43%,
    rgba(53, 142, 255, 0.1) 53%, rgba(53, 137, 255, 0.04) 64%,
    rgba(53, 133, 255, 0.01) 77%, rgba(53, 133, 255, 0) 100%);
  }

  .el-carousel {
    height: 373px;
  }

  ::v-deep .el-carousel__container {
    height: 373px;
  }
}

.swiper-b {
  display: flex;
  box-shadow: 0px 60px 60px -30px rgb(195, 225, 255);
  border-radius: 10px;

  li {
    width: 240px;
    height: 133px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 11px 11px;
    text-align: center;
    cursor: pointer;

    div {
      margin-left: 11px;

      h4 {
        font-size: 16px;
        color: #333333;
      }

      span {
        font-size: 12px;
        color: #808080;
      }
    }

    img {
      width: 64px;
      height: 64px;
    }
  }
}

.active-r-b {
  height: 250px;
  background-color: #f5f5f5;
  position: relative;
  bottom: 27px;
}

.active-r-b > ul {
  flex-wrap: wrap;
  display: flex;
  height: 218px;
  padding: 24px 30px;
  justify-content: space-between;
}

.active-r-b > ul > li {
  cursor: pointer;
  background-color: white;
  width: 320px;
  height: 90px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
}

.active-r-b > ul > li img {
  width: 130px;
  height: 90px;
  border-radius: 10px;
}

.active-course-title {
  font-size: 10px;
  color: #333333;
}

.active-course-type {
  font-size: 8px;
  color: #808080;
}

.active-course-price {
  color: #fc5f5f;
  font-size: 10px;
}

.active-r-b > ul > li > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
}
</style>