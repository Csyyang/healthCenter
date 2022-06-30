<template>
  <div id="index">
    <VNav />
    <div class="index_header">
      <div class="index_header_left">
          <p class="index_header_left_bore">健康评分：8分</p>
          <img src="./imgs/customer.png" alt="" class="index_header_customer">
          <p class="index_header_left_name">徐小猫</p>
          <div class="time_choose" @click="show = true">
              <span>2020-12-30</span>
              <img src="./imgs/sanjiao.png" alt="">
          </div>
      </div>
      <div class="index_header_right">
         <p class="">基本健康数据</p>
         <ul class="index_header_rightUl">
           <li>
              <span class="index_header_rightKey float-left">身高(cm)</span>
              <span class="float-right">
                <span class="index_header_rightValue">171.0</span>
                <img src="./imgs/right_icon.png" alt="" class="index_header_rightIcon">
              </span>
           </li>
            <li>
              <span class="index_header_rightKey float-left">体重(Kg)</span>
              <span class="float-right">
                <span class="index_header_rightValue">91.9</span>
                <img src="./imgs/right_icon.png" alt="" class="index_header_rightIcon">
              </span>
           </li>
            <li>
              <span class="index_header_rightKey float-left error_color">体重指数</span>
              <span class="float-right">
                <span class="index_header_rightValue error_color">31.4</span>
              </span>
           </li>
            <li>
              <span class="index_header_rightKey float-left">收缩压(mmHg)</span>
              <span class="float-right">
                <span class="index_header_rightValue">124</span>
              </span>
           </li>
            <li>
              <span class="index_header_rightKey float-left">血红蛋白(g/L)</span>
              <span class="float-right">
                <span class="index_header_rightValue">154.0</span>
              </span>
           </li>
            <li>
              <span class="index_header_rightKey float-left error_color">白细胞计数(10^9/L)</span>
              <span class="float-right">
                <span class="index_header_rightValue error_color">11.8</span>
              </span>
           </li>
         </ul>
      </div>
    </div>
    <div class="index_check-top">
         <van-collapse v-model="activeNames" accordion="">
              <van-collapse-item tname="1">
                <div slot="title">
                    <img src="./imgs/doctor.png" alt="" class="check_leftimg">
                    <div class="check_rightDiv">
                      <p class="check_msg">总检建议</p>
                      <p class="check_text">综合报告内检项给出的建议与指导</p>
                    </div>
                </div>
                <div slot="right-icon">
                    <img src="./imgs/icon_down.png" alt="" class="check_downImg">
                </div>
                <div class="report_detail">
                   1】肥胖 1、体重指数(体重(kg)÷身高(m)的平方)≥28为肥胖。 2、肥胖是能量摄入与消耗平衡失调而致，常与遗传、内分泌、生活方式、运动和精神因素有关;肥胖 能导致高血压、心血管病、糖尿病、脂肪肝、癌症等诸多疾病。 3、建议您改善生活方式，做到均衡营养、合理膳⻝(低能量、低脂肪、适量优质蛋白质、适量谷类、 足量新鲜蔬菜和水果),戒烟限酒，有效运动，心理平衡。 4、加强运动，消耗多余的脂肪，可依年龄及身体状况，选择适合自己的运动方式和时间，以达到减轻 体重的目的。 【2】血白细胞增多;单核细胞绝对值增高;淋巴细胞绝对值增高;中性粒细胞绝对值增高 1、可⻅于部分生理情况下，如剧烈运动、劳动后、饱餐、高温、女性妊娠后期等。 2、病理情况多⻅于急性感染、严重损伤、血细胞破坏、急性大出血、中毒、血液病等。 3、建议结合临床参考，一周后复查。 4、如有发热请到医院就诊进一步明确诊断。 【3】血常规平均红细胞体积降低 建议动态观察，如有症状专科就诊
                </div>
                <van-cell-group>
                      <van-cell  value="">
                         <template slot="title">
                             <img src="./imgs/icon_return8.png" alt="" class="check_ysImg">
                             <span class="ys_name">评审医师：晓东</span>
                         </template>
                      </van-cell>
                </van-cell-group>
              </van-collapse-item>
          </van-collapse>
    </div>
    <div class="index_check-top">
         <van-collapse v-model="errNames" accordion="">
              <van-collapse-item tname="1" border=false>
                <div slot="title" class="err_margintop">
                    <span class="error_title">异常结果汇总</span>
                    <span class="error_num"><span class="color-err">6</span>&nbsp;&nbsp;项</span>
                </div>
                <div slot="right-icon">
                    <img src="./imgs/icon_down.png" alt="" class="check_downImg">
                </div>
                <van-cell-group>
                      <van-cell >
                         <template slot="title">
                            体重指数
                         </template>
                          <template slot="default">
                            <span class="color-err">32.6</span>
                         </template>
                      </van-cell>
                      <van-cell >
                         <template slot="title">
                            白细胞计数
                         </template>
                          <template slot="default">
                            <span class="color-err">32.6</span>
                         </template>
                      </van-cell>
                      <van-cell >
                         <template slot="title">
                            平均白细胞
                         </template>
                          <template slot="default">
                            <span class="color-err">32.6</span>
                         </template>
                      </van-cell>
                      <van-cell >
                         <template slot="title">
                            淋巴细胞绝对
                         </template>
                          <template slot="default">
                            <span class="color-err">32.6</span>
                         </template>
                      </van-cell>
                      <van-cell >
                         <template slot="title">
                            中性粒细胞对决值
                         </template>
                          <template slot="default">
                            <span class="color-err">32.6</span>
                         </template>
                      </van-cell>
                      <van-cell >
                         <template slot="title">
                            单核细胞绝对值
                         </template>
                          <template slot="default">
                            <span class="color-err">32.6</span>
                         </template>
                      </van-cell>
                </van-cell-group>
              </van-collapse-item>
          </van-collapse>
    </div>
    <div class="index_check-top">
         <van-cell-group>
                      <van-cell >
                         <template slot="title">
                            健康检查结果
                         </template>
                      </van-cell>
                      <van-cell is-link>
                         <template slot="title">
                            <img src="./imgs/icon_return1.png" alt="" class="check_ysImg">
                            <div class="check_rightDiv2">
                              <p>一般项目检查</p>
                            </div>
                         </template>
                          <template slot="right-icon">
                            <img src="./imgs/icon_next.png" alt="" class="check_nextImg">
                         </template>
                      </van-cell>
                     <van-cell is-link to="/healthCenter/medicine">
                         <template slot="title">
                            <img src="./imgs/icon_return2.png" alt="" class="check_ysImg">
                            <div class="check_rightDiv2">
                              <p>内科</p>
                            </div>
                         </template>
                          <template slot="right-icon">
                            <img src="./imgs/icon_next.png" alt="" class="check_nextImg">
                         </template>
                      </van-cell>
                      <van-cell is-link>
                         <template slot="title">
                            <img src="./imgs/icon_return4.png" alt="" class="check_ysImg">
                            <div class="check_rightDiv2">
                              <p>外科</p>
                            </div>
                         </template>
                          <template slot="right-icon">
                            <img src="./imgs/icon_next.png" alt="" class="check_nextImg">
                         </template>
                      </van-cell>
                      <van-cell is-link>
                         <template slot="title">
                            <img src="./imgs/icon_return3.png" alt="" class="check_ysImg">
                            <div class="check_rightDiv2">
                              <p>血常规</p>
                            </div>
                         </template>
                          <template slot="right-icon">
                            <img src="./imgs/icon_next.png" alt="" class="check_nextImg">
                         </template>
                      </van-cell>
                       <van-cell is-link>
                         <template slot="title">
                            <img src="./imgs/icon_return5.png" alt="" class="check_ysImg">
                            <div class="check_rightDiv2">
                              <p>实验室检查</p>
                            </div>
                         </template>
                          <template slot="right-icon">
                            <img src="./imgs/icon_next.png" alt="" class="check_nextImg">
                         </template>
                      </van-cell>
                       <van-cell is-link>
                         <template slot="title">
                            <img src="./imgs/icon_return6.png" alt="" class="check_ysImg">
                            <div class="check_rightDiv2">
                              <p>心电图室</p>
                            </div>
                         </template>
                          <template slot="right-icon">
                            <img src="./imgs/icon_next.png" alt="" class="check_nextImg">
                         </template>
                      </van-cell>
                       <van-cell is-link>
                         <template slot="title">
                            <img src="./imgs/icon_return7.png" alt="" class="check_ysImg">
                            <div class="check_rightDiv2">
                              <p>耳喉鼻科</p>
                            </div>
                         </template>
                          <template slot="right-icon">
                            <img src="./imgs/icon_next.png" alt="" class="check_nextImg">
                         </template>
                      </van-cell>
                </van-cell-group>
    </div>
    <van-action-sheet v-model="show" title='选择报告'>
      <div class="content">
         <div class="content_add">新增报告</div>
         <div class="content_time">2022年6月24日</div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import { VNav } from "@/components/index";
import "./index.less";
import Vue from 'vue';
import { Collapse,CollapseItem } from "vant";
import { ActionSheet } from "vant";
import { Toast } from "vant";
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(ActionSheet)
export default {
  components: {
    VNav,
  },
  data(){
    return{
      activeNames:'1',
      errNames:'2',
      show:false,
      actions:[
        
      ]
    }
  },
  methods:{
    onSelect(item){
      this.show=false;
      Toast(item.name)
    }
  }
};
</script>

<style>
</style>