<template>
    <Header></Header>
        <div class="course-filter">
            <div class="filter-main">
                <div class="filter-item">
                    <div class="item-title">课程方向：</div>
                    <ul>
                        <li class="filter-all" @click="send">全部</li>
                        <li v-for="item in one" :key="item.id" @click="add(item.id)"
                            :class="item.id == four ? 'active' : ''">{{ item.name }}</li>
                    </ul>
                </div>
                <div class="filter-item">
                    <div class="item-title">课程分类：</div>
                    <ul v-for="msg in five" :key="msg.id">
                        <li class="filter-all">全部</li>
                        <li v-for="item in msg.erlist" :key="item.id">{{ item.name }}</li>
                    </ul>
                </div>
                <div class="filter-item">
                    <div class="item-title">课程难度：</div>
                    <ul>
                        <li class="filter-all">全部</li>
                        <li>初级</li>
                        <li>中级</li>
                        <li>高级</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="course-list">
            <div class="list-main">
                <div class="list-t">
                    <ul>
                        <li>综合</li>
                        <li>|</li>
                        <li>最新课程</li>
                        <li>|</li>
                        <li>最多购买</li>
                        <li>|</li>
                        <li class="list-title">
                            <span>价格</span>
                            <div>
                                <el-icon>
                                    <DCaret />
                                </el-icon>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <el-checkbox label="免费课程" />
                        <el-checkbox label="会员免费课程" />
                    </div>
                </div>
                <ul class="list-c" v-for="res in five">
                    <li v-for="item in res.imgs" :key="item.id" @click="sends">
                        <img :src='item.img' alt="">
                        <div class="course-content">
                            <h3>{{ item.text }}</h3>
                            <div class="ms">
                                {{ item.ji }}
                            </div>
                            <div class="price">
                                <div class="price-vip">会员专享</div>
                                <div class="price-total">￥{{ item.price }}</div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="list-b">
                    <el-pagination background layout="prev, pager, next" :total="30" />
                </div>
            </div>
        </div>
    <Footer></Footer>
</template>
<script setup lang='ts'>

import { ref, reactive, onBeforeMount } from 'vue'
import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';
import { DCaret } from '@element-plus/icons-vue'
import { course, fen, erfen, erfens } from '../utils/api/ke'
import router from "../router";
let one = ref()
let two = ref()
let three = ref()
let four = ref()
let five = ref()
onBeforeMount(() => {
    course().then(res => {
        one.value = res
    })
    fen().then(res => {
        five.value = res
    })
    erfen().then(res => {
        three.value = res
    })
})
const add = (id: number) => {
    erfens({
        id: id
    }).then(res => {
        four.value = id
        five.value = res
    })
}
const send = () => {
    four.value = '';
    fen().then(res => {
        five.value = res
    })
}
const sends = () => {
  router.push({path:'/About'})
}
</script>
<style scoped lang="less">
.course-filter {
    width: 100%;
    height: 312px;
    background-color: #f3f5f9;
}

.filter-main {
    width: 1140px;
    height: 312px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

}

.filter-item {
    display: flex;
    align-items: center;
}

.filter-item>ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
}

.filter-item>ul li {
    border-radius: 5px;
    line-height: 30px;
    padding: 0 10px;
    margin-right: 10px;
    font-size: 14px;
    font-weight: 400;
    color: #515759;
    cursor: pointer;
}

.item-title {
    font-size: 14px;
    font-weight: bold;
    color: #333333;
}

.filter-item>ul .filter-all {
    width: 50px;
    line-height: 30px;
    text-align: center;
    color: #388fff;
    font-size: 14px;
    background: rgba(44, 128, 255, 0.1);
    border-radius: 5px;
}

.course-list {
    padding: 50px;
    background-color: #fff;
}

.list-main {
    width: 1140px;
    margin: 0 auto;
}

.list-t {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.list-t>ul {
    display: flex;
}

.list-t>ul li {
    margin-right: 16px;
    font-size: 14px;
    font-weight: 400;
    color: #515759;
    cursor: pointer;
}

.list-title {
    display: flex;
}

.list-c {
    width: 1200px;
    display: flex;
    flex-wrap: wrap;

    li {

        margin: 38px 30px 0 0;
        width: 270px;
        height: 275px;
        background: #ffffff;
        box-shadow: 1px 3px 3px rgba(27, 39, 94, 0.1);
        border-radius: 6px;
        cursor: pointer;
        transition: all 1.5s ease;


        img {
            width: 270px;
            height: 165px;
        }
    }

    li:hover {
        box-shadow: 5px 15px 15px rgb(193, 193, 193);
    }

    .course-content {
        padding: 7px 16px;
        height: 110px;
        display: flex;
        flex-direction: column;

        .ms {
            margin-top: 20px;
        }

        h3 {
            font-size: 17px;
            color: #333333;
        }

        .price {
            display: flex;

            .price-total {
                font-size: 14px;
                color: #ff727f;
                line-height: 18px;
            }
        }

        div {
            font-size: 12px;
            margin: 7px 0;
            color: #808080;

            .price-vip {
                background: linear-gradient(90deg, #ff928e 0%, #fe7062 99%);
                border-radius: 16px 0 16px 0;
                text-align: center;
                color: white;
                width: 68px;
                height: 18px;
                line-height: 18px;
            }
        }
    }
}

.list-b {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}

.filter-item>ul .active {
    color: #388fff;
    background: rgba(44, 128, 255, 0.1);
}</style>