<template>
  <div id='classify'>
   <yd-checklist v-model="checklist4" :label="true">
        <yd-checklist-item val="aaa">
            <yd-flexbox style="float:  left;">
                <img src="//img12.360buyimg.com/n1/jfs/t2122/170/1006550413/171711/de099a6f/56399d01N67907749.jpg" class="demo-checklist-img">
                <yd-flexbox-item align="top" style="float:  right;padding-top:  1rem;">
                    橙子 单果约300~350g 新鲜水果<br/>
                </yd-flexbox-item>
            </yd-flexbox>
        </yd-checklist-item>
        <yd-checklist-item val="bbb">
            <yd-flexbox style="float:  left;">
                <img src="//img10.360buyimg.com/n1/jfs/t6925/75/2382158459/437865/f3931d24/598be5b1N24d949fe.jpg" class="demo-checklist-img">
                <yd-flexbox-item align="top" style="float:  right;padding-top:  1rem;">
                    南非进口红西柚 6个 
                </yd-flexbox-item>
            </yd-flexbox>
        </yd-checklist-item>
        <yd-checklist-item val="ccc">
            <yd-flexbox style="float:  left;">
                <img src="//img14.360buyimg.com/n1/jfs/t3232/69/539717695/176729/cf1ff3d8/57baa5d1N901ffea5.jpg" class="demo-checklist-img">
                <yd-flexbox-item align="top" style="float:  right;padding-top:  1rem;">
                   展卉 越南进口红心火龙果 3个装中果 
                </yd-flexbox-item>
            </yd-flexbox>
        </yd-checklist-item>
    </yd-checklist>
      
   
   <footerTab></footerTab> <!-- 暂时使用 -->
  </div>
</template>

<script>
import Vue from 'vue';
import {CheckList, CheckListItem} from 'vue-ydui/dist/lib.px/checklist';

Vue.component(CheckList.name, CheckList);
Vue.component(CheckListItem.name, CheckListItem);

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
   
  },
  data () {
    return {
     checklist4: []
    }
  }
}
</script>
<style>
.yd-scrolltab{
    position: fixed;
}
.demo-checklist-img{
        width: 100px;
    height: 100px;
    border: 1px solid #ececec;
    margin-right: 15px;
}
</style>
