<template>
  <div id='classify'>
      <div style=" height: 10rem; line-height: 10rem; text-align: center; font-size: 2rem; background: #19d5fd; color: #fff; ">欢迎您：LOONG</div>
        <card :header="我的钱包">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span>1130</span>
          <br/>
          余额
        </div>
        <div class="vux-1px-r">
          <span>15</span>
          <br/>
        优惠券
        </div>
        <div class="vux-1px-r">
          <span>0</span>
          <br/>
         卡包
        </div>
        <div>
          <span>88</span>
          <br/>
        足迹
        </div>
      </div>
    </card>
      <yd-cell-group title="我的信息">
        <yd-cell-item arrow href="#" type="link">
            <yd-icon slot="icon" name="order" size=".42rem"></yd-icon>
            <span slot="left">我的订单</span>
            <span slot="right">查看全部订单</span>
        </yd-cell-item>
        <yd-cell-item arrow href="#" type="link">
            <yd-icon slot="icon" name="like-outline" size=".42rem"></yd-icon>
            <span slot="left">我的收藏</span>
            <span slot="right">查看</span>
        </yd-cell-item>
         <yd-cell-item arrow href="#" type="link">
            <yd-icon slot="icon" name="like-outline" size=".42rem"></yd-icon>
            <span slot="left">我的地址</span>
             <span slot="right">天津市南开区</span>
        </yd-cell-item>
         <yd-cell-item arrow href="#" type="link">
            <yd-icon slot="icon" name="like-outline" size=".42rem"></yd-icon>
            <span slot="left">联系电话</span>
             <span slot="right">185-2654-7302</span>
        </yd-cell-item>
    </yd-cell-group>
    
    <yd-cell-group title="联系商家">
        <yd-cell-item arrow href="#" type="link">
            <yd-icon slot="icon" name="order" size=".42rem"></yd-icon>
            <span slot="left">物流信息</span>
            <span slot="right">查看</span>
        </yd-cell-item>
        <yd-cell-item arrow href="#" type="link">
            <yd-icon slot="icon" name="like-outline" size=".42rem"></yd-icon>
            <span slot="left">商家电话</span>
             <span slot="right">400-8000-2266</span>
        </yd-cell-item>
    </yd-cell-group>
  <div style=" margin: 0 1rem; "><router-link to="./Login"><yd-button size="large" bgcolor="#000" color="#FFF">退出</yd-button></router-link></div>
   <footerTab></footerTab> <!-- 暂时使用 -->
  </div>
</template>

<script>
import Vue from 'vue';
import {CellGroup, CellItem} from 'vue-ydui/dist/lib.px/cell';
import {Button, ButtonGroup} from 'vue-ydui/dist/lib.px/button';

Vue.component(CellGroup.name, CellGroup);
Vue.component(CellItem.name, CellItem);
Vue.component(Button.name, Button);
Vue.component(ButtonGroup.name, ButtonGroup);
import { Card } from 'vux'
import footerTab from '@/components/footer'
export default {
  components: {
     Card,
    footerTab,
  },
  methods: {
   
  },
  data () {
    return {
    
    }
  }
}
</script>
<style scoped lang="less">
@import '~vux/src/styles/1px.less';

.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}

</style>
<style>
.yd-cell-title{
      background: #ececec66 !important;
}
</style>
