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
  text-align: center;
  padding: 5rem;
  letter-spacing: .1rem;
}

h1{
  letter-spacing: .5rem;
}
</style>
