
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
        <div class="textarea">
          <div v-for="(item,index) in datas" :key="index">
            <div class="kind">
              <p>{{item.name}}</p>
              <p>{{item.kind}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper-right">
        <div class="image">
          <div class="coffee">
            <el-carousel height="500px" indicator-position="none" :interval="1500">
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
            value: 'ClassicEspressoDrinks',
            label: 'ClassicEspressoDrinks'
          },{
            value: 'Coffee',
            label: 'Coffee'
          },{
            value: 'FrappuccinoBlendedCoffee',
            label: 'FrappuccinoBlendedCoffee'
          },{
            value: 'FrappuccinoBlendedCrme',
            label: 'FrappuccinoBlendedCrme'
          },{
            value: 'FrappuccinoLightBlendedCoffee',
            label: 'FrappuccinoLightBlendedCoffee'
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
          {index:2, src: require('../../../static/img2.png')},
          {index:3, src: require('../../../static/img3.png')}
        ],

        datas: [{ name:'黑咖啡',kind: '加奶'},{ name:'白咖啡',kind: '不加奶'}]
        // datas: []
      }
    },
    methods: {
      
     
    },
    watch: {
    　 newValue(val) {
        let param ={select: val}
        API.selectgeneration(param).then(result => {
            this.datas = result.data
        })
      }
    },
    computed: {
    　　newValue() {
    　　　　return this.account.valueKind
    　　}
    },
    mounted() {
      let param ={select: this.account.valueKind}
      // API.selectgeneration(param).then(result => {
      //     this.datas = result.data
      // })
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
      display: flex;
      justify-content: space-between;   
      border: 5px solid #fff;
      padding: 40px 40px 40px 130px;

      .wrapper-left {

        display: flex;
        flex-direction: column;
        margin-left: 40px;
        .textarea {
          width:100%;
          height: 100%;
          background-color: #f56c6c; 
          opacity: 0.7;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #fff;
          padding: 0px 20px;
          font-weight: 1200;
          font-size: 26px;
          border-radius: 20px;

          .kind {
            display: flex;
            justify-content: space-between;
            
          }
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