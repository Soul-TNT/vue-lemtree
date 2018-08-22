<template>
  <div id='home'>
    <!--  -->
       <div class="box2" style=" width: 100%; z-index: 999999999; position: fixed; top: 0; ">
          <swiper :list="list" direction="horizontal" auto :min-moving-distance="20" height="180px"></swiper>
       </div>
        <yd-list theme="3" style=" margin-top: 180px; "> 
        <yd-list-item v-for="item in lists" :key="item">
            <img slot="img" :src="item.img">
            <span slot="title">{{item.title}}</span>
            <yd-list-other slot="other">
                <div>
                    <span class="demo-list-price"><s>¥{{item.price}}</s></span>
                   <!--  <span class="demo-list-del-price">¥{{item.w_price}}</span> -->
                </div>
                <div>¥{{item.w_price}}</div>
            </yd-list-other>
         
        </yd-list-item>
    </yd-list>
    
       <divider>我是有底线的</divider>
   
   <footerTab></footerTab>
  </div>
</template>

<script>
import Vue from 'vue';
import {ListTheme, ListItem, ListOther} from 'vue-ydui/dist/lib.px/list';


Vue.component(ListTheme.name, ListTheme);
Vue.component(ListItem.name, ListItem);
Vue.component(ListOther.name, ListOther);


import { Scroller, Swiper,Divider  } from 'vux'
import footerTab from '@/components/footer'
export default {
  components: {
    Scroller,
    Swiper,
    footerTab,
    Divider 
  },
  methods: {
    load (uuid) {
      const _this = this
      setTimeout(function () {
        _this.$broadcast('pulldown:reset', uuid)
      }, 2000)
    }
  },
  data () {
    return {
      list: [{
        url: '',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534851443476&di=3ae54b98e97e257d6bfbb58e4233f1ca&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170724%2F9e2c7f49719e460ab2ee1aa7f9836516_th.jpg',
        title: '如何挑选最合适的用药？'
      }, {
        url: '',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534851259703&di=4991f36d6309ab6fdc76a4c668961c3e&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01d127599200d9a801215603d2da17.JPG%401280w_1l_2o_100sh.jpg',
        title: '养身茶的由来'
      }, {
        url: '',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534851558684&di=267bb330c090c94c5b4b67e86c5b166d&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171125%2Fa23c0c36dcde4b5188610032097cbede.jpeg',
        title: '来和我预约最好的医生'
      }],
      lists: [
                {img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "药品", price: 156.23, w_price: 89.36},
                {img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "医生推荐", price: 256.23, w_price: 89.36},
                {img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "标题333标题标题标题标题", price: 356.23, w_price: 89.36},
                {img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "标题444标题标题标题标题", price: 456.23, w_price: 89.36},
                {img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg", title: "标题555标题标题标题标题", price: 556.23, w_price: 89.36},
                {img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg", title: "标题666标题标题标题标题", price: 656.23, w_price: 89.36}
            ],
       lists2: [
                    {label: '今日特惠'},
                    {label: '烟灶推荐'},
                    {label: '净水饮水推荐'},
                    {label: '洗碗机推荐'},
                    {label: '电热推荐'},
                    {label: '燃热推荐'},
                    {label: '消毒柜推荐'},
                    {label: '嵌入式推荐'},
                    {label: '商用电器'},
                    {label: '活动说明'}
                ]
    }
  }
}
</script>
<style>
.yd-list-theme3 .yd-list-item{
  width: 45%;
}
.vux-divider{
  margin-bottom: 3rem;
}
</style>
