import Vue from 'vue'
import Router from 'vue-router'
import VueJS from '@/components/VueJS'
import Board from '@/components/Board'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/VueJS',
      name: 'VueJS',
      component: VueJS
    },
    {
      path: '/',
      name: 'Board',
      component: Board
    }
  ]
})
