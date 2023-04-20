<template>
    <header>
        <div class="header-content">
            <h1 class="content-logo">
                <img src="../../assets/img/logo.png" alt="">
            </h1>
            <div class="content-nav">
                <ul>
                    <li
                    v-for="item in topBar" :key="item.id"
                    :class="item.id == i ? 'active':''"
                    @click="sends(item)">
                      {{item.title}}
                      <div :class="item.id == i ? 'btn':''"></div>
                    </li>

                </ul>
            </div>
            <div class="search-buy-login">
                <div class="content-search">
                    <input type="text" placeholder="请输入搜索课程">
                    <el-icon :size="22" color="#808080" class="logocur" @click="send"><Search /></el-icon>
                </div>
                <div class="content-login">
                  <router-link to="/">登陆/注册</router-link>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup lang='ts'>

import { ref, reactive,watch } from 'vue'
import {Search,ShoppingCart} from '@element-plus/icons-vue'
import {useRouter} from "vue-router";
// import router from '../../router/index'
const send = () => {
  router.push({path:'/Course'})
}
let i = ref(1)
let topBar = ref([
  {
    id:1,title:"首页",name:"Home"
  },
  {
    id:2,title:"课程",name:"Course"
  },
  {
    id:3,title:"会员",name:"sq"
  },
  {
    id:4,title:"简历",name:"sw"
  },
  {
    id:5,title:"博客",name:"sq"
  },
  {
    id:6,title:"其他课程",name:"sq"
  }
])
type m = {
  id:number,
  title:string,
  name:string
}
let router = useRouter()
const sends = (item:m) => {
  i.value = item.id
  router.push({name:item.name})
}
watch(()=>router.currentRoute.value.name,(toPath:unknown)=>{
  if(toPath == 'Home'){
    i.value = 1
  } else if(toPath == 'Course' || 'About'){
    i.value = 2
  }
},{immediate:true})
</script>
<style scoped lang="less">
.content-nav >ul .active {
  color: #3483ff;
}
.content-nav >ul .active .btn {
  width: 36px;
  height: 5px;
  background: #3483ff;
  border-radius: 2px;
  position: absolute;
  bottom: 0;
}
header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    box-shadow: 1px 5px 6px rgba(0, 0, 0, 0.16);
    position: relative;
    z-index: 999;
}

.header-content {
    display: flex;
    justify-content: space-around;
    width: 1200px;
}

.content-logo {
    width: 160px;
    height: 55px;
    margin: 10px 0;
    cursor: pointer;

    img {
        height: 100%;
    }
}

.content-nav {
    width: 1000px;
    height: 75px;

    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 75px;

        li {
            font-size: 18px;
            color: #808080;
            cursor: pointer;
        }
    }
}

.search-buy-login {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 650px;

    .content-search {
        display: flex;
        align-items: center;
        padding: 5px 10px;
        width: 220px;
        height: 36px;
        background: #f0f2f4;
        opacity: 1;
        border-radius: 8px;
        input {
            padding: 0 10px;
            width: 200px;
            height: 40px;
            border: 0;
            border-radius: 8px;
            background-color: #f0f2f4;
            color: #808080;
            font-size: 16px;
            outline: none;
        }
    }
}
.content-login {
    font-size: 18px;
    color: #808080;
    text-align: center;
    cursor: pointer;
}
.logocur {
    cursor: pointer;
}
</style>