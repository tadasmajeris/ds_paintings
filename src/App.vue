<template>
  <div class='outer'>
    <div class="inner">
      <div class='container'>

        <header>
          <img class='logo' src="https://dovilestrazdiene.files.wordpress.com/2017/09/cropped-avatar.jpeg">
          <h1 v-text='headerText'></h1>

          <div class='social-icons'>
            <a v-for='(socialLink, key) in socialLinks' :class='key' :key='key'
              @mouseover="socialLink.show=true" @mouseleave="socialLink.show=false" :href='socialLink.url' target="_blank">
              <div class='hover-text' v-text='socialLink.text' v-show='socialLink.show'></div>
              <img :src="'./static/icons/'+key+'.svg'">
            </a>
          </div>

          <div class='menu-links'>
            <section v-for='(menuLink, key) in menuLinks' @mouseover="menuLink.show=true" @mouseleave="menuLink.show=false" :class='active(menuLink)'>
              <router-link :class='key' :to="menuLink.path" :key='key'>
                <span>{{key}}</span>
                <div class='hover-text' v-text='menuLink.text' v-show='menuLink.show'></div>
              </router-link>
            </section>
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
        A: {
          show: false,
          name: 'Home',
          text: 'Art',
          path: '/',
        },
        R: {
          show: false,
          name: 'Reason',
          text: 'Reason',
          path: '/reason',
        },
        T: {
          show: false,
          name: 'Typings',
          text: 'Typings',
          path: '/typings',
        }
      }
    }
  },

  computed: {
    headerText() {
      return this.$route.name == 'Home' ? 'Dovile Strazdiene Art' : this.$route.name;
    }
  },

  methods: {
    active(item) {
      return this.$route.name == item.name ? 'active' : '';
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Dosis:400|Cookie|Dancing+Script');

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
  font-size: 20px;
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
  text-decoration: none;
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
  left: -7px;
}
.social-icons .hover-text {
  position: absolute;
  top: -10px;
  left: -93px;
  width: 88px;
  text-align: right;
  font-size: 16px;
}


.menu-links {
  position: absolute;
  top: 36px;
  right: -13px;
}
.menu-links .hover-text {
  position: absolute;
  top: 5px;
  left: 37px;
  width: 60px;
  text-align: left;
  font-size: 16px;
}
.menu-links section {
  float: left;
}
.menu-links a {
  background: #332c33;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: inline-block;
  cursor: pointer;
  font-size: 23px;
  line-height: 1.4;
  position: relative;
  text-decoration: none;
}
.menu-links a span {
  color: white;
}
.menu-links a.R {
  top: 39px;
  left: -22px;
  font-size: 22px;
}
.menu-links a.T {
  top: 78px;
  left: -60px;
  padding-right: 2px;
  padding-top: 1px;
}
.menu-links a.T span {

}
.menu-links .active a span {
  font-weight: bold;
}

</style>
