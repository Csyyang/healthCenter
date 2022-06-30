<template>
  <div id="index">
    <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <template #title>
          <div class="title-box">
            <div :class="getBgClass" />
            <div >检查详情</div>
          </div>
        </template>
        <template #right>
           <img src="./imgs/icon_calendar-Black.png" alt="" class="medicine_time">
        </template>
    </van-nav-bar>
    <van-cell>
           <template slot="title">
               <img src="./imgs/icon_return2.png" alt="" class="check_ysImg">
                            <div class="check_rightDiv2">
                              <p>内科</p>
                            </div>
           </template>                 
   </van-cell>
   <div class="index_check-top">
       <van-cell>
           <template slot="title">
                  <div class="check_rightDiv2">
                       <p>心率<span class="medicine_xn">(次/分)</span></p>
                  </div>
       </template>
      </van-cell>
   </div>

    <div class="index_check-top">
           <van-cell-group>
                      <van-cell is-link>
                         <template slot="title">
                            <div class="check_rightDiv2">
                              <p>心律</p>
                            </div>
                         </template>
                          <template slot="right-icon">
                             <span class="color-gray">齐</span>
                         </template>
                      </van-cell>
                      <van-cell is-link>
                         <template slot="title">
                            <div class="check_rightDiv2">
                              <p>心音</p>
                            </div>
                         </template>
                          <template slot="right-icon">
                             <span class="color-gray">正常</span>
                         </template>
                      </van-cell>
                      <van-cell is-link>
                         <template slot="title">
                            <div class="check_rightDiv2">
                              <p>肺部听诊</p>
                            </div>
                         </template>
                          <template slot="right-icon">
                             <span class="color-gray">双侧呼吸音未闻及异常</span>
                         </template>
                      </van-cell>
                      <van-cell is-link>
                         <template slot="title">
                            <div class="check_rightDiv2">
                              <p>肝脏触诊</p>
                            </div>
                         </template>
                          <template slot="right-icon">
                             <span class="color-gray">脾脏肋下未触及</span>
                         </template>
                      </van-cell>
                      <van-cell is-link>
                         <template slot="title">
                            <div class="check_rightDiv2">
                              <p>肾脏叩诊</p>
                            </div>
                         </template>
                          <template slot="right-icon">
                             <span class="color-gray">双肾区无叩痛</span>
                         </template>
                      </van-cell>
                      <van-cell is-link>
                         <template slot="title">
                            <div class="check_rightDiv2">
                              <p>内科其它</p>
                            </div>
                         </template>
                          <template slot="right-icon">
                             <span class="color-gray">无</span>
                         </template>
                      </van-cell>
            </van-cell-group>
    </div>
    <div class="medicin_wxts">
       温馨提示：此次体检结果，仅对本次查体、检查、检验样本负责。本报告不能用于二次诊断或其他任何医学判断目的使用。
    </div>
   
  </div>
</template>

<script>
import { VNav } from "@/components/index";
import "./index.less";
import Vue from 'vue';
import { NavBar } from "vant";
import { Divider } from "vant";
Vue.use(NavBar)
Vue.use(Divider)
export default {
  components: {
    VNav,
  },
  data(){
    return{
      active:'1'
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push("/healthCenter/index");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
};
</script>

<style>
.medicin_wxts{
   font-size: 0.24rem;
   color:#999;
   margin:0.24rem auto;
   padding:0 0.4rem 
}
.medicine_xn{
   font-size: 0.28rem;
   color:#999;
   margin-left:0.2rem;
}
.medicin_border{
   border-top:2px solid #21a64d;
}
</style>