
<template>
  <div class="wrapper">
    <div class="content">
      <div class="wrapper-left">
        <div class="kinds">
          <el-select v-model="account.valueKind" placeholder="种类">
            <el-option
                v-for="item in account.optionKind"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
          </el-select>
        </div>
        <div class="hot">
          <el-select v-model="account.valueHot" placeholder="卡路里">
            <el-option
                v-for="item in account.optionHot"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
          </el-select>
        </div>
        <div class="kinds">
          <el-select v-model="account.valuePrice" placeholder="价格">
            <el-option
                v-for="item in account.optionPrice"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
          </el-select>
        </div>
        <div class="textarea"></div>
      </div>
      <div class="wrapper-right">
        <div class="image">
          <div class="coffee">
            <el-carousel height="500px" indicator-position="none" interval="1000">
              <el-carousel-item v-for="item in imgs" :key="item.index">
                <img :src="item.src">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
  import {bus} from '../../bus.js'
  import API from '../../api/api_user'
  import avatar from '../../assets/avatar.gif'
  export default {
    created(){
      
    },
    data () {
      return {
        account: {
            optionKind: [{
            value: '苦咖啡',
            label: '苦咖啡'
          },{
            value: '白咖啡',
            label: '白咖啡'
          },{
            value: '抹茶拿铁',
            label: '抹茶拿铁'
          }],
          optionHot: [{
            value: '60',
            label: '60'
          },{
            value: '20',
            label: '20'
          },{
            value: '40',
            label: '40'
          }],
          optionPrice: [{
            value: '$100',
            label: '$100'
          },{
            value: '$50',
            label: '$50'
          },{
            value: '$60',
            label: '$60'
          }],
          valueKind:'',
          valueHot:'',
          valuePrice:''
        },
        imgs: [
          {index:1, src: require('../../../static/img1.png')},
          {index:1, src: require('../../../static/img2.png')},
          {index:1, src: require('../../../static/img3.png')}
        ]
      }
    },
    methods: {
      
     
    },
    mounted() {
      
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .wrapper {
    height: 100%;
    background: url('../../assets/img-chosegeneration/beijing.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    
    .content {
      flex: 1;
      margin: 40px;
      display: flex;
      justify-content: space-between;   
      border: 5px solid #fff;
      padding: 40px 40px 40px 130px;

      .wrapper-left {

        display: flex;
        flex-direction: column;
        .textarea {
          width:100%;
          height: 100%;
          background-color: #f56c6c; 
          opacity: 0.2;
        }
      }

      .wrapper-right {
          display: flex;
          justify-content: center;
          align-items: center;

        .image {
            width: 500px;
            height: 500px;
            background: url('../../assets/img-chosegeneration/background.png') no-repeat;
            background-size: cover;
            position: relative;

            .coffee {
              width: 500px;
              height: 500px;
              position: absolute;
              z-index: 100;
              top: 50%;
              left: 50%;
              margin-left: -250px;
              margin-top: -160px;
              border-radius: 50%;

              img {
                width: 300px;
                height: 300px;
              }
            }
        }
      }
    }

    
  }
</style>