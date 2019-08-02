<template>
  <section>
    <p>{{this.state.name}}</p>
    <button @click="doUpdate">doUpdate</button>
  </section>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
import Component from 'vue-class-component'
import { Observer } from 'mobx-vue'
import { observable } from 'mobx'

class Store {
  @observable name = ''
}

@Observer
@Component({
  name: 'com',
  props: {
    name: String
  }
})
export default class Cp extends Vue {
  // lifecycle hook
  mounted () {
    console.log(1)
    this.state.name = this.name
  }

  data () {
    console.log(2)
    return {
      state: new Store()
    }
  }

  beforeUpdate () {
    console.log(4)
    console.log(this.name)
    //this.state.name = this.name 
  }

  doUpdate () {
    this.state.name = '55699'
    this.$forceUpdate()
  }
}
</script>

<style scoped>
</style>
