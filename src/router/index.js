import { createRouter, createWebHistory } from 'vue-router'
import wheatherapp from '../views/wheather.vue'
import movies from '../views/movies.vue'
import movieDetails from '../views/movieDetails.vue'
import incometracker from '../views/incomeTrucker.vue'

const routes = [

  {
    path:'/',
    name:'weather',
    component: wheatherapp,
  },
  {
    path:'/movies',
    name:'movies',
    component: movies,
  },
  {
    path:'/movieDetails/:id',
    name:'movieDetails',
    component: movieDetails,
    props:true,
  },
  {
    path:'/incometracker',
    name:'incometracker',
    component: incometracker,
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
