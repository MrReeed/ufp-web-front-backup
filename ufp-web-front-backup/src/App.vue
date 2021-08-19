<template>
  <div id="app">
    <dv-full-screen-container>
      <NavHeader/>
      <router-view :key="$route.path"/>
    </dv-full-screen-container>
  </div>
</template>

<script>
import NavHeader from '@/views/home/components/NavHeader'

export default {
  name: 'App',
  components: { NavHeader }
}
</script>
<style lang="scss">

html {
  background: #FAFAFA;
}

@media (max-width: 1919px) {
  #app {
    zoom: 80%;
  }
}
</style>
