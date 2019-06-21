<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            This is the default tile!
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal">
              x
            </button>
          </slot>
        </header>
        <section class="modal-body"  id="modalDescription">
          <slot name="body">
            <iframe width="560" height="315" :src="youtubeTrailer" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            I'm the default footer!
            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal">
              Close me!
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    ytKey: String
  },
  computed: {
    youtubeTrailer() {
      return `https://www.youtube.com/embed/${this.ytKey}`
    }
  },
  methods: {
    close() {
      this.$emit(`close`)
    },
  }
}
</script>

<style>

</style>
