<template lang="pug">
  <div id="app">
    <Main msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style lang="less">
html body{
    background-color: #F4F5F9;
    font-family: 'Montserrat', sans-serif;
    user-select: none;
    position: relative;
	p{
		margin: 0;
		color: #000000;
	}
	margin: 0;
	padding: 0;
}
</style>
