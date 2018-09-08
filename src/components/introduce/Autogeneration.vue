<template>
  <div class="wrapper">
      <div class="wrapper-left">
        <div class="container-one">
            <div id="myChartOne" class="chart-one" :style="{width: '500px', height: '400px'}"></div>
        </div>
      </div>
      <div class="wrapper-right">
        <div class="container-two">
            <div id="myChartTwo" class="chart-one" :style="{width: '400px', height: '280px'}"></div>
        </div>
        <div class="container-three">
            <div class="image"></div>
            <div id="myChartThree" class="chart-one" :style="{width: '400px', height: '350px'}"></div>
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
        
      }
    },
    methods: {
      drawOne() {
        let myChartOne = this.$echarts.init(document.getElementById('myChartOne'))
        var rawData = [
          {name: ' 团中央 ', value:  104 },
          {name: ' 山东 ', value:  51 },
          {name: ' 江西 ', value:  32 },
          {name: ' 云南 ', value:  8 },
          {name: ' 福建 ', value:  7 },
          {name: ' 江苏 ', value:  6 },
          {name: ' 广西 ', value:  6 },
          {name: ' 湘 ', value:  5 },
          {name: ' 重庆 ', value:  4 },
          {name: ' 晋 ', value:  4 },
          {name: ' 川 ', value:  3 },
          {name: ' 宁夏 ', value:  3 },
          {name: ' 海南 ', value:  1 },
          {name: ' 内蒙古 ', value:  1 },
          {name: ' 青海 ', value:  1 },
          {name: ' 辽宁 ', value:  1 },
          {name: ' 湖北 ', value:  1 },
          {name: ' 心理服务联盟 ', value:  1 },
          {name: ' 河北 ', value:  1 },
          {name: ' 特色平台 ', value:  1 },
        ]
        myChartOne.setOption({
           
          title: {
              text: '白咖啡',
              left: 'center'
          },
          tooltip: {},
          series: [{
            breadcrumb:{
                	show:false
                },
            label: {
                normal: {
                    textStyle: {
                        fontSize:20
                    }
                }
            },
            name: 'option',
            type: 'treemap',
            visibleMin: 450,
            data: rawData,
            leafDepth: 2,
            levels: [
                {
                    itemStyle: {
                        normal: {
                            // borderColor: '#555',
                            borderWidth: 4,
                            gapWidth: 4
                        }
                    }
                },
                {
                    colorSaturation: [0.3, 0.6],
                    itemStyle: {
                        normal: {
                            borderColorSaturation: 0.7,
                            gapWidth: 1,
                            borderWidth: 2
                        }
                    }
                },
                {
                    colorSaturation: [0.3, 0.5],
                    itemStyle: {
                        normal: {
                            borderColorSaturation: 0.6,
                            gapWidth: 1
                        }
                    }
                },
                {
                    colorSaturation: [0.3, 0.5]
                }
            ]
          }]
        })
      },
      drawTwo() {
        let myChartTwo = this.$echarts.init(document.getElementById('myChartTwo'))
        var rawData = [
          {name: ' 团中央 ', value:  104 },
          {name: ' 山东 ', value:  51 },
          {name: ' 江西 ', value:  32 },
          {name: ' 云南 ', value:  8 },
          {name: ' 福建 ', value:  7 },
          {name: ' 江苏 ', value:  6 },
          {name: ' 广西 ', value:  6 },
          {name: ' 湘 ', value:  5 },
          {name: ' 重庆 ', value:  4 },
          {name: ' 晋 ', value:  4 },
          {name: ' 川 ', value:  3 },
          {name: ' 宁夏 ', value:  3 },
          {name: ' 海南 ', value:  1 },
          {name: ' 内蒙古 ', value:  1 },
          {name: ' 青海 ', value:  1 },
          {name: ' 辽宁 ', value:  1 },
          {name: ' 湖北 ', value:  1 },
          {name: ' 心理服务联盟 ', value:  1 },
          {name: ' 河北 ', value:  1 },
          {name: ' 特色平台 ', value:  1 },
        ]
        myChartTwo.setOption({
          title: {
            text: '美式拿铁',
            left: 'center'
          },
          tooltip: {},
          series: [{
            breadcrumb:{
                  show:false
                },
            label: {
                normal: {
                    textStyle: {
                        fontSize:20
                    }
                }
            },
            name: 'option',
            type: 'treemap',
            visibleMin: 400,
            data: rawData,
            leafDepth: 2,
            levels: [
                {
                    itemStyle: {
                        normal: {
                            // borderColor: '#555',
                            borderWidth: 4,
                            gapWidth: 4
                        }
                    }
                },
                {
                    colorSaturation: [0.3, 0.6],
                    itemStyle: {
                        normal: {
                            borderColorSaturation: 0.7,
                            gapWidth: 1,
                            borderWidth: 2
                        }
                    }
                },
                {
                    colorSaturation: [0.3, 0.5],
                    itemStyle: {
                        normal: {
                            borderColorSaturation: 0.6,
                            gapWidth: 1
                        }
                    }
                },
                {
                    colorSaturation: [0.3, 0.5]
                }
            ]
          }]
        })
      },
      drawThree() {
        let myChartThree = this.$echarts.init(document.getElementById('myChartThree'))
        var rawData = [
          {name: ' 团中央 ', value:  104 },
          {name: ' 山东 ', value:  51 },
          {name: ' 江西 ', value:  32 },
          {name: ' 云南 ', value:  8 },
          {name: ' 福建 ', value:  7 },
          {name: ' 江苏 ', value:  6 },
          {name: ' 广西 ', value:  6 },
          {name: ' 湘 ', value:  5 },
          {name: ' 重庆 ', value:  4 },
          {name: ' 晋 ', value:  4 },
          {name: ' 川 ', value:  3 },
          {name: ' 宁夏 ', value:  3 },
          {name: ' 海南 ', value:  1 },
          {name: ' 内蒙古 ', value:  1 },
          {name: ' 青海 ', value:  1 },
          {name: ' 辽宁 ', value:  1 },
          {name: ' 湖北 ', value:  1 },
          {name: ' 心理服务联盟 ', value:  1 },
          {name: ' 河北 ', value:  1 },
          {name: ' 特色平台 ', value:  1 },
        ]
        myChartThree.setOption({
          title: {
            text: '抹茶拿铁',
            left: 'center'
          },
          tooltip: {},
          series: [{
            breadcrumb:{
                  show:false
                },
            label: {
                normal: {
                    textStyle: {
                        fontSize:20
                    }
                }
            },
            name: 'option',
            type: 'treemap',
            visibleMin: 400,
            data: rawData,
            leafDepth: 2,
            levels: [
                {
                    itemStyle: {
                        normal: {
                            // borderColor: '#555',
                            borderWidth: 4,
                            gapWidth: 4
                        }
                    }
                },
                {
                    colorSaturation: [0.3, 0.6],
                    itemStyle: {
                        normal: {
                            borderColorSaturation: 0.7,
                            gapWidth: 1,
                            borderWidth: 2
                        }
                    }
                },
                {
                    colorSaturation: [0.3, 0.5],
                    itemStyle: {
                        normal: {
                            borderColorSaturation: 0.6,
                            gapWidth: 1
                        }
                    }
                },
                {
                    colorSaturation: [0.3, 0.5]
                }
            ]
          }]
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
    background: url('../../assets/img-autogeneration/three.png') no-repeat;
    background-size: 100% auto;
    display: flex;
    justify-content: space-between;
    padding: 20px 40px 20px 0;
    
    .wrapper-left {
      padding-top: 100px;
      width: 500px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .wrapper-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      // padding-left: 20px;

      .container-two {
        height: 260px;
        // width: 100%;
        padding-right: 200px;
      }
      .container-three {
        flex: 1;
        display: flex;
        // justify-content: flex-start;
        // align-items: flex-start;
        

        .image {
          width: 180px;
          height: 200px;
          background: url('../../assets/img-autogeneration/two.png') no-repeat;
          background-size: contain;
        }
        .chart-one {
          flex: 1;
        }
      }
    }
  }
</style>