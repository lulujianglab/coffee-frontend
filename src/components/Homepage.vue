<template>
  <div class="wrapper" @click="go">

  </div>
</template>

<script>
import API from '../api/api_user.js';

  export default {

      methods: {
        go() {
          this.$router.push({path: '/introduce/autogeneration'})
          
          // setTimeout(() => {
          //   console.log(222)
          //   this.$router.push({path: '/introduce/autogeneration'})
          // },3000)  
        }
      },
      mounted() {
        // console.log(22)
        // let loginParams = {username:"zhanshan"}
        // API.test(loginParams).then(function (result) {
        //   console.log('result',result)
        // })
        
        // this.go()
      }
  }
   
</script>

<style scoped lang="scss">
  .wrapper {
    background: url('../assets/img-homepage/qt.png') no-repeat;
    background-size: 100% auto;
  }
</style>