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
        let myChartOne = this.$echarts.init(document.getElementById('myChartOne'))
        var geoCoordMap = {
            "北京": [116.46, 39.92],
            "南京": [118.78, 32.04],
            "吉林": [126.57, 43.87],
            "上海": [121.48, 31.22],
            "成都": [104.06, 30.67],
            "哈尔滨": [126.63, 45.75],
            "沈阳": [123.38, 41.8],
            // "合肥":[117.27,31.86],
            "武汉": [114.31, 30.52],
            "石家庄": [114.48, 38.03],
            "天津": [117.2, 39.13],
            "太原": [112.53, 37.87],
            "西安": [108.95, 34.27],
            "南宁": [108.33, 22.84],
            "南昌": [115.89, 28.68],
            "济南": [117, 36.65],
        }

        var data = [{
            name: "北京",
            value: 38
        }, {
            name: "南京",
            value: 147
        }, {
            name: "吉林",
            value: 74
        }, {
            name: "上海",
            value: 33
        }, {
            name: "成都",
            value: 192
        }, {
            name: "哈尔滨",
            value: 35
        }, {
            name: "沈阳",
            value: 0
        }, {
            name: "武汉",
            value: 36
        }, {
            name: "石家庄",
            value: 32
        }, {
            name: "天津",
            value: 7
        }, {
            name: "太原",
            value: 1
        }, {
            name: "西安",
            value: 63
        }, {
            name: "南宁",
            value: 29
        }, {
            name: "南昌",
            value: 48
        }, {
            name: "济南",
            value: 61
        }]

        var convertData = function(data) {
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

        var convertedData = [
            convertData(data),
            convertData(data.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 6))
        ];
        data.sort(function(a, b) {
            return a.value - b.value;
        })

        var selectedItems = [];
        var categoryData = [];
        var barData = [];
        //   var maxBar = 30;
        var sum = 0;
        var count = data.length;
        for (var i = 0; i < data.length; i++) {
            categoryData.push(data[i].name);
            barData.push(data[i].value);
            sum += data[i].value;
        }
        console.log(categoryData);
        console.log(sum + "   " + count)
    
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
                text: count ? '平均: ' + parseInt((sum / count).toFixed(4)) : '',
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
                left: '10',
                right: '35%',
                center: [117.98561551896913, 31.205000490896193],
                zoom: 1.5,
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
                right: 40,
                top: 100,
                bottom: 40,
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
            var mainSeries = params.batch[0].selected[0];

            var selectedItems = [];
            var categoryData = [];
            var barData = [];
            var maxBar = 30;
            var sum = 0;
            var count = 0;

            for (var i = 0; i < mainSeries.dataIndex.length; i++) {
                var rawIndex = mainSeries.dataIndex[i];
                var dataItem = convertedData[0][rawIndex];
                var pmValue = dataItem.value[2];

                sum += pmValue;
                count++;

                selectedItems.push(dataItem);
            }

            selectedItems.sort(function(a, b) {
                //   return b.value[2] - a.value[2];
                return a.value - b.value;
            });

            for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
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