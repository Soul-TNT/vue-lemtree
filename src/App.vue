<template>
  <div id="app">
   
   <transition :name="transitionName">   
      <router-view></router-view>
    </transition>
    
  </div>
  
</template>
<script>
//import { Loading,XInput,Box,Group,XButton} from 'vux'
export default {
  name: 'App',
  data(){
      return {
          transitionName:''
      }
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
  },
    components:{
      //  Loading,
  }
  
}
</script>
<style>
/* 初始化css */
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td { margin:0; padding:0; }
body { background:#fff; color:#555; font-size:14px; font-family: Verdana, Arial, Helvetica, sans-serif; }
td,th,caption { font-size:14px; }
h1, h2, h3, h4, h5, h6 { font-weight:normal; font-size:100%; }
address, caption, cite, code, dfn, em, strong, th, var { font-style:normal; font-weight:normal;}
a { color:#555; text-decoration:none; }
a:hover { text-decoration:underline; }
img { border:none; }
ol,ul,li { list-style:none; }
input, textarea, select, button { font:14px Verdana,Helvetica,Arial,sans-serif; }
table { border-collapse:collapse; }
html {overflow-y: scroll;} 

.clearfix:after {content: "."; display: block; height:0; clear:both; visibility: hidden;}
.clearfix { *zoom:1; }
/* 路由加载动画 */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
/* 全局样式 */
.weui-cells{
     margin-top: 0 !important;
}
.bgcolor{
  background: linear-gradient(30deg, rgb(29, 98, 240), rgb(25, 213, 253)) !important;
}
.index-btn{
    line-height: 1.8rem;
    display: block;
    width: 40%;
    margin: 1rem auto;
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    text-align: center;
}
.index-btn1{
    line-height: 1.8rem;
    display: block;
    width: 40%;
    margin: 1rem auto;
    border: 1px solid rgb(25, 213, 253);
    border-radius: 5px;
    color:rgb(25, 213, 253);
    text-align: center;
}
.index-nav-box{
      position: absolute;
    width: 100%;
    bottom: 5rem;
}
.p-router{
  float: right; padding-right: 2rem; line-height: 2rem; 
}
#login,#regist,#home,#classify{
  width: 100%;
  position: absolute; top: 0; bottom: 0;
}
/* 其他css */

</style>
