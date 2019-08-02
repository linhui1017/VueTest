<template>
    <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <!-- <button v-on:click="$emit('enlarge-text')"> -->
        <button @click="$emit('enlarge-text', post.fontSize)">
            Enlarge text
        </button>
        <div v-html="post.content"></div>
    </div>
</template>

<script>

var BlogPost = {
  name: 'BlogPost',
  props: ['post'],
  data () {
    return {}
  }
}

export default BlogPost
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
