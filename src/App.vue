<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <Menu />
        <Search />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu/Menu'
import Search from '@/components/Search'

export default {
  components: {
    Menu,
    Search
  }
}
</script>


<style src="./assets/scss/styles.scss" lang="scss">

</style>
