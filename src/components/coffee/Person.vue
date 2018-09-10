<template>
  <div class="wrapper">
      <div class="wrapper-left">
          <!-- <div class="image"></div> -->
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
      drawOne(age,name,num) {
          console.log(age,name,num)
          let myChartOne = this.$echarts.init(document.getElementById('myChartOne'))
          myChartOne.setOption({
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : age?age:['10岁以下','10-20岁','20-30岁','30-40岁','40-50岁','50-60岁','60岁以上']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                	name:name?name[0]:"奶味咖啡",
                	type:'bar',
                	data:num?num[0]:[150,200,400,340,347,231,200]
                },
                
                {
                    name:name?name[1]:'咖啡饮品',
                    type:'bar',
                    stack: '广告',
                    data:num?num[1]:[150, 232, 257, 450, 341, 330, 189]
                },
                {
                    name:name?name[2]:'奶昔',
                    type:'bar',
                    data:num?num[2]:[321, 423, 467, 321, 451, 210, 100],
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
      drawTwo(name,data) {
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
                data: name?name:['摩卡咖啡','卡布奇诺','冰咖啡','拿铁咖啡','其他']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:data?data:[
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
        API.agenum().then(result => {
          console.log(result)
          console.log(3,result.data)
          this.drawOne(result.data.age,result.data.name,result.data.num)
        })
        // API.mannum().then(result => {
        //   console.log(result)
        //   console.log(3,result.data)
        //   this.drawTwo(result.name,result.data)
        // })
        // API.womannum().then(result => {
        //   console.log(result)
        //   console.log(3,result.data)
        //   this.drawThree(result.name,result.data)
        // })
        this.drawTwo()
        this.drawThree()
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .wrapper {
    background: url('../../assets/img-person/four.png') ;
    background-size: 100% auto;
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    // padding-left: 40px;
    padding-bottom: 50px;
    
    
    .wrapper-left {
        display: flex;
        flex: 1;

        .container-one {
            padding-top: 200px;
            flex: 1;
            display: flex;
        }

    }

    .wrapper-right {
        display: flex;
        flex-direction: column;
        margin-left: 60px;
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