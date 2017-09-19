<template>
  <div>
    <article v-for='post in posts'>
      <img :src="post.photos.alt_sizes[4].url"/><br />
      <u v-text="post.summary"></u>
    </article>
  </div>
</template>

<script>
export default {
  name: 'home',

  props: ['posts'],

  data () {
    return {
      msg: 'Welcome to DS Paintings',
      tumblr: null,
      client: null,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
