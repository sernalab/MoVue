<template>
  <div id="app">
    <Menu />
    <Search />
    <router-view />
  </div>
</template>

<script>
import Menu from '@/components/Menu/Menu'
import Search from '@/components/Menu/Search'

export default {
  components: {
    Menu,
    Search
  }
}
</script>


<style src="./assets/scss/styles.scss" lang="scss">

</style>
