<!-- 首页 -->
<template>
    <div id = "kid-avatar">
        <img src = "https://s21.ax1x.com/2024/08/17/pACTV4x.jpg" alt = "avatar">
    </div>
    <div id = "contact-me">
        <div class = "dropdown">
            <div class = "dropbtn">
                <p>Keroid</p>
            </div>
            <div class = "dropdown-content">
                <ul>
                    <li><a href = "https://weibo.com/u/5533859086"><img src = "/src/static/icons/weibo.png" border = "0" width = 22px></a></li>
                    <li><a href = "https://s21.ax1x.com/2024/08/18/pAP9G34.png"><img src = "/src/static/icons/QQ.png" width = 20px></a></li>
                    <li><a href = "https://9kidalyu.lofter.com"><img src = "/src/static/icons/lofter.png" width = 20px></a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class = "background">
        <img src = "https://s21.ax1x.com/2024/08/16/pACtbge.jpg" alt = "background">
    </div>
    <ul class = "slidding-box">
        <li>
            <div class="container">
                <router-link to = "/hilt" id = "a1">刀柄
                <p id = "t1">Hilt</p></router-link>
                <img id = "p1" src="https://s21.ax1x.com/2024/08/23/pAFSRy9.jpg" alt="刀柄">
            </div>
        </li>
        <li>
            <div class="container">
                <router-link to="/LostCity" id = "a2">废城
                <p id = "t2">the Lost City</p></router-link>
                <img id  = "p2" src="https://s21.ax1x.com/2024/08/23/pAFSjeI.jpg" alt="废城">
            </div>
        </li>
        <li>
            <div class="container">
                <router-link to="/ExperimentalScience" id = "a3">实验
                <p id = "t3">Experimantal Science</p></router-link>
                <img id = "p3" src="https://s21.ax1x.com/2024/08/17/pACHycT.jpg" alt="实验">
            </div>

        </li>
    </ul>
    <div class = "bottom">
        <div class = "background">
    </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

@import '/src/static/index.css';
</style>
