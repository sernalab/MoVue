<template>
  <div class="col-12">
    <Search @updateMovies="moviesSearched" />
    <div class="content col-12 d-flex justify-content-center flex-wrap">
      <Card @showModal="showModal" :key="movie.id" v-for="movie in movies" :movie="movie"/>
    </div>
    <Modal v-if="trailerId" @close="trailerId = undefined" :ytKey="trailerId"/>
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
    isModalVisible: false,
    trailerId: undefined
  }),   
  components: {
    Card,
    Search,
    Modal
  },
  methods: {
    moviesSearched(searchedMovies) {
      this.movies = searchedMovies
    },
    showModal(trailerId) {
      console.log('Imn')
      this.trailerId = trailerId;
    },
    closeModal() {
      this.isModalVisible = false;
    }
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
