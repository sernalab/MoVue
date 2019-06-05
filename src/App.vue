<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <Menu />
      </div>
    </div>
    <Search />
    <router-view />
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
