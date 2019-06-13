<template>
  <div class="custom-card mx-4 mb-4" :style="{
    'background': `url(https://image.tmdb.org/t/p/w500/${movie.poster_path}) center / cover no-repeat`
  }">
    <div class="header d-flex justify-content-between">
      <div class="date">
        <span>{{ reversedDate }}</span>
      </div>
      <div class="fav-icon">
        <button @click="addToFavourites(movie)" class="fa fa-heart"></button>
      </div>
    </div>
    <div class="data">
      <div class="description d-flex flex-column mt-3">
        <h1 class="title mb-4 text-left">
          <a href="#">{{ movie.title }}</a>
        </h1>
        <p class="text text-left">{{ movie.overview }}</p>
        <a href="#" class="button">Read more</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {  
  name: 'Card',
  props: {
    movie: Object
  },
  computed: {
    reversedDate(){
      return this.movie.release_date.split("-").reverse().join("-");
    }
  },
  methods: {
    ...mapActions(['addToFavourites'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
