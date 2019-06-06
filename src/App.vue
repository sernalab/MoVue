<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <Menu />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu/Menu'

export default {
  components: {
    Menu
  }
}
</script>


<style src="./assets/scss/styles.scss" lang="scss">

</style>
