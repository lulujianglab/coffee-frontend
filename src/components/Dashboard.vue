<template>
  <div class="wrapper">
      <div class="image">
          <div class="top">
              <div class="one">
                  <img src="../assets/img-dashboard/naixi.png" alt="">
                  <p>销量分析总结</p>
              </div>
              <div class="two">
                  <img src="../assets/img-dashboard/san.png" alt="">
                  <p>年龄性别总结</p>
              </div>
          </div>
          <div class="bottom">
              <div class="one">
                  <img src="../assets/img-dashboard/dan.png" alt="">
                  <p>热量分析总结</p>
              </div>
              <div class="two">
                  <img src="../assets/img-dashboard/mian.png" alt="">
                  <p>地域分析总结</p>
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
    background: url('../assets/img-dashboard/beijing.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    padding: 80px;

    .image {
        background: url('../assets/img-dashboard/geceng.png') no-repeat;
        background-size: 100% 100%;
        opacity: 0.8;
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
                display: flex;
                justify-content: center;

                img {
                    width: 80px;
                    height: 80px;
                    margin-right: 20px;
                }
                
                // background: url('../assets/img-dashboard/naixi.png') no-repeat;
                // background-size: 100% cover;
            }
        }

        .bottom {
            flex: 1;
            display: flex;
            justify-content: space-between;

            .one,
            .two {
                display: flex;
                justify-content: center;

                img {
                    width: 80px;
                    height: 80px;
                    margin-right: 20px;
                }
               
                // background: url('../assets/img-dashboard/dan.png') no-repeat;
                // background-size: 100% cover;

            }
        }
    }
  }
</style>