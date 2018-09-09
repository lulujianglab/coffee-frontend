<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
  padding:0px;
  margin:0px auto;
  height: 100%;
}
a{
  text-decoration:none;
    color: #FA541C;
    background-color: transparent;

    cursor: pointer;
    outline: none;
    text-decoration: none;
    transition: color .3s;
}
img {
  border-style: none;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  /* margin-top: 60px; */
}
ol, ul {
  list-style: none;
}
</style>
