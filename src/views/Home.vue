<template>
  <div class="container content mb-5">
    <div class="row">
      <div class="col-12">
        <Card />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card'

export default {
  name: 'home',
  components: {
    Card
  }
}
</script>
