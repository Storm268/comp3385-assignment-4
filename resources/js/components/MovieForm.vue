<template>
  <div>
    <h2>Add New Movie</h2>
    <form @submit.prevent="saveMovie" id="movieForm">
      <div class="form-group mb-3">
        <label for="title" class="form-label">Movie Title</label>
        <input type="text" id="title" name="title" class="form-control" />
      </div>

      <div class="form-group mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea id="description" name="description" class="form-control"></textarea>
      </div>

      <div class="form-group mb-3">
        <label for="poster" class="form-label">Poster</label>
        <input type="file" id="poster" name="poster" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary">Save Movie</button>
    </form>
  </div>
</template>

import { ref } from 'vue';

const saveMovie = () => {
  const movieForm = document.getElementById('movieForm');
  const formData = new FormData(movieForm);

  fetch("/api/v1/movies", {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
    alert('Movie saved successfully!');
    movieForm.reset();
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Failed to save movie.');
    if (error.response && error.response.json) {
        error.response.json().then(data => {
            console.error('Validation Errors:', data.errors);
        });
    }
  });
};


<style scoped>
.form-group {
  margin-bottom: 1rem;
}
</style>