<template>
  <div class="wrapper">
      <div class="wrapper-left">
        <div class="container-one">
            <div id="myChartOne" class="chart-one" :style="{width: '450px', height: '450px'}"></div>
        </div>
      </div>
      <div class="wrapper-right">
        <div class="container-two">
            <div id="myChartTwo" class="chart-two" :style="{width: '400px', height: '280px'}"></div>
        </div>
        <div class="container-three">
            <div class="image"></div>
            <div id="myChartThree" class="chart-three" :style="{width: '400px', height: '350px'}"></div>
        </div>
      </div>
  </div>
</template>

<script>
  import {bus} from '../../bus.js'
  import API from '../../api/api_user'
  export default {
    created(){      

    },
    data () {
      return {
        dataOne: [],
        dataTwo: [],
        dataThree: []
      }
    },
    methods: {
      drawOne(name,data) {
        let myChartOne = this.$echarts.init(document.getElementById('myChartOne'))
        let rawData = [
          {name: '脂肪7g ', value:  7 },
          {name: '反式脂肪3.5g ', value:  3.5 },
          {name: ' 饱和脂肪0.2g ', value:  0.2 },
          {name: ' 膳食纤维0g ', value:  0 },
          {name: ' 糖17g ', value:  17 },
          {name: ' 蛋白质12g ', value:  12 },
          {name: ' 咖啡因0.15g ', value:  0.15 },
          
        ]
        // let data = dataone
        myChartOne.setOption({
           
          title: {
              text: name?name:'拿铁咖啡',
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
            data: data? data: rawData,
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
      drawTwo(name,data) {
        let myChartTwo = this.$echarts.init(document.getElementById('myChartTwo'))
        let rawData = [
          {name: '脂肪 ', value:  4 },
          {name: '反式脂肪 ', value:  2 },
          {name: ' 饱和脂肪 ', value:  0.1 },
          {name: ' 膳食纤维 ', value:  1 },
          {name: ' 糖 ', value:  17 },
          {name: ' 蛋白质 ', value:  6 },
          {name: ' 咖啡因 ', value:  0.085 },
         
        ]
        myChartTwo.setOption({
          title: {
            text: name?name:'摩卡星冰乐（不加奶油）',
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
            data: data ? data : rawData,
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
      drawThree(name,data) {
        let myChartThree = this.$echarts.init(document.getElementById('myChartThree'))
        let rawData = [
          {name: '脂肪 ', value:  10 },
          {name: '反式脂肪 ', value:  5 },
          {name: ' 饱和脂肪 ', value:  0.3 },
          {name: ' 膳食纤维 ', value:  2 },
          {name: ' 糖 ', value:  71 },
          {name: ' 蛋白质 ', value:  17 },
          {name: ' 咖啡因 ', value:  0.11 },
          
        ]
        myChartThree.setOption({
          title: {
            text: name?name:'绿茶拿铁',
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
            data: data ? data : rawData,
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
        let user = window.localStorage.getItem('access-user')
        let params ={user_name: user}
        // API.autocomplete(params).then(result => {
        //   console.log('result',result)
        //   this.dataOne = result.dataone
        //   this.dataTwo = result.datatwo
        //   this.dataThree = result.datathree
          
        //   this.drawOne(this.dataOne.name,this.dataOne.data)
        //   this.drawTwo(result.datatwo.name,this.dataTwo.data)
        //   this.drawThree(result.datathree.name,this.dataThree.data)
        // })
        this.drawOne(this.dataOne.name,this.dataOne.data)
        this.drawTwo()
        this.drawThree()
      
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .wrapper {
    background: url('/static/img-autogeneration/three.png');
    background-size: 100% auto;
    display: flex;
    // justify-content: space-between;
    
    .wrapper-left {
      padding-top: 120px;
      flex: 1;

      .container-one{
        margin-top: 120px;
      }
    }
    .wrapper-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
          
       .container-two {
      	margin-top: 20px;
      	margin-left: 20px;
        height: 40%;
      }
      .container-three {
        flex: 1;
        margin-top: 40px;
        display: flex;
        
        .image {
          width: 180px;
          height: 200px;
          background: url('/staic/img-autogeneration/two.png') no-repeat;
          background-size: 100% auto;
        }
        // .chart-three {
        //   flex: 1;
        // }
      }
    }
  }
</style>