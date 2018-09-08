<template>
  <div class="wrapper">
      <div class="wrapper-left">
          <div class="image"></div>
          <div class="container-one">
              <div id="myChartOne" class="chart-one" :style="{width: '600px', height: '350px'}"></div>
          </div>
      </div>
      <div class="wrapper-right">
          <div class="container-two">
              <div id="myChartTwo" class="chart-one" :style="{width: '450px', height: '250px'}"></div>
          </div>
          <div class="container-three">
              <div id="myChartThree" class="chart-one" :style="{width: '450px', height: '250px'}"></div>
          </div>
      </div>
  </div>
    
</template>

<script>
  import {bus} from '../../bus.js'
  import API from '../../api/api_user'
  import avatar from '../../assets/avatar.gif'
  import echarts from 'echarts'
  export default {
    created(){
      
    },
    data () {
      return {
        
      }
    },
    methods: {
      drawOne() {
          let myChartOne = this.$echarts.init(document.getElementById('myChartOne'))
          myChartOne.setOption({
//          color: ['#0a97b','#4674c1',"#fdbf2d","#a5a5a5","#e4dc44"],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
//          legend: {
//              data:['咖啡1','咖啡2','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
//          },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['10岁以下','10-20岁','20-30岁','30-40岁','40-50岁','50-60岁','60岁以上']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                	name:"奶味咖啡",
                	type:'bar',
                	data:[150,200,400,340,347,231,200]
                },
                
                {
                    name:'咖啡饮品',
                    type:'bar',
                    stack: '广告',
                    data:[150, 232, 257, 450, 341, 330, 189]
                },
                {
                    name:'奶昔',
                    type:'bar',
                    data:[321, 423, 467, 321, 451, 210, 100],
                    markLine : {
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        },
                        data : [
                            [{type : 'min'}, {type : 'max'}]
                        ]
                    }
                },
                
            ]

          })
      },
      drawTwo() {
          let myChartTwo = this.$echarts.init(document.getElementById('myChartTwo'))
          myChartTwo.setOption({
            title : {
                text: '男性中的咖啡销量',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['摩卡咖啡','卡布奇诺','冰咖啡','拿铁咖啡','其他']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:356, name:'摩卡咖啡'},
                        {value:310, name:'卡布奇诺'},
                        {value:234, name:'冰咖啡'},
                        {value:135, name:'拿铁咖啡'},
                        {value:1548, name:'其他'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: '#0a97b'
                        }
                    }
                }
            ]
          })
      },
      drawThree() {
          let myChartThree = this.$echarts.init(document.getElementById('myChartThree'))
          myChartThree.setOption({
              title : {
                text: '女性中咖啡销量',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['调制咖啡','拿铁咖啡','奶昔饮品','印度奶茶','其他']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:345, name:'调制咖啡'},
                        {value:213, name:'拿铁咖啡'},
                        {value:450, name:'奶昔饮品'},
                        {value:344, name:'印度奶茶'},
                        {value:1248, name:'其他'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
          })
      }
     
    },
    mounted() {
      this.drawOne()
      this.drawTwo()
      this.drawThree()
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .wrapper {
    // background: url('../../assets/img-autogeneration/background.jpg') repeat;
    // background-size: cover;
    display: flex;
    justify-content: space-between;
    .wrapper-left {
        display: flex;
        flex-direction: column;
        width: 600px;
        height: 100%;

        .image {
            height: 250px;
            width: 100%;
            background: url('../../assets/img-person/one.png') no-repeat;
            background-size: contain;
        }

        .container-one {
            flex: 1;
            // width: 100%;
        }

    }

    .wrapper-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        flex: 1;

        .container-two {
            flex: 1;
        }
        .container-three {
            flex: 1;
        }
    }
  }
</style>