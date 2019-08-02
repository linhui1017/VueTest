<template>
  <div id="hello_div" class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <div id="test2">
      <span v-bind:title="message">
        滑鼠停在這裡幾秒看看
      </span>
    </div>
    <div id="app-3">
      <p v-if="seen">现在你看到我了</p>
    </div>
    <div id="app-4">
      <ol>
        <li v-for="todo in todos" :key="todo">
          {{ todo.text }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'

// export default new Vue({
//   el: '#hello_div',
//   data: {
//     msg: 'Welcome to Your Vue.js App',
//     message: '頁面加載於' + new Date().toLocaleString(),
//     seen: true,
//     todos: [
//       { text: 'JavaScript' },
//       { text: 'Vue' },
//       { text: 'Test' }
//     ],
//     msg2: 'Hello Vue.js!'
//   }
// })

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: '頁面加載於' + new Date().toLocaleString(),
      seen: true,
      todos: [
        { text: 'JavaScript' },
        { text: 'Vue' },
        { text: 'Test' }
      ],
      msg2: 'Hello Vue.js!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
