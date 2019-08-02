<template>
  <section>
    <p v-text="state.age"></p>
    <p v-text="state.computedAge"></p>
    <p v-for="user in state.users" :key="user.name">{{user.name}}</p>
    <button @click="state.setAge">set age</button>
    <button @click="state.reset">reset</button>
  </section>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Observer } from 'mobx-vue'
import ViewModel from '../Model/ViewModel'

@Observer
@Component
export default class App extends Vue {
  state = ViewModel
  mounted () {
    this.state.fetchUsers()
  }
}
</script>
