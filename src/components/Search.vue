<template>
    <div class="search col-12 d-flex justify-content-center mb-3">
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
        searchingMovie(){
            getMovies()
        }
    }
}
</script>

<style>

</style>
