import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/home'
import Movie from '@/components/Movie'
import SearchMovie from '@/components/SearchMovie'
import 'bulma/css/bulma.css'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      props: true,
      component: Movie
    },
    {
      path: '/search/:name',
      name: 'SearchMovie',
      props: true,
      component: SearchMovie
    }
  ],
  mode: 'history'
})
