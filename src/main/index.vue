<template>
    <div id='index' class="bgcolor" style="position: absolute;width: 100%;top: 0;bottom: 0;">
     
        <h2 style=" font-size: 2rem; text-align: center; line-height: 4rem; line-height: 10rem;color:#fff;">{{msg}}</h2>
        <div class="nav-box index-nav-box">
            <p class="nav-list">
                <router-link class="nav-item index-btn" to="/Login">登陆页</router-link>
                <router-link class="nav-item index-btn" to="/regist">注册</router-link>
            </p>
        </div>
        
    </div>
</template>
<script>

export default {
  name: 'index',
  data () {

    return {
      msg: '小柠欢迎您'
    }
  },
  components:{
     
  }
}
</script>

<style type="text/css">

</style>