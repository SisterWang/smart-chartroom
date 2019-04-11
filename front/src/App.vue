<template>
  <div id="app">
      <div>
        <el-menu>
          <el-menu-item index="1">智能聊天室</el-menu-item>
        </el-menu>
      </div>
      <router-view></router-view>
  </div>
</template>


<script>
import './iconfont.js'

export default {
  name: 'app',
  methods: {

  },
  created() {
    this.$router.push("login")
  }
}
</script>

<style lang="scss">

  html {
    height: 100%;
    display: table;
    width: 100%;
  }

  body {
    display: table-cell;
    height: 100%;
  }
    .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  #app {
    background: url('../public/毛玻璃.jpg') no-repeat;
    height: 100%;
  }

</style>
