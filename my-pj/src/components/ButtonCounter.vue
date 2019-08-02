<template>
  <div>
    <button v-on:click="count++">You clicked me {{ count }} times. My Title is {{ title }}</button>
    <br>
    <span>
      <slot name="uname"></slot>
    </span>
  </div>
</template>

<script>

var ButtonCounter = {
  name: 'ButtonCounter',
  props: ['title'],
  data () {
    return {
      count: 0
    }
  }
}

var BC = {
  name: 'BC',
  data () {
    return {
      count: 0
    }
  }
}
export { BC }
export default ButtonCounter
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
