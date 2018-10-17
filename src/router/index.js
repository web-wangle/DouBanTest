import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Movie from '@/pages/Movie'
import Book from '@/pages/Book'
import Status from '@/pages/Status'
import Group from '@/pages/Group'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/movie', name: 'movie', component: Movie},
    {path: '/book', name: 'book', component: Book},
    {path: '/status', name: 'status', component: Status},
    {path: '/group', name: 'group', component: Group},
  ]
})
