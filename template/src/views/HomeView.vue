<template lang="html">
  <h1>Home {{counter}}</h1>

</template>

<script>
export default {
  computed: {
    counter () {
      return this.$store.state.counter
    }
  }
}
</script>

<style lang="css">
</style>
