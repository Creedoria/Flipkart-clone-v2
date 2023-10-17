import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import ProductList from '../views/ProductList.vue'
import ProductsList from '../views/ProductsList.vue'
import signup from '../views/Signup.vue'
// import router from './index'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainPage
    },
    {
      path: '/ProductList/:id',
      name: 'ProductList',
      component: ProductList,
      props: true
    },
    {
      path: '/login',
      component : ()=> import ('../views/Login.vue')
    },
    {
      path: '/ProductsList',
      name: 'ProductsList',
      component: ProductsList,
      props:true
    },
    {
      path: '/signup',
      name: signup,
      component : signup

    }
  ]
})

// router.beforeEach((to, from, next) => {
//   // Show the loading indicator when navigating
//   Loading.show()

//   // Proceed with the navigation
//   next()
// })

// router.afterEach(() => {
//   // Hide the loading indicator after navigation is complete
//   Loading.hide()
// })
export default router
