<template>
  <div class="wrapper">
      <div class="image">
          <div class="top">
              <div class="one">
                  <img src="/static/img-dashboard/naixi.png" alt="">
                  <div class="text">
                       <p class="title">销量分析总结</p>
                       <p class="small">冬季月份热饮销量高于冷饮，其中经典浓缩咖啡类型的香草拿铁咖啡作为经典咖啡销售量较高，2、3月份由于春节的影响，咖啡销量有所下降，从侧面反映出人们在日常工作中对咖啡的需求两较大</p>
                  </div>
                 
              </div>
              <div class="two">
                  <img src="/static/img-dashboard/san.png" alt="">
                  <div class="text">
                      <p class="title">年龄性别总结</p>
                      <p class="small">经过年龄大数据分析，年轻一代的消费者更倾向于将更多的花费放在提升生活品质上，消费习惯正在改变，咖啡市场潜力很大。男女消费者在咖啡选择上存在着很大差异、建议在营销策略上要有针对性，精准营销</p>
                  </div>
                  
              </div>
          </div>
          <div class="bottom">
              <div class="one">
                  <img src="/static/img-dashboard/dan.png" alt="">
                  <div class="text">
                       <p class="title">热量分析总结</p>
                       <p class="small">在越来越多的消费者在咖啡购买的过程中更加关注其卡路里、糖分、脂肪等相关热量信息。产品创新：推出更迎合消费者的产品</p>
                  </div>
              </div>
              <div class="two">
                  <img src="/static/img-dashboard/mian.png" alt="">
                  <div class="text">
                       <p class="title">地域分析总结</p>
                       <p class="small">销量较高的三个区域分别为长三角，珠三角和北京；中部地区以成都、武汉为首</p>
                  </div>
              </div>
          </div>
      </div>
      <div class="summary">

      </div>
  </div>
</template>

<script>
import API from '../api/api_user.js';

  export default {

      methods: {

      },
      mounted() {

      }
  }
   
</script>

<style scoped lang="scss">
  .wrapper {
    background: url('/static/img-dashboard/beijing.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    padding: 80px;

    .image {
        background: url('/static/img-dashboard/geceng.png') no-repeat;
        background-size: 100% 100%;
        opacity: 0.9;
        flex: 1;
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        .top {
            flex: 1;
            display: flex;
            justify-content: space-between;

            .one,
            .two {
                flex: 1;
                display: flex;

                img {
                    width: 80px;
                    height: 80px;
                    margin-right: 20px;
                }
                .text {
                    flex: 1;
                    text-align: left;
                    
                    .title {
                        font-size: 26px;
                        font-weight: 900;
                    }
                    .small {
                        font-size: 18px;
                    }
                }
            }
        }

        .bottom {
            flex: 1;
            display: flex;
            justify-content: space-between;

            .one,
            .two {
                flex:1;
                display: flex;
                // justify-content: center;

                img {
                    width: 80px;
                    height: 80px;
                    margin-right: 20px;
                }
                .text {
                    flex: 1;
                    text-align: left;
                    
                    .title {
                        font-size: 26px;
                        font-weight: 900;
                    }
                    .small {
                        font-size: 18px;
                    }
                }
            }
        }
    }
  }
</style>