<template>
  <div class="wrapper">
      <div class="wrapper-left">
        <div class="container-one">
            <el-select v-model="account.value" placeholder="类别">
                <el-option
                    v-for="item in account.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="container-two">
            <div id="myChartOne" class="chart-one" :style="{width: '500px', height: '600px'}"></div>
        </div>
      </div>
      <div class="wrapper-right">
          <div class="container-three">
            <ul class="col-left">
                <li>
                    <span class="circle">1</span>
                    <span class="name">抹茶拿铁</span>
                    <span class="num">323,234</span>
                </li>
                <li>
                    <span class="circle">1</span>
                    <span class="name">抹茶拿铁</span>
                    <span class="num">323,234</span>
                </li>
                <li>
                    <span class="circle">1</span>
                    <span class="name">抹茶拿铁</span>
                    <span class="num">323,234</span>
                </li>
                <li>
                    <span class="circle">1</span>
                    <span class="name">抹茶拿铁</span>
                    <span class="num">323,234</span>
                </li>
            </ul>
            
            <div class="col-right">
                <!-- <p>323,234</p>
                <p>323,234</p>
                <p>323,234</p>
                <p>323,234</p>
                <p>323,234</p>
                <p>323,234</p>
                <p>323,234</p>
                <p>323,234</p>
                <p>323,234</p>
                <p>323,234</p>
                <p>323,234</p> -->
            </div>
        </div>
        <div class="container-four">
            <!-- <div class="col-left">
                <p>焦糖拿铁</p>
                <p>焦糖拿铁</p>
                <p>焦糖拿铁</p>
                <p>焦糖拿铁</p>
                <p>焦糖拿铁</p>
                <p>焦糖拿铁</p>
                <p>焦糖拿铁</p>
                <p>焦糖拿铁</p>
                <p>焦糖拿铁</p>
                <p>焦糖拿铁</p>
                <p>焦糖拿铁</p>
            </div>
            <div class="col-right">
                <p>323,234</p>
                <p>323,234</p>
                <p>323,234</p>
                <p>323,234</p>
                <p>323,234</p>
                <p>323,234</p>
                <p>323,234</p>
                <p>323,234</p>
                <p>323,234</p>
                <p>323,234</p>
                <p>323,234</p>
            </div> -->
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
            options: [{
            value: '苦咖啡',
            label: '苦咖啡'
          },{
            value: '白咖啡',
            label: '白咖啡'
          },{
            value: '抹茶拿铁',
            label: '抹茶拿铁'
          },{
            value: '焦糖拿铁',
            label: '焦糖拿铁'
          },{
            value: '马琪雅朵',
            label: '马琪雅朵'
          },{
            value: '美式咖啡',
            label: '美式咖啡'
          },{
            value: '卡布奇诺',
            label: '卡布奇诺'
          },{
            value: '焦糖玛琪朵',
            label: '焦糖玛琪朵'
          }],
        value:'',

        }
      }
    },
    methods: {
      drawOne() {
          let myChartOne = this.$echarts.init(document.getElementById('myChartOne'))
          myChartOne.setOption({
              title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [1, 2]
                }
                },
                indicator: [
                { name: '销售（sales）', max: 6500},
                { name: '管理（Administration）', max: 16000},
                { name: '信息技术（Information Techology）', max: 30000},
                { name: '客服（Customer Support）', max: 38000},
                { name: '研发（Development）', max: 52000},
                { name: '市场（Marketing）', max: 25000}
                ]
            },
            series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                // areaStyle: {normal: {}},
                data : [
                    {
                        value : [4300, 10000, 28000, 35000, 50000, 19000],
                        name : '预算分配（Allocated Budget）'
                    },
                    {
                        value : [5000, 14000, 28000, 31000, 42000, 21000],
                        name : '实际开销（Actual Spending）'
                    }
                ]
            }]
          })
      }
     
    },
    mounted() {
      this.drawOne()
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .wrapper {
    background: url('../../assets/img-hot/four.png') no-repeat;
    background-size: 100% auto;
    display: flex;
    justify-content: space-between;
    padding: 0px 0px 40px 40px;

    .wrapper-left {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding-top: 80px;
        .container-one {
            height: 200px;
            width: 50%;
        }
        .container-two {
            flex: 1;
        }
    }
    .wrapper-right {
        flex: 1;
        display: flex;
        // justify-content: flex-start;

        // .container-three,
        // .container-four {
        //     flex: 1;
        //     display: flex;
        //     justify-content: space-between;
        //     align-items: center;
        //     padding-right: 40px;
        //     .col-left {
        //         .image {
        //             width: 18px;
        //             height: 18px;
        //             background: url('../../assets/img-hot/ax.png') no-repeat;
        //             background-size: 100% auto;
        //         }
        //     }
            
        // }
        .container-three {
            margin: 130px 0 0;

            .circle {
                background-color: #314659;
                color: #fff;
                border-radius: 20px;
                display: inline-block;
                font-size: 12px;
                font-weight: 600;
                height: 20px;
                line-height: 20px;
                margin-right: 16px;
                margin-top: 1.5px;
                text-align: center;
                width: 20px;
                
            }
            .name {
                flex: 1;
                margin-right: 8px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: rgba(0, 0, 0, 0.65);
                font-size: 14px;
                line-height: 22px;
            }
            .num {
                color: rgba(0, 0, 0, 0.65);
                font-size: 14px;
                line-height: 22px;
            }
        }
    }
  }
</style>