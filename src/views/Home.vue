<template>
  <div class="content col-12 d-flex justify-content-center flex-wrap">
    <Card :key="movie.id" v-for="movie in movies" :movie="movie"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card'
import MovieService from '@/services/MovieService'

export default {
  name: 'home',
  data:() => ({
    movies: undefined
  }),
  components: {
    Card
  },
  async created() {
    try {
      const movies = await MovieService.getNewest()
      this.movies = movies
    } catch (e) {
      console.log(e)
    }
  } 
}
</script>
