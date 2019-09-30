<template>
  <div id="app">
    <h1>Timeline Application</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  padding: 5rem;
  text-align: center;
  letter-spacing: .1rem;
}

h1{
  letter-spacing: .5rem;
}
</style>
