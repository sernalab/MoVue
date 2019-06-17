<template>
  <div class="custom-card" :style="{'background': `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`}">
    <div class="custom-card__overlay">

    </div>
    <button class="fav-icon">
      <icon class="fa fa-heart"></icon>
    </button>
    <div class="custom-card__content">
      <div class="custom-card__header">
        <h1>hi</h1>
        <h4>Hiho</h4>
      </div>
      <div class="custom-card__description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde vero libero id deserunt, illum velit dicta eligendi 
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
