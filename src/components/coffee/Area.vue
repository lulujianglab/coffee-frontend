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
      drawOne(datas) {
        let myChartOne = this.$echarts.init(document.getElementById('myChartOne'))
        let geoCoordMap = {  
            "Zhengzhou": [113.65, 34.76],
            "Fuzhou": [119.3, 26.08],
            "Xiamen": [118.1, 24.46],
            "Shenyang": [123.38, 41.8], 
            "Dalian": [121.62, 38.92],
            "Qingdao": [120.33, 36.07], 
            "Xi'an": [108.95, 34.27],
            "Nanjing": [118.78, 32.04],
            "Wuhan": [114.31, 30.52],
            "Tianjin": [117.2, 39.13], 
            "Hangzhou": [120.19, 30.26],
            "Chengdu": [104.06, 30.67],
            "Guangzhou": [113.23, 23.16],
            "Shenzhen": [114.07, 22.62],
            "Beijing": [116.46, 39.92],  
            "Shanghai": [121.48, 31.22],      
        }
        let data = datas? datas:[
            { name: "Zhengzhou", value: 10},
            { name: "Fuzhou", value: 20},
            { name: "Xiamen", value: 30},
            { name: "Shenyang", value: 89},
            { name: "Dalian", value: 50},
            { name: "Qingdao", value: 60},
            { name: "Xi'an", value: 70},
            { name: "Nanjing", value: 80},
            { name: "Wuhan", value: 80},
            { name: "Tianjin", value: 40},
            { name: "Hangzhou", value: 56},
            { name: "Chengdu", value: 10},
            { name: "Guangzhou", value: 69},
            { name: "Shenyang", value: 40},
            { name: "Beijing", value: 70},
            { name: "Shanghai", value: 29}
        ]
        let convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        }

        let convertedData = [
            convertData(data),
            convertData(data.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 6))
        ];
        data.sort(function(a, b) {
            return a.value - b.value;
        })

        let selectedItems = [];
        let categoryData = [];
        let barData = [];
        //   var maxBar = 30;
        let sum = 0;
        let count = data.length;
        for (var i = 0; i < data.length; i++) {
            categoryData.push(data[i].name);
            barData.push(data[i].value);
            sum += data[i].value;
        }
    
        myChartOne.setOption({
            // backgroundColor: '#404a59',
            animation: true,
            animationDuration: 1000,
            animationEasing: 'cubicInOut',
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'cubicInOut',
            title: [{
                // text: '咖啡数据',
                // subtext: '内部数据请勿外传',
                left: 'center',
                textStyle: {
                    color: '#323c48'
                }
            }, {
                id: 'statistic',
                // text: count ? '平均: ' + parseInt((sum / count).toFixed(4)) : '',
                text: '单位:万',
                right: 120,
                top: 40,
                width: 100,
                textStyle: {
                    color: '#323c48',
                    fontSize: 16
                }
            }],
            toolbox: {
                iconStyle: {
                    normal: {
                        borderColor: '#323c48'
                    },
                    emphasis: {
                        borderColor: '#323c48'
                    }
                },
                feature: {
                    dataZoom: {},
                    brush: {
                        type: ['rect', 'polygon', 'clear']
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            brush: {
                outOfBrush: {
                    color: '#abc'
                },
                brushStyle: {
                    borderWidth: 2,
                    color: 'rgba(0,0,0,0.2)',
                    borderColor: 'rgba(0,0,0,0.5)',
                },
                seriesIndex: [0, 1],
                throttleType: 'debounce',
                throttleDelay: 300,
                geoIndex: 0
            },
            geo: {
                map: 'china',
                left: '150',
                right: '42%',
                center: [117.98561551896913, 31.205000490896193],
                zoom: 1.4,
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#111'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            tooltip: {
                trigger: 'item'
            },
            grid: {
                right: 0.5,
                top: 100,
                bottom: 50,
                width: '30%'
            },
            xAxis: {
                type: 'value',
                scale: true,
                position: 'top',
                boundaryGap: false,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    margin: 2,
                    textStyle: {
                        color: '#323c48'
                    }
                },
            },
            yAxis: {
                type: 'category',
                //  name: 'TOP 20',
                nameGap: 16,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#323c48'
                    }
                },
                data: categoryData
            },
            series: [{
                // name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertedData[0],
                symbolSize: function(val) {
                    return Math.max(val[2] / 10, 8);
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ddb926',
                        position: 'right',
                        show: true
                    }
                }
            }, {
                //  name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertedData[0],
                symbolSize: function(val) {
                    return Math.max(val[2] / 10, 8);
                },
                showEffectOn: 'emphasis',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            }, {
                id: 'bar',
                zlevel: 2,
                type: 'bar',
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: '#ddb926'
                    }
                },

                data: data
            }]
        })

        function renderBrushed(params) {
            let mainSeries = params.batch[0].selected[0];

            let selectedItems = [];
            let categoryData = [];
            let barData = [];
            let maxBar = 30;
            let sum = 0;
            let count = 0;
            for (let i = 0; i < mainSeries.dataIndex.length; i++) {
                let rawIndex = mainSeries.dataIndex[i];
                let dataItem = convertedData[0][rawIndex];
                let pmValue = dataItem.value[2];

                sum += pmValue;
                count++;

                selectedItems.push(dataItem);
            }

            selectedItems.sort(function(a, b) {
                //   return b.value[2] - a.value[2];
                return a.value - b.value;
            });

            for (let i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
                categoryData.push(selectedItems[i].name);
                barData.push(selectedItems[i].value[2]);
            }

            myChartOne.setOption({
                yAxis: {
                    data: categoryData
                },
                xAxis: {
                    axisLabel: {
                        show: !!count
                    }
                },
                title: {
                    id: 'statistic',
                    text: count ? '平均: ' + (sum / count).toFixed(4) : ''
                },
                series: {
                    id: 'bar',
                    //        sort:'descending',
                    data: barData
                }
            })
        }
        myChartOne.on('brushselected', renderBrushed)
      }  
    },
    mounted() {
        // API.area().then(result => {
        //     console.log(result)
        //     this.drawOne(result.data)
        // })
        this.drawOne()
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .wrapper {
    padding: 70px 40px 50px;
    background: url('../../assets/img-area/two.png') no-repeat;
    background-size: 100% auto;
  }
</style>