<template>
  <div class='outer'>
    <div class="inner">
      <div class='container'>
        <header>
          <img class='logo' src="https://dovilestrazdiene.files.wordpress.com/2017/09/cropped-avatar.jpeg">
          <h1>Dovile Strazdiene Art</h1>

          <div class='social-icons'>
            <a class='fb' href='https://www.facebook.com/dstrazdiene/' target="_blank" title="DS Paintings Facebook"><img src="./assets/icons/fb.svg"></a>
            <a class='in' href='https://www.instagram.com/dovilestrazdiene/' target="_blank" title="DS Paintings Instagram"><img src="./assets/icons/in.svg"></a>
            <a class='tw' href='https://www.twitter.com/DSpaintings' target="_blank" title="DS Paintings Twitter"><img src="./assets/icons/tw.svg"></a>
          </div>
        </header>
        <main>
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Grand+Hotel|Cookie|Dancing+Script');

body, html, .outer, .inner {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

* {
  font-family: 'Cookie', 'Dancing Script', cursive;
  box-sizing: border-box;
  color: #332c33;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.outer {
  display: table;
}

.inner {
  display: table-cell;
  /*vertical-align: middle;*/
}

.container {
  width: 500px;
  margin: auto;
  text-align: center;
}

header {
  padding: 15px;
}

img.logo {
  width: 150px;
  border-radius: 50%;
}

.container h1 {
  margin: 0;
  font-size: 37px;
  position: relative;
  left: -1px;
  margin-top: 1px;
  margin-bottom: -11px;
}

.container p {
  margin: 35px 0;
  font-size: 20px;
}

.social-icons img {
  width: 30px;
  height: 30px;
}
.social-icons a {
  position: relative;
}
.social-icons .fb {
  top: -165px;
  left: -69px;
}
.social-icons .in {
  top: -126px;
  left: -109px;
}
.social-icons .tw {
  top: -87px;
  left: -136px;
}

</style>
