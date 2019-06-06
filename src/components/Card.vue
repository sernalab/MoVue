<template>
  <div class="custom-card">
    <div class="header d-flex justify-content-between">
      <div class="date">
        <span>12 Aug 2019</span>
      </div>
      <div class="fav-icon">
        <a href="#" class="fa fa-heart-o"></a>
      </div>
    </div>
    <div class="data">
      <div class="description d-flex flex-column">
        <span class="author mb-3 text-left">Jane Doe</span>
        <h1 class="title mb-4 text-left">
          <a href="#">{{ movie.title }}</a>
        </h1>
        <p class="text text-left">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
        <a href="#" class="button">Read more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {  
  name: 'Card',
  props: {
    movie: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
