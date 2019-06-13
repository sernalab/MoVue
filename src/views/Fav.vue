<template>
  <div class="favorite col-12 d-flex justify-content-center">
      <Card v-for="movie in favourites" :key="movie.id" :movie="movie" />
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
