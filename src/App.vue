<template>
  <div id="app">
    <chatroom/>
  </div>
</template>


<script>
import chatroom from './components/chatroom'
import './iconfont.js'

export default {
  name: 'app',
  components: {
    chatroom
  }
}
</script>

<style>
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
