<template>
  <section>
    <p v-text="state.age"></p>
    <p v-text="state.computedAge"></p>
    <p v-for="user in state.users" :key="user.name">{{user.name}}</p>
    <button @click="state.setAge">test</button>
    <button @click="greet">test</button>
  </section>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Observer } from 'mobx-vue'
import ViewModel from '../Model/ViewModel'

@Observer
@Component({
  name: 'MobxDemo2',
  props: {
    propMessage: String
  }
})
export default class MobxDemo2 extends Vue {
  // initial data
  msg = 123

  state = ViewModel

  // use prop values for initial data
  helloMsg = 'Hello, ' + this.propMessage

  // lifecycle hook
  mounted () {
    this.state.fetchUsers()
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // method
  greet () {
    alert('greeting: ' + this.helloMsg)
  }
}
</script>
