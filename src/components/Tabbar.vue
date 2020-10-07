<template>
    <div class="tabbar">
        <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" >
            <van-tabbar-item icon="home-o">标签</van-tabbar-item>
            <van-tabbar-item icon="search">标签</van-tabbar-item>
            <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
    components:{
        [Tabbar.name]:Tabbar,
        [TabbarItem.name]: TabbarItem
    },
    data() {
        return {
        active: 0,
        };
  },
}
</script>
<style lang="scss">
.tabbar{
    .van-tabbar-item__text{
        font-weight: 600;
    }
}
</style>