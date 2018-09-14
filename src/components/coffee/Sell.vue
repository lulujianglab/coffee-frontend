
<template>
  <div class="wrapper">
      <div class="wrapper-left">       
        <div class="container-one">
            <div id="myChartOne" class="chart-one" :style="{width: '400px', height: '300px'}"></div>
        </div>
        <div class="container-two">
            <div id="myChartThree" class="chart-Three" :style="{width: '450px', height: '350px'}"></div>
        </div>
      </div>
      <div class="wrapper-right">
        <div class="container-three">
            <div id="myChartFour" class="chart-four" :style="{width: '580px', height: '480px'}"></div>
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
        myChart: {},
        diffData: null,
        numArr: 5,
        
      }
    },
    methods: {
        drawone() {
        	//最早记录时间
            let base = +new Date(2010, 9, 1);
            let oneDay = 24 * 3600 * 1000;
            let date = [];
					//访问量数据
            let data = [(Math.random()+0.6) * 200];					
            for (let i = 1; i < 3000; i++) {
                let now = new Date(base += oneDay);
                date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
                data.push(Math.round((Math.random() - 0.5) * 10 + data[i - 1]));
            }
            let myChartOne = this.$echarts.init(document.getElementById('myChartOne'))
            myChartOne.setOption({
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    }
                },
                title: {
                    left: 'center',
                    // text: '访问量',
                },
                toolbox: {
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: date,
                    show:false
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%'],
                    show:false
                },
                dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 10
                }, {
                    start: 0,
                    end: 10,
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }],
                series: [
                    {
                        name:'访问量数据',
                        type:'line',
                        smooth:true,
                        symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                            	//线条颜色
                                color: 'rgb(223, 127, 111)'
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    //填充区域颜色
                                    color: 'rgb(34, 186, 222)'
                                }, {
                                    offset: 1,
                                    //填充区域颜色
                                    color: 'rgb(166, 50, 222)'
                                }])
                            }
                        },
                        data: data
                    }
                ]
            })
        },
        drawthree(data) {
            let myChartThree = this.$echarts.init(document.getElementById('myChartThree'))
            myChartThree.setOption({
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    x : 'center',
                    y : 'bottom',
                    data:[]
                },
                calculable : true,
                series : [
                    
                    {
                        name:'销量',
                        type:'pie',
                        radius : [20, 150],
                        roseType : 'area',
                        data: data?data:[
                            {value:513928, name:'摩卡星冰乐（不加奶油）'},
                            {value:509893, name:'巧克力碎星冰乐（不加奶油）'},
                            {value:508568, name:'意式浓缩咖啡'},
                            {value:496876, name:'美式咖啡'},
                            {value:486085, name:'摩卡咖啡（不加奶油）'},
                            {value:479179, name:'拿铁咖啡'},
                            {value:470965, name:'(香草)风味拿铁'},
                            {value:456401, name:'焦糖星冰乐（不加奶油）'},
                            {value:447188, name:'卡布奇诺'},
                            {value:417507, name:'丝滑拿铁'},
                            {value:286935, name:'芒果橘子冰沙'},
                            {value:279783, name:'焦糖苹果汁（不加奶油）'},
                            {value:275544, name:'泰舒茶'},
                            {value: 269592, name:'冰咖啡'},
                            {value:267436, name:'巧克力碎星冰乐'},
                            {value:261970, name:' 绿茶拿铁'},
                            {value:257991, name:'摩卡星冰乐'},    
                        ]
                    }
                ]           
            })
        },
                      
        drawfour(name,num) {
            let myChartFour = this.$echarts.init(document.getElementById('myChartFour'))
            myChartFour.setOption({
				tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: name ? name:['经典浓缩饮品', '咖啡饮品','咖啡混合星冰乐','奶味咖啡星冰乐','咖啡轻混合星冰乐','冰摇饮品','招牌浓缩饮品','奶昔饮品','泰舒茶饮品'],
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis:  {
                    type: 'category',
                    data: ['一月','二月','三月'],
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: name?name[0]:'经典浓缩饮品',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: num?num[0]:[554453, 527101, 549124]
                    },
                    {
                        name: name?name[1]:'咖啡饮品',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: num?num[1]:[569073, 596320, 510297]
                    },
                    {
                        name: name?name[2]:'咖啡混合星冰乐',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: num?num[2]:[230458, 239444, 240708]
                    },
                    {
                        name: name?name[3]:'奶味咖啡星冰乐',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: num?num[3]:[257803, 226163, 285646]
                    },
                    {
                        name: name?name[4]:'咖啡轻混合星冰乐',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: num?num[4]:[268433, 237569, 243109]
                    },
                    {
                        name: name?name[5]:'冰摇饮品',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: num?num[5]:[262012, 221669, 260424]
                    },
                    {
                        name: name?name[6]:'招牌浓缩饮品',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: num?num[6]:[233848, 252678, 228465]
                    },
                    {
                        name: name?name[7]:'奶昔饮品',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: num?num[7]:[254668, 262252, 245291]
                    },
                    {
                        name: name?name[8]:'泰舒茶饮品',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: num?num[8]:[425087, 414906, 389457]
                    }
                ]
            })
        }
    },
    mounted() {
        // API.hotoccupy().then(result => {
        //   this.drawthree(result.data)
        // })
        // API.hotmonth().then(result => {
        //   console.log(result)
        //   console.log(3,result.data)
        //   this.drawfour(result.data.name,result.data.num)
        // })
    this.drawone()
    this.drawfour()
    this.drawthree()
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .wrapper {
    background: url('../../assets/img-sell/three.png') no-repeat;
    background-size: 100% auto;
    display: flex;
    justify-content: space-between;
    // padding: 50px 0px;
    .wrapper-left {
        flex: 1;
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        

       .container-one {
            flex: 1;
            margin-top: -70px;
        }
        .container-two {    
            margin-left: 40px;
            flex: 1;
            width: 1000px;
            height: 3000px;
            margin-bottom: 50px;
            display: flex;
        }
    }
    .wrapper-right {
        padding-top: 220px;
        flex: 1;
        display: flex;
        .container-three {
            flex: 1;
            display: flex;
            // justify-content: flex-end;
            // align-items: center;       
        }
    }
  }
</style>