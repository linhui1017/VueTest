<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <hello></hello> -->
    <!-- <router-view/> -->
    <div id="div1">
      <span v-bind:title="message">
        滑鼠停在這裡幾秒看看
      </span>
      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>
    </div>
    <div id="div2">
      <ul id="v-for-object" class="demo">
        <li v-for="(value, name, index) in object" v-bind:key="index">
          {{ value }}
        </li>
      </ul>
    </div>
    <div id="app-5">
      <p>{{ msg }}</p>
      <button @click="reverseMessage">反转消息</button>
    </div>
    <div v-bind:class="classObject">
      123456
    </div>
    <div id="app-6">
      <p>Original message:
        <input v-model="computedMsg">
      </p>
      <p>Computed reversed message: "{{ reversedComputedMsg }}"</p>
    </div>
    <div id="app-7">
      <div v-for="(item, index) of items" :key="item.index">
        {{ index }} - {{ item.message }}
      </div>
    </div>
    <div id="example-1">
      <button v-on:click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
      <input
        id="one"
        type="checkbox"
        v-model="toggle"
        true-value="yes"
        false-value="no"
      >
      <label for="one">{{toggle}}</label>
      <br/>
      <select id="two" v-model="selected">
        <!-- 内联对象字面量 -->
        <option v-bind:value="{ number: 123 }">123</option>
        <option v-bind:value="{ number: 456 }">456</option>
      </select>
      <label for="two">{{selected.number}}</label>
      <br/>
      <br/>
      <input v-model.number.lazy="messageOne" type="number" placeholder="edit me">
      <p>Message is: {{ messageOne }}</p>
    </div>
    <div id="components-demo">
      <component-a
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:title="post.title"
      :ref="'cv' + post.id"
      >
        <template v-slot:uname>
          <h1>Here might be a page title</h1>
        </template>
      </component-a>
    </div>
    <div id="blog-posts-events-demo">
      <div :style="{ fontSize: postFontSize + 'em' }">
        <BlogPost
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:post="post"
          v-on:enlarge-text="onEnlargeText"
        ></BlogPost>
      </div>
    </div>
    <base-test title="linhui"></base-test>
    <div>
        <button @click="show = !show">Load Tooltip</button>
        <div v-if="show">
            <Tooltip ref="tooltip1" />
        </div>
        <div>
          <v-icon class="custom-icon" name="eye" spin></v-icon>
        </div>
        <div>
          <font-awesome-icon icon="user-secret" class="custom-icon"/>
          <font-awesome-icon icon="address-card" class="custom-icon"/>
          <font-awesome-icon icon="spinner" class="custom-icon" spin/>
        </div>
    </div>
    <div class="vld-parent">
        <loading :active.sync="isLoading"
        :can-cancel="false"
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
        <label><input type="checkbox" v-model="fullPage">Full page?</label>
        <button @click.prevent="doAjax">fetch Data</button>
    </div>
    <div>
      <button @click="demo">demo</button>
    </div>
    <div>
        <div>
          <small>Flat</small>
          <md-button>Default</md-button>
          <md-button :md-ripple="false">Ripple Off</md-button>
          <md-button class="md-primary">Primary</md-button>
          <md-button class="md-accent">Accent</md-button>
          <md-button disabled>Disabled</md-button>
        </div>

        <div>
          <small>Raised</small>
          <md-button class="md-raised">Default</md-button>
          <md-button class="md-raised" :md-ripple="false">Ripple Off</md-button>
          <md-button class="md-raised md-primary">Primary</md-button>
          <md-button class="md-raised md-accent">Accent</md-button>
          <md-button class="md-raised" disabled>Disabled</md-button>
        </div>

        <div>
          <small>Dense</small>
          <md-button class="md-dense md-primary">Flat</md-button>
          <md-button class="md-dense md-raised md-primary">Raised</md-button>
        </div>
      </div>
      <div class="app-10">
        <md-datepicker v-model="selectedDate">
          <label>Select date</label>
        </md-datepicker>
      </div>
      <div class="app-11">
        <anchored-heading :level="1">
          Some text content
          <!-- TODO: Add tagline -->
        </anchored-heading>
      </div>
      <div class="app-12">
        <button v-on:click="testDestory">destroy test</button>
      </div>
      <div class="app-13">
        <DemoApp v-if="destroyComponent" />
      </div>
      <div>
        <component :is="view"></component>
      </div>
      <div class="app-14">
        <MobxDemo/>
      </div>
      <div class="app-15">
        <MobxDemo/>
      </div>
       <div>
        <MobxDemo2 propMessage="Linhui"/>
      </div>
       <div>
          <com name="Linhui"></com>
      </div>
  </div>
</template>

<script>

// import Hello from './components/HelloWorld'

// export default {
//   name: 'App',
//   components: {
//     Hello
//   }
// }

// import _ from 'lodash'
import BlogPost from './components/BlogPost.vue'
// Import component
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'

import AnchoredHeading from './components/AnchoredHeading.vue'

import DemoApp from './components/DemoApp.vue'

import MobxDemo from './components/MobxDemo.vue'

import MobxDemo2 from './components/MobxDemo2.vue'

import Cp from './components/Cp.vue'

var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

export default {
  name: 'App',
  mixins: [myMixin],
  components: {
    Loading,
    'component-a': () => import('./components/ButtonCounter.vue'),
    'BlogPost': BlogPost,
    Tooltip: () => ({
      component: import('./components/Tooltip'),
      loading: Loading,
      delay: 20
    }),
    Tooltip2: () => ({
      component: import('./components/Tooltip2'),
      loading: Loading,
      delay: 20
    }),
    AnchoredHeading,
    DemoApp,
    MobxDemo,
    MobxDemo2,
    'com': Cp
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: '頁面加載於' + new Date().toLocaleString(),
      seen: true,
      awesome: false,
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },
      classObject: {
        active: true,
        'text-danger': true
      },
      computedMsg: 'Hello',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      counter: 0,
      toggle: 'yes',
      selected: [],
      messageOne: '',
      postFontSize: 1,
      posts: [
        {id: 1, title: 'AA', content: '甲甲', fontSize: 0.1},
        {id: 2, title: 'BB', content: '乙乙', fontSize: -0.1},
        {id: 3, title: 'CC', content: '丙丙', fontSize: 0.5}
      ],
      user: {
        firstName: 'linhui',
        lastName: 'Huang'
      },
      show: false,
      isLoading: false,
      fullPage: true,
      selectedDate: null,
      destroyComponent: true,
      disabledDates: date => {
        const day = date.getDay()
        return day === 6 || day === 0
      },
      view: 'Tooltip'
    }
  },
  methods: {
    reverseMessage: function () {
      this.msg = this.msg.split('').reverse().join('')
    },
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount
    },
    doAjax: function () {
      this.isLoading = true
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false
      }, 5000)
    },
    onCancel: function () {
      console.log('User cancelled the loader.')
    },
    demo: function () {
      console.log(this.$refs.cv2[0].count)
    },
    testDestory: function () {
      this.destroyComponent = !this.destroyComponent
      if (this.view === 'Tooltip') {
        this.view = 'Tooltip2'
      } else {
        this.view = 'Tooltip'
      }
    }
  },
  computed: {
    // 计算属性的 getter
    reversedComputedMsg: function () {
      // `this` 指向 vm 实例
      return this.computedMsg.split('').reverse().join('')
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.v-icon,
.custom-icon {
  width: 48px;
  height: 48px;
  font-size: 48px;
}
small {
  display: block;
}
.md-date {
  width:800px;
}
</style>
