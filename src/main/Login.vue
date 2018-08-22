<template>
    <div id='login' style='position: absolute; top: 0; bottom: 0;'>
       <HeaderTab></HeaderTab>  
        <h2 style=" font-size: 2rem; text-align: center; line-height: 4rem; ">{{msg}}</h2>
       <!--  <div class="nav-box">
            <p class="nav-list">
                <router-link class="nav-item" to="/">首页</router-link>
                <router-link class="nav-item" to="/regist">注册</router-link>
            </p>
        </div> -->
        <group>
            <x-input title="" name="" placeholder="请输入手机号" v-model="mobile" keyboard="number"  required></x-input>
            <x-input title="" type="password" placeholder="请输入登录密码" v-model="password"  required></x-input>
            <box gap="10px 25px">
             <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="fetchDatas">登陆</x-button>
            </box>
            
        </group>
         <p>
            <router-link to="/regist" class="p-router">还没有账号？去注册</router-link>
        </p>
      <div class="index-nav-box">
            <router-link class="nav-item index-btn1" to="/home">游客浏览</router-link>
          <router-link class="nav-item index-btn1" to="/">返回展示页</router-link>
      </div>
          
    </div>
    
</template>
<script>
   import HeaderTab from '@/components/header.vue';
import { Loading,XInput,Box,Group,XButton} from 'vux'
export default {
  name: 'login',
  data () {
    return {
      mobile:'',
      password:'',
      msg: '欢迎登陆',
      showLoading: false,
      loadText: '请稍等',
    }
  },
  components:{
    Loading,
    XInput,
    XButton,
    Group,
    Box,
    HeaderTab,
  },
    methods:{
      fetchDatas(){
           this.$vux.toast.text('登录成功');
           this.$router.push({name:'home'})
      }
    }
}
</script>

<style type="text/css">

</style>