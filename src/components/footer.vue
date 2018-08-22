<template>
    <div class="menu">
      <flexbox style="width:100%">
        <flexbox-item><router-link to="./home"><div class="flex-demo">首页</div></router-link></flexbox-item>
        <flexbox-item><router-link to="./classify"><div class="flex-demo ">分类</div></router-link></flexbox-item>
        <flexbox-item><router-link to="./Cart"><div class="flex-demo ">购物车</div></router-link></flexbox-item>
        <flexbox-item><router-link to="./my"><div class="flex-demo ">我的</div></router-link></flexbox-item>
      </flexbox>
    </div>
</template>

<script>
import {Flexbox, FlexboxItem} from 'vux'

export default {
    components:{Flexbox, FlexboxItem},
    data(){
        return{

        }
    }
}
</script>

<style lang="less">
.menu{position: fixed;bottom: 0;width: 100%;padding:0;z-index: 999999;
   .flex-demo{text-align: center;position: relative;height: 2.5rem; line-height: 2.5rem; color: #fff;font-size: 1rem;background: linear-gradient(0deg,#19d5fd, #1d62f0, #19d5fd) !important; border-left: 1px solid rgba(255, 255, 255, 0.6);width: 100%;
    i{position: absolute;bottom: 0.35rem;left: 45%}}

}
.vux-flexbox-item{
    width: 25% !important;
    margin: 0 !important;
}
</style>