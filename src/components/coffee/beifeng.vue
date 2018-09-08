<template>
  <div class="wrapper">
    <div class="container-one">
        <div id="myChartOne" class="chart-one" :style="{width: '1000px', height: '640px'}"></div>
    </div>
  </div>
    
</template>

<script>
  import {bus} from '../../bus.js'
  import API from '../../api/api_user'
  import avatar from '../../assets/avatar.gif'
  import china from 'echarts/map/js/china'
  export default {
    created(){
      
    },
    data () {
      return {
        
      }
    },
    methods: {
      drawOne() {
            console.log(22)
            let myChartOne = this.$echarts.init(document.getElementById('myChartOne'))
            var citydata = [
        { name: "北京", value: 974 },
        { name: "天津", value: 532 },
        { name: "上海", value: 834 },
        { name: "重庆", value: 683 },
        { name: "河北", value: 283 },
        { name: "河南", value: 345 },
        { name: "云南", value: 272 },
        { name: "辽宁", value: 194 },
        { name: "黑龙江", value: 342 },
        { name: "湖南", value: 389 },
        { name: "安徽", value: 267 },
        { name: "山东", value: 675 },
        { name: "新疆", value: 174 },
        { name: "江苏", value: 574 },
        { name: "浙江", value: 278 },
        { name: "江西", value: 528 },
        { name: "湖北", value: 144 },
        { name: "广西", value: 448 },
        { name: "甘肃", value: 197 },
        { name: "山西", value: 203 },
        { name: "内蒙古", value: 373 },
        { name: "陕西", value: 563 },
        { name: "吉林", value: 147 },
        { name: "福建", value: 112 },
        { name: "贵州", value: 373 },
        { name: "广东", value: 747 },
        { name: "青海", value: 38 },
        { name: "西藏", value: 126 },
        { name: "四川", value: 215 },
        { name: "宁夏", value: 172 },
        { name: "海南", value: 77 },
        { name: "台湾", value: 837 },
        { name: "香港", value: 677 },
        { name: "澳门", value: 43 },
        { name: "南海诸岛", value: 53 }
    ];

    var yMax = 1000;
    var dataShadow = [];

    var resultdata0 = [];
    var titledata = [];
    var bartop10 = [];


    function NumDescSort(a,b){
        return b.value-a.value;
    }
    function NumAsceSort(a,b){
        return a.value-b.value;
    }

    // 先进行一次降序排序，找出最大的前十个
    citydata.sort(NumDescSort);

    for (var i = 0; i < 10; i++) {
          var top10 = {
              name: citydata[i].name,
              value: citydata[i].value
          };
          bartop10.push(top10);
          dataShadow.push(yMax);
    }

    bartop10.sort(NumAsceSort);
    for (var i = 0; i < bartop10.length; i++) {
          titledata.push(bartop10[i].name);
    }

    // console.log(citydata);
    // console.log(bartop10);
    // console.log(titledata);

     myChartOne.setOption({
        title: [
          {
            show: true,
            text: '地域分布',
          },
          {
            show: true,
            text: 'TOP 10 排行榜',
            right:'40',
            textStyle: {
                color: '#666666',
                fontSize: 14
            }
          }
        ],
        tooltip:{
              trigger: "item"
        },
        legend: {
            show: false
        },
        grid: {
          // 仅仅控制条形图的位置
            show: true,
            containLabel: false,
            right: 40,
            top: 50,
            bottom: 30,
            width: '30%'
        },
        visualMap: {
            type: 'continuous',
            min: 0,
            max: 1000,
            text:['多','少'],
            seriesIndex: [0,2],
            dimension:0,
            realtime: false,
            left: 0,
            itemWidth: 18,
            itemHeight: 100,
            calculable : true,
            inRange: {
                color: ['rgba(159,205,253,0.50)','#60ACFC'],
                symbolSize: [100, 100]
            },
            outOfRange: {
                color: ['#eeeeee'],
                symbolSize: [100, 100]
            },
        },
        toolbox: {
            show: false
        },

        xAxis: [
            {
                type: "value",
                position: 'top',
                inside: false,
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                margin: 10
            }
        ],
        yAxis: [
            {
                type: "category",
                boundaryGap: true,
                axisLine: {
                    show: false
                },
                axisLabel: {
                    align: "right",
                    margin: 10,
                    showMaxLabel: true,
                },
                data: titledata
            }
        ],

        series: [
            {
                name: "人数",
                type: "map",
                mapType: "china",
                left: '100',
                width: '40%',
                roam: 'move',
                mapValueCalculation: "sum",
                zoom:1,
                selectedMode: false,
                showLegendSymbol: false,
                label:{
                    normal:{
                        textStyle:{
                            color: '#666'
                        }
                    },
                    emphasis:{
                        textStyle:{
                            color: '#234EA5'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#EEEEEE',
                        borderColor: '#FFFFFF'
                    },
                    emphasis: {
                        areaColor: '#E5F39B'
                    }
                },
                data: citydata
            },
            {
                name: "背景",
                type: "bar",
                roam: false,
                visualMap: false,
                itemStyle: {
                  color: "#eeeeee",
                  opacity: 0.5
                },
                label: {
                  show: false
                },
                emphasis: {
                  itemStyle: {
                    color: "#eeeeee",
                    opacity: 0.5
                  },
                  label: {
                    show: false
                  },
                },
                silent: true,
                barWidth: 18,
                barGap:'-100%',
                data: dataShadow,
                animation: false
            },
            {
                name: "人数",
                type: "bar",
                roam: false,
                visualMap: false,
                // itemStyle: {
                //   color: "#60ACFC"
                // },
                barWidth: 18,
                label: {
                    normal: {
                        show: true,
                        fontSize: 12,
                        position: 'insideLeft'
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: bartop10
            }

        ]
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
      padding: 50px 40px;
    // background: url('../../assets/img-autogeneration/background.jpg') repeat;
    // background-size: cover;s
  }
</style>