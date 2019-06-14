<template>
  <div class="col-12 d-flex justify-content-center flex-wrap">
    <template v-if="favourites.length">
      <Card v-for="movie in favourites" :key="movie.id" :movie="movie" />
    </template>
    <template v-else>
      <NotFoundMessage />
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Card from '@/components/Card'
import NotFoundMessage from '@/components/NotFoundMessage'

export default {
  components: {
    Card,
    NotFoundMessage
  },
  computed: {
    ...mapState(['favourites'])
  }

}
</script>

<style>

</style>
