<template>
  <div class="custom-card" :style="{'background': `url(https://image.tmdb.org/t/p/w500/${movie.poster_path}) no-repeat`}">
    <div class="custom-card__overlay"></div>
    <div class="custom-card__content align-items-center">
      <button @click="addToFavourites(movie)" class="custom-card__fav-icon">
        <i class="fa fa-heart"></i>
      </button>
      <div class="custom-card__header">
        <h1 class="custom-card__title mb-3 mt-3">{{ movie.title }}</h1>
        <h4 class="custom-card__date mb-3">{{ reversedDate }}</h4>
      </div>
      <div class="custom-card__description mb-3">
        {{ movie.overview }} 
      </div>
      <a href="#" class="mb-3 read-more">Read More</a>
      <button id="showModal" class="btn btn-outline custom-card__button" @click="showModal">
        Watch Trailer
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MovieService from '@/services/MovieService'

export default {  
  name: 'Card',
  data() {
    return {
      ytKey: undefined
    }
  },
  props: {
    movie: Object
  },
  computed: {
    reversedDate(){
      return this.movie.release_date.split("-").reverse().join("-");
    }
  },
  async created() {
    const ytKey = await MovieService.getKey(this.movie.id)
    this.ytKey = ytKey
  },
  methods: {
    ...mapActions(['addToFavourites']),
    showModal() {
      this.$emit('showModal', this.ytKey)
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
