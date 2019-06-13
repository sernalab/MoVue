<template>
  <div class="content col-12 d-flex justify-content-center flex-wrap">
    <template v-if="favourites.length">
      <Card v-for="movie in favourites" :key="movie.id" :movie="movie" />
    </template>
    <div class="fav-not-found" v-else>
      <p>No Movies</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Card from '@/components/Card'

export default {
  components: {
    Card
  },
  computed: {
    ...mapState(['favourites'])
  }

}
</script>

<style>

</style>
