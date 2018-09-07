
<template>
  <div class="wrapper">
      <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
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
      drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: { text: '咖啡销售' },
                tooltip: {},
                xAxis: {
                    data: ["白咖啡","黑咖啡","茶","星冰乐","奶昔","浓咖啡"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        }
    },
    mounted() {
      this.drawLine();
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .wrapper {
    background: url('../../assets/img-sell/background.jpg') repeat;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    .myChart {
        margin-top: 400px;
    }
  }
</style>