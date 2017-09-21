<template>
  <div>
    <transition name='fadePhoto'>
      <div v-if='postClicked' class='modal-mask'>
        <table>
          <div>
            <img :src='postClicked.photos.original_size.url' @click='clickPost(null)' class='img-responsive'/>
          </div>
        </table>
      </div>
    </transition>
    <p>visit my shop at <a href='https://society6.com/dspaintings' target="_blank">society6.com/dspaintings</a></p>
    <p>or say hi at <a href='mailto:dovailira@gmail.com'>dovailira@gmail.com</a></p>
    <article v-for='post in posts' class='animated fadeIn' @click='clickPost(post)'>
      <img :src="post.photos.alt_sizes[2].url"/><br />
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
      tumblr: null,
      postClicked: null
    }
  },

  methods: {
    clickPost(post) {
      this.postClicked = post;
      let body = document.getElementById('body');
      body.style.overflow = post == null ? 'auto':'hidden';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  background: white;
}
table {
  position: relative;
  height: 100%;
}
table div {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  padding: 15px;
}
table img {
  width: 100%;
  height: auto;
  cursor: pointer;
}

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
article:hover u, p a:hover {
  background-color: black;
  color: white;
  text-decoration: none;
}
article {
  width: 250px;
  margin: auto;
  margin-bottom: 20px;
  cursor: pointer;
}
article u {
  padding: 0 3px 1px 3px;
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
