import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/reason',
      name: 'Reason',
      component: About,
      props: true
    },
    {
      path: '/typings',
      name: 'Typings',
      component: Blog,
      props: true
    },
  ]
})
