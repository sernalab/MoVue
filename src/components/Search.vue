<template>
    <div class="col-12 d-flex flex-column align-items-center">
      <form class="form-inline">
          <input 
          class="form-control mr-sm-2" 
          type="search" 
          placeholder="Avengers..." 
          aria-label="Search" 
          v-model="searchText"
          @input="searchingMovie">
      </form>
    </div>
</template>

<script>
import MovieService from "@/services/MovieService";

export default {
  name: 'Search',
  data:() => ({
      searchText: ''
  }),
  methods: {
    async searchingMovie(){
      const movies = await MovieService.getMovies(this.searchText)
      this.$emit('updateMovies', movies)      
    }
  }
}
</script>

<style>

</style>
