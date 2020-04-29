import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddGame from '../views/AddGame.vue'
import Games from '../views/Games.vue'
import MyGames from '../views/MyGames.vue'
import RequestGame from '../views/RequestGame.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/add-game',
        name: 'Add Game',
        component: AddGame
    },
    {
        path: '/games',
        name: 'List of Game',
        component: Games
    },
    {
        path: '/my-games',
        name: 'My Checked Out Games',
        component: MyGames
    },
    {
        path: '/request-game',
        name: 'Request a new Game',
        component: RequestGame
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
