<template>
    <div class="base-test">
        <h3>{{ title }}</h3>
    </div>
</template>

<script>

export default {
  name: 'base-test',
  props: ['title'],
  data () {
    return {}
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
