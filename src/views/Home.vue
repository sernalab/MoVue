<template>
  <div class="col-12">
    <Search @updateMovies="moviesSearched" />
    <div class="content col-12 d-flex justify-content-center flex-wrap">
      <Card :key="movie.id" v-for="movie in movies" :movie="movie"/>
    </div>
    <Modal v-if="showModal" @close="showModal = false"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search'
import Card from '@/components/Card'
import MovieService from '@/services/MovieService'
import Modal from '@/components/Modal'

export default {
  name: 'home',
  data:() => ({
    movies: undefined,
    showModal: false
  }),
  methods: {
    moviesSearched(searchedMovies) {
      this.movies = searchedMovies
    }
  }, 
  components: {
    Card,
    Search,
    Modal
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
