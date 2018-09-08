<template>
  <div class="wrapper">
      <div class="wrapper-left">
        <div class="container-one">
            <div id="myChartOne" class="chart-one" :style="{width: '300px', height: '300px'}"></div>
        </div>
      </div>
      <div class="wrapper-right">
          <div class="container-one">
            <div id="myChartOne" class="chart-one" :style="{width: '300px', height: '300px'}"></div>
        </div>
        <div class="container-one">
            <div class="image"></div>
            <div id="myChartOne" class="chart-one" :style="{width: '300px', height: '300px'}"></div>
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
      
     
    },
    mounted() {
      
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .wrapper {
    background: url('../../assets/img-hot/one.png') no-repeat;
    background-size: 100% auto;
    display: flex;
    justify-content: space-between;
    padding: 200px 40px 40px 40px;
  }
</style>