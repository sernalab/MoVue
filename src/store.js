import Vue from 'vue'
import Vuex from 'vuex'
//import MovieService from 'movieservice'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favourites: []
  },
  mutations: {
    addFavourite (state, movie) {
      state.favourites.push(movie)
    }
  },
  actions: {
    addToFavourites ({ state, commit }, movie) {
      if (state.favourites.some(fav => movie.id === fav.id)) {
        return 
      } 

      commit('addFavourite', movie)
    }
  }
})
