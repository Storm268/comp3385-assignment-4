<template>
  <div>
    <h1>Movies List</h1>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const movies = ref([]);

const fetchMovies = () => {
  fetch("/api/v1/movies", {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    movies.value = data.movies;
    console.log('Movies fetched:', movies.value);
  })
  .catch(error => {
    console.error('Error fetching movies:', error);
  });
};

onMounted(() => {
  fetchMovies();
});
</script>

<style scoped>
</style>
