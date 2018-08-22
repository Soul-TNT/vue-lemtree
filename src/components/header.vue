<template>
    <div id="heade" >
     <x-header :left-options="{showBack: false}" class="bgcolor">{{msg}}</x-header>
    </div>
</template>
<script>
import { XHeader } from 'vux'
export default {
    name:'heade',
    data(){
        return{
            msg:'柠檬树'
        }
    },
    components: {
    XHeader
  }
}
</script>
<style type="text/css">
#header{
   height: 50px; 
}
</style>


