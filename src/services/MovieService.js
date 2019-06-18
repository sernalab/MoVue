// API KEY => 0957cd8a2455b18823ab22eefbfb23c3
// EXAMPLE => https://api.themoviedb.org/3/movie/550?api_key=0957cd8a2455b18823ab22eefbfb23c3
// EXAMPLE SEARCH => https://api.themoviedb.org/3/search/movie?api_key=0957cd8a2455b18823ab22eefbfb23c3&language=en-US&query=avengers&page=1&include_adult=false
import axios from 'axios';

const host = 'https://api.themoviedb.org/3'
const apiKey = 'api_key=0957cd8a2455b18823ab22eefbfb23c3'
const newest = '/discover/movie?sort_by=popularity.desc'

export default {
  async getMovies(searchText) {
    const dataMovie = await axios.get(`${host}/search/movie?${apiKey}&language=en-US&query=${searchText}&include_adult=false`)
    return dataMovie.data.results
  },
  async getNewest() {
    const dataMovie = await axios.get(`${host}${newest}&${apiKey}`)
    return dataMovie.data.results
  },
  async getKey(movieID) {
    const dataMovie = await axios.get(`${host}/movie/${movieID}/videos?${apiKey}`)
    return dataMovie.data.results.key
  }
}

