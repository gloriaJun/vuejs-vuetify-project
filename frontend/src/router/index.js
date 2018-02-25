import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import FileDemo from '@/views/FileDemo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/file',
      name: 'FileDemo',
      component: FileDemo
    }
  ]
})
