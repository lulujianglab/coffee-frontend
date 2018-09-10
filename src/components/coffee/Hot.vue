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
                <div v-for="(item,index) in dataone" :key="index">
                    <li>
                        <span class="circle" :class="{'is-active': item.active}">{{item.index}}</span>
                        <span class="name">{{item.name.split('(')[0]}}</span>
                        <!-- <span class="num">{{item.num}}</span>       -->
                    </li>
                </div>
            </ul>
        </div>
        <div class="container-four">
            <ul class="col-left">
                <div v-for="(item,index) in datatwo" :key="index">
                    <li>
                        <span class="circle" :class="{'is-active': item.active}">{{item.index}}</span>
                        <span class="name">{{item.name.split('(')[0]}}</span>
                        <!-- <span class="num">{{item.num}}</span>       -->
                    </li>
                </div>
            </ul>
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
            value: 'Classic Espresso Drinks',
            label: 'Classic Espresso Drinks'
          },{
            value: 'Coffee',
            label: 'Coffee'
          },{
            value: 'Frappuccino Blended Coffee',
            label: 'Frappuccino Blended Coffee'
          },{
            value: 'Frappuccino Blended Crme',
            label: 'Frappuccino Blended Crme'
          },{
            value: 'Frappuccino Light Blended Coffee',
            label: 'Frappuccino Light Blended Coffee'
          },{
            value: 'Shaken Iced Beverages',
            label: 'Shaken Iced Beverages'
          },{
            value: 'Signature Espresso Drinks',
            label: 'Signature Espresso Drinks'
          },{
            value: 'Smoothies',
            label: 'Smoothies'
          },{
            value: 'Tazo Tea Drinks',
            label: 'Tazo Tea Drinks'
          }],
          value:'Signature Espresso Drinks',

        },
        dataone: [],
        datatwo: [],
        dataradar: null,
        // datas: [{
        //     active: true,
        //     index: 1,
        //     name: '抹茶拿铁',
        //     num:' 323,234'
        // },{
        //     active: true,
        //     index: 2,
        //     name: '抹茶拿铁',
        //     num:' 323,234'
        // },{
        //     active: true,
        //     index: 3,
        //     name: '抹茶拿铁',
        //     num:' 323,234'
        // },{
        //     active: false,
        //     index: 4,
        //     name: '抹茶拿铁',
        //     num:' 323,234'
        // },{
        //     active: false,
        //     index: 5,
        //     name: '抹茶拿铁',
        //     num:' 323,234'
        // },{
        //     active: false,
        //     index: 6,
        //     name: '抹茶拿铁',
        //     num:' 323,234'
        // },{
        //     active: false,
        //     index: 7,
        //     name: '抹茶拿铁',
        //     num:' 323,234'
        // },{
        //     active: false,
        //     index: 8,
        //     name: '抹茶拿铁',
        //     num:' 323,234'
        // },{
        //     active: false,
        //     index: 9,
        //     name: '抹茶拿铁',
        //     num:' 323,234'
        // },{
        //     active: false,
        //     index: 10,
        //     name: '抹茶拿铁',
        //     num:' 323,234'
        // },{
        //     active: false,
        //     index: 11,
        //     name: '抹茶拿铁',
        //     num:' 323,234'
        // },{
        //     active: fasle,
        //     index: 12,
        //     name: '抹茶拿铁',
        //     num:' 323,234'
        // }]
        // dataradar: {
        //     datalegend: ['白巧克力摩卡（不加奶油）','焦糖玛奇朵','热巧克力（不加奶油）'],
        //     data: [
        //         {
        //             value : [11, 7, 0, 58, 15, 0.15],
        //             name : '白巧克力摩卡（不加奶油）'
        //         },
        //         {
        //             value : [7, 3.5, 0, 32, 10, 0.15],
        //             name : '焦糖玛奇朵'
        //         },
        //         {
        //             value : [6, 1.5, 2, 25, 9, 0.02],
        //             name : '热巧克力（不加奶油）'
        //         }
        //     ]
        // }
      }
    },
    methods: {
      drawOne(datalegend,data) {
          let myChartOne = this.$echarts.init(document.getElementById('myChartOne'))
          myChartOne.setOption({
              title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data: datalegend ? datalegend : ['白巧克力摩卡（不加奶油）','焦糖玛奇朵','热巧克力（不加奶油）']
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
                    { name: 'Calories', max: 510},
                    { name: ' Tatal Fat(g)', max: 4.5},
                    { name: 'Sugars(g)', max: 84},
                    { name: 'Protein(g)', max: 20},
                    { name: ' VitaminC', max: 100},
                    { name: 'Caffeeine(mg)', max: 500}
                ]
            },
            series: [{
                name: '',
                type: 'radar',
                // areaStyle: {normal: {}},
                data : data? data:[
                    {
                        value : [11, 7, 0, 58, 15, 0.15],
                        name : '白巧克力摩卡（不加奶油）'
                    },
                    {
                        value : [7, 3.5, 0, 32, 10, 0.15],
                        name : '焦糖玛奇朵'
                    },
                    {
                        value : [6, 1.5, 2, 25, 9, 0.02],
                        name : '热巧克力（不加奶油）'
                    }
                ]
            }]
          },true)
      } 
    },
    watch: {
        　newValue(val) {
            console.log(val)
            let Beverage_category ={Beverage_category: val}
            API.hotradar(Beverage_category).then(result => {
                console.log(result)
                this.dataradar = result.data
                console.log(4,this.dataradar)
                this.drawOne(this.dataradar.datalegend,this.dataradar.data)
            })
        }
    },
    computed: {
    　　newValue() {
    　　　　return this.account.value
    　　}
    },
    mounted() {
      
      API.hotone().then(result => {
          this.dataone = result.data
          console.log(1,this.dataone)
      })
      API.hottwo().then(result => {
          this.datatwo = result.data
          console.log(2,this.datatwo)
      })

      console.log('value',this.account.value)
      let Beverage_category ={Beverage_category: this.account.value}
      API.hotradar(Beverage_category).then(result => {
          console.log(result)
          this.dataradar = result.data
          console.log(3,this.dataradar)
          this.drawOne(this.dataradar.datalegend,this.dataradar.data)
      }) 
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
        justify-content: flex-start;

        .container-three ,
        .container-four{
            flex: 1;
            margin: 130px 0px 0 0;
            .col-left {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                flex-wrap: nowrap;
            }
            li {
                padding-bottom: 15px;
            }

            .circle {              
                background-color: #f5f5f5;
                color: rgba(0,0,0,.65);
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
            .is-active {
                background-color: #314659;
                color: #fff;
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