<template>
  <div id="app">
    <div id="nav">
      <navbar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>


<style src="./assets/scss/styles.scss" lang="scss">

</style>
