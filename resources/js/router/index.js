import { createRouter, createWebHistory } from 'vue-router';

import AboutView from "../Pages/AboutView.vue";
import HomeView from "../Pages/HomeView.vue";
import MoviesView from '../Pages/MoviesView.vue';
import AddMovieView from '../Pages/AddMovieView.vue';

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
      path: '/movies',
      name: 'movies',
      component: MoviesView,
    },
    {
      path: '/movies/create',
      name: 'add-movie',
      component: AddMovieView,
    },
  ]
});

export default router;
