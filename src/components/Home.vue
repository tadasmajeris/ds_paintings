<template>
  <div>
    <p>visit my shop at <a href='https://society6.com/dspaintings' target="_blank">society6.com/dspaintings</a></p>
    <p>or say hi at <a href='mailto:dovailira@gmail.com'>dovailira@gmail.com</a></p>
    <article v-for='post in posts' class='animated fadeIn'>
      <img :src="post.photos.alt_sizes[4].url"/><br />
      <span v-text="post.summary"></span>
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
p {
  margin: 0;
  margin-left: 2px;
}
p:last-of-type {
  margin-bottom: 30px;
  margin-left: 0;
}
p a {
  display: inline-block;
  padding: 0 4px 2px 4px;
}
p a:hover {
  background-color: black;
  color: white;
  text-decoration: none;
}
article {
  width: 250px;
  margin: auto;
  margin-bottom: 20px;
}
article img {
  width: 100%;
}
@media (min-width: 768px) {
  article {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
