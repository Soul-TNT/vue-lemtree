<template>
  <div id='classify'>
       <yd-scrolltab>
        <yd-scrolltab-panel label="保健品" icon="demo-icons-category1">
            <div style="height: 350px;background-color: gray;"></div>
        </yd-scrolltab-panel>

        <yd-scrolltab-panel label="中药" icon="demo-icons-category2" active>
            <div style="height: 350px;background-color: blue;"></div>
        </yd-scrolltab-panel>

        <yd-scrolltab-panel label="合成药" icon="demo-icons-category3">
            <div style="height: 350px;background-color: yellow;"></div>
        </yd-scrolltab-panel>
         <yd-scrolltab-panel label="" icon="demo-icons-category3">
            <div style="height: 350px;background-color: blue;"></div>
        </yd-scrolltab-panel>
    </yd-scrolltab>
      
   
   <footerTab></footerTab> <!-- 暂时使用 -->
  </div>
</template>

<script>
import Vue from 'vue';
import {ScrollTab, ScrollTabPanel} from 'vue-ydui/dist/lib.px/scrolltab';

Vue.component(ScrollTab.name, ScrollTab);
Vue.component(ScrollTabPanel.name, ScrollTabPanel);

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
    
    }
  }
}
</script>
<style>
.yd-scrolltab{
    position: fixed;
}
</style>
