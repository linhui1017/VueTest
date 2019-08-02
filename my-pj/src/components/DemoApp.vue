<template>
  <div style="width: 500px;height: 500px; margin:0 auto">
    <md-tabs @md-changed="checkNewPosts">
      <template slot="md-tab" slot-scope="{ tab }">
        {{ tab.label }}
        <i class="badge" v-if="tab.data.badge">{{ tab.data.badge }}</i>
      </template>
      <md-tab id="tab-home" md-label="Home">
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
      </md-tab>
      <md-tab id="tab-pages" md-label="Pages">
        <pages></pages>
      </md-tab>
      <md-tab
        id="tab-posts"
        md-label="Posts"
        :md-template-data="{ badge: newPosts }"
        @click="clearNewPosts"
      >
        <p>posts</p>
      </md-tab>
      <md-tab id="tab-favorites" md-label="Favorites">
        <p>favorites</p>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: 'TabCustomTemplate',
  components: {
    pages: () => ({
      component: import('../components/tabs/pages.vue')
    }),
    'component-a': () => import('../components/ButtonCounter.vue')
  },
  data: () => ({
    newPosts: 0,
    checkInterval: null,
    posts: [
      {id: 1, title: 'DD', content: '甲甲', fontSize: 0.1},
      {id: 2, title: 'GG', content: '乙乙', fontSize: -0.1},
      {id: 3, title: 'HH', content: '丙丙', fontSize: 0.5}
    ]
  }),
  methods: {
    clearCheckPosts () {
      window.clearInterval(this.checkInterval)
      this.checkInterval = null
    },
    clearNewPosts () {
      this.clearCheckPosts()
      this.newPosts = 0
    },
    checkNewPosts (activeTab) {
      if (activeTab !== 'tab-posts' && !this.checkInterval) {
        if (this.newPosts === 99) {
          this.newPosts = '99+'
          this.clearCheckPosts()
        } else {
          this.newPosts++
        }
      }
    }
  },
  mounted () {
    this.checkNewPosts()
  }
}
</script>

<style lang="scss" scoped>
.badge {
  width: 19px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2px;
  right: 2px;
  background: red;
  border-radius: 100%;
  color: #fff;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.05em;
  font-family: "Roboto Mono", monospace;
}
</style>
