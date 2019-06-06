<template>
  <div class="content col-12 d-flex justify-content-center flex-wrap">
    <Search @updateMovies="moviesSearched" />
    <Card :key="movie.id" v-for="movie in movies" :movie="movie"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search'
import Card from '@/components/Card'
import MovieService from '@/services/MovieService'

export default {
  name: 'home',
  data:() => ({
    movies: undefined
  }),
  methods: {
    moviesSearched(searchedMovies) {
      this.movies = searchedMovies
    }
  }, 
  components: {
    Card,
    Search
  },
  async created() {
    try {
      const newestMovies = await MovieService.getNewest()
      this.movies = newestMovies
    } catch (e) {
      console.log(e)
    }
  } 
}
</script>
