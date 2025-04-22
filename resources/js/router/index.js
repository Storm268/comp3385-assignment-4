import { createRouter, createWebHistory } from 'vue-router';

import AboutView from "../Pages/AboutView.vue";
import HomeView from "../Pages/HomeView.vue";
import MoviesView from '../Pages/MoviesView.vue';
import AddMovieView from '../Pages/AddMovieView.vue';
import LoginView from '../Pages/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesView,
      meta: { requiresAuth: true }
    },
    {
      path: '/movies/create',
      name: 'add-movie',
      component: AddMovieView,
      meta: { requiresAuth: true }
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('jwt_token');

    if (token) {
      next();
    } else {
      console.log('Route requires authentication, but no token found. Redirecting to login.');
      next({ name: 'login' });
    }
  } else {
    next();
  }
});

export default router;
