<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Add New Movie</div>
          <div class="card-body">
            <MovieForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import the MovieForm component
import MovieForm from '../components/MovieForm.vue';

// No specific script logic is needed in AddMovieView itself,
// as the form handling is done within the MovieForm component.
</script>

<style scoped>
/* Add any specific styles for this page layout */
</style>
