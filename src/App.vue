<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar/>
  </div>
</template>
<script>

const Tabbar =()=>import('./components/Tabbar.vue')
export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style>

</style>
