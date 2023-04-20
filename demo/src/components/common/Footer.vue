<template>
    <footer>
        <div>
            <img src="../../assets/img/logo02.png" class="logo02" alt="">
            <img src="../../assets/img/foot-factory.png" class="factory" alt="">
        </div>
        <div class="footer-content">
            <ul>
                <li>关于我们</li>
                <li>｜</li>
                <li>联系我们</li>
                <li>｜</li>
                <li>版权声明</li>
                <li>｜</li>
                <li>意见反馈</li>
            </ul>
            <div class="txt">
                <p>Copyright © 2018~2038 小鹿线 www.xuexiluxian.cn 24小时服务热线：010-86483040</p>
                <p class="txt-a">
                    <a href="">《小鹿线用户服务协议》</a><a href="">《小鹿线隐私政策》</a><a href="">京ICP备18061704号</a>
                </p>
            </div>
        </div>
        <div class="footer-weixin">
            <ul>
                <li>
                    <img src="../../assets/img/WechatIMG93.jpeg" alt="" class="weixin">
                    <p>官方微信</p>
                </li>
                <li>
                    <img src="../../assets/img/WechatIMG93.jpeg" alt="" class="weixin">
                    <p>指导老师微信</p>
                </li>
            </ul>
        </div>
    </footer>
</template>
<script setup lang='ts'>

import { ref, reactive } from 'vue'

</script>
<style scoped lang="less">
footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 150px;
    background-color: #3483ff;
    .logo02 {
        width: 172px;
        height: 50px;
        position: relative;
        bottom: 26px;
    }
    .factory {
        height: 110px;
        width: 130px;
        margin-left: 80px;
    }
    .footer-content {
        font-size: 12px;
        ul {
            color: white;
            display: flex;
            text-align: center;
            justify-content: center;
            li {
                margin: 0 10px;
            }
        }
        .txt {
            margin-top: 20px;
            color: white;
            .txt-a {
                margin-top: 18px;
                text-align: center;
                a {
                    color: white;
                }
            }
        }
    }
}
.footer-weixin ul {
    display: flex;
    p {
        font-size: 12px;
    }
    li {
        margin-left: 60px;
    }
    .weixin {
    width: 80px;
    height: 80px;
}
}

</style>