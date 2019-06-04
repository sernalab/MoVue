<template>
  <div class="container content">
    <div class="row">
      <Card />
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
