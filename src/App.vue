<template>
  <div class='outer'>
    <div class="inner">
      <div class='container'>

        <header>
          <img class='logo' src="https://dovilestrazdiene.files.wordpress.com/2017/09/cropped-avatar.jpeg">
          <h1 v-text='linkText'></h1>

          <div class='social-icons'>
            <a v-for='(socialLink, key) in socialLinks' :class='key' :title="socialLink.text"
              @mouseover="socialLink.show=true" @mouseleave="socialLink.show=false" :href='socialLink.url' target="_blank">
              <img :src="'./static/icons/'+key+'.svg'">
            </a>
          </div>

          <div class='menu-links'>
            <router-link v-for='(menuLink, key) in menuLinks' :class='key' :title="menuLink.text" :to="menuLink.path">
              <span @mouseover="menuLink.show=true" @mouseleave="menuLink.show=false">{{key}}</span>
            </router-link>
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
  name: 'app',

  data() {
    return {
      socialLinks: {
        fb: {
          show: false,
          text: 'DS on Facebook',
          url:  'https://www.facebook.com/dstrazdiene/',
        },
        in: {
          show: false,
          text: 'DS on Instagram',
          url:  'https://www.instagram.com/dovilestrazdiene/',
        },
        tw: {
          show: false,
          text: 'DS on Twitter',
          url:  'https://www.twitter.com/DSpaintings',
        },
      },
      menuLinks: {
        H: {
          show: false,
          text: 'Home',
          path: '/',
        },
        A: {
          show: false,
          text: 'About',
          path: '/about',
        },
        B: {
          show: false,
          text: 'Blog',
          path: '/blog',
        }
      }
    }
  },

  computed: {
    linkText() {
      let linkText = 'Dovile Strazdiene Art';
      for (var key in this.socialLinks) {
        if (this.socialLinks[key].show) {
          linkText = this.socialLinks[key].text;
        }
      }
      for (var key in this.menuLinks) {
        if (this.menuLinks[key].show) {
          linkText = this.menuLinks[key].text;
        }
      }
      return linkText;
    }
  }
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
  text-align: center;
}

header {
  padding: 15px;
  width: 320px;
  margin: auto;
  position: relative;
}

main {
  clear: both;
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

.social-icons {
  position: absolute;
  top: 36px;
  left: -14px;
}
.social-icons img {
  width: 30px;
  height: 30px;
}
.social-icons a {
  position: relative;
}
.social-icons .fb {
  left: 59px;
}
.social-icons .in {
  top: 39px;
  left: 20px;
}
.social-icons .tw {
  top: 78px;
}

.menu-links {
  position: absolute;
  top: 36px;
  right: -14px;
}

.menu-links a {
  background: #332c33;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: inline-block;
  cursor: pointer;
  font-size: 24px;
  line-height: 1.4;
  position: relative;
  text-decoration: none;
}
.menu-links a span {
  color: white;
}

.menu-links a.A {
  top: 39px;
  left: -22px;
}

.menu-links a.B {
  top: 78px;
  left: -60px;
}

</style>
