<template>
    <div class="new-course">
        <div class="new-course-main">
            <div class="new-course-t">
                <div class="title-hot">
                    <div class="hot">HOT</div>
                    <div class="hot-c"></div>
                </div>
                <div class="title-txt">新上好课</div>
            </div>
            <ul class="new-course-b">
                <li v-for="item in listke" @click="send">
                    <img :src="item.imgs" alt="">
                    <div class="course-content">
                        <h3>{{ item.text }}</h3>
                        <div class="ms">
                            高级 · {{ item.content }}人报名
                        </div>
                        <div class="price">
                            <div class="price-vip">会员专享</div>
                            <div class="price-total">￥{{ item.price }}</div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="new-course-total">
                <div class="new-course-t">
                    <div class="title-hot">
                        <div class="hot">HOT</div>
                        <div class="hot-c"></div>
                    </div>
                    <div class="title-txt">推荐好课</div>
                </div>
                <div class="tuijian">
                    <div>
                        <img src="../../assets/img/tuijain.png" alt="" class="tuimg">
                    </div>
                    <ul class="course-tuijian">
                        <li v-for="item in tuilist" :key="item.id" @click="send">
                            <img :src="item.imgs"
                                alt="">
                            <div class="content">
                                <h3>{{ item.text }}</h3>
                                <div class="as">
                                    高级 · {{ item.content }} 人报名
                                </div>
                                <div class="pri">
                                    <div class="pri-vip">会员专享</div>
                                    <div class="pri-total">￥{{ item.price }}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>

import { ref, reactive, onBeforeMount } from 'vue'
import { kecheng,tuijain } from "../../utils/api/course"
import router from '../../router/index'
let listke = ref()
let tuilist = ref()
onBeforeMount(() => {
    kecheng().then(res => {
        listke.value = res
    })
    tuijain().then(res => {
        tuilist.value = res
    })
})
const send = () => {
    router.push({path:'/About'})
}
</script>
<style scoped lang="less">
.new-course {
    padding: 38px 0;

    .new-course-main {
        width: 1200px;
        margin: 0 auto;

        .new-course-t {
            display: flex;

            .title-txt {
                margin-left: 11px;
                font-size: 23px;
                color: #333333;
                position: relative;
            }

            .title-txt:after {
                content: "";
                z-index: -1;
                position: absolute;
                bottom: 0;
                left: -10%;
                width: 140%;
                height: 9px;
                background: linear-gradient(90deg, #fbfb4f 0%, #fea935 100%);
                border-radius: 5px;
            }
        }
    }

    .title-hot {
        display: flex;

        .hot {
            width: 65px;
            line-height: 25px;
            text-align: center;
            color: #ffffff;
            border-radius: 5px 0 5px 5px;
            background: linear-gradient(90deg, #ff727f 0%, #fc685c 100%);
        }

        .hot-c {
            width: 0;
            height: 0;
            border: 3px solid #fc685c;
            border-bottom-color: transparent;
            border-right-color: transparent;
        }
    }

    .new-course-b {
        width: 1200px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        li {

            margin-top: 38px;
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
}

.new-course-total {
    margin-top: 40px;

    .tuijian {
        margin-top: 40px;
        display: flex;

        .tuimg {
            width: 278px;
            height: 558px;
        }

        ul {
            display: flex;
            justify-content: space-between;
            
            flex-wrap: wrap;
            width: 900px;
            height: 558px;
            margin-left: 33px;
            li {
                width: 270px;
                height: 265px;
                background: #ffffff;
                box-shadow: 1px 3px 3px rgba(27, 39, 94, 0.1);
                border-radius: 6px;
                cursor: pointer;
                transition: all 1.5s ease;
            }
            li:hover {
                box-shadow: 5px 15px 15px rgb(193, 193, 193);
            }
        }
    }
}

.course-tuijian {
    img {
        width: 270px;
        height: 165px;
    }

    .content {
        padding: 7px 16px;
        height: 110px;
        display: flex;
        flex-direction: column;

        .as {
            margin-top: 10px;
        }

        h3 {
            font-size: 16px;
            color: #333333;
        }

        .pri {
            display: flex;

            .pri-total {
                font-size: 14px;
                color: #ff727f;
                line-height: 18px;
            }
        }

        div {
            font-size: 12px;
            margin: 4px 0;
            color: #808080;

            .pri-vip {
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
</style>