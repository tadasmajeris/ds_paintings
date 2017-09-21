<template>
  <div>
    <h2>{{msg}}</h2>
    <article v-for='post in blogPosts' class='animated fadeIn'>
      <u v-text="post.title"></u>
      <section v-html='post.body'></section>
    </article>
  </div>
</template>

<script>
export default {
  name: 'blog',
  props: ['blogPosts'],
  data () {
    return {
      msg: 'Welcome to my blog'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin-top: 1px;
  margin-bottom: 25px;
  font-size: 21px;
  font-family: 'Cookie', 'Dancing Script', cursive;
  font-weight: normal;
}
u {
  font-family: 'Cookie', cursive;
  text-decoration: none;
  font-weight: bold;
  font-size: 21px;
}

article {
  border: 1px dotted #332c33;
  max-width: 399px;
  padding: 10px;
  padding-top: 9px;
  margin: auto;
  border-radius: 2px;
  margin-bottom: 15px;
}

</style>
