<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card login-card">
          <div class="card-header login-card-header">Login</div>
          <div class="card-body">
            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="email" class="form-label login-label">Email address</label>
                <input type="email" class="form-control login-input" id="email" v-model="email" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label login-label">Password</label>
                <input type="password" class="form-control login-input" id="password" v-model="password" required>
              </div>
              <button type="submit" class="btn btn-primary login-button">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');

const router = useRouter();

const handleLogin = () => {
  const credentials = {
    email: email.value,
    password: password.value,
  };

  fetch("/api/v1/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
  .then(response => {
    if (!response.ok) {
      return response.json().then(data => {
        throw new Error(data.error || 'Login failed');
      });
    }
    return response.json();
  })
  .then(data => {
    console.log('Login successful:', data);
    localStorage.setItem('jwt_token', data.access_token);
    alert('Login successful!');

    router.push({ name: 'movies' });
  })
  .catch(error => {
    console.error('Login error:', error);
    alert('Login failed: ' + error.message);
  });
};
</script>

<style scoped>
.login-card {
  background-color: #1a1a1a;
  color: #ffffff;
  border: 1px solid #4a0e4e;
  border-radius: 8px;
}

.login-card-header {
  background-color: #4a0e4e;
  color: #ffffff;
  font-weight: bold;
  border-bottom: 1px solid #1a1a1a;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.login-label {
  color: #cccccc;
}

.login-input {
  background-color: #333333;
  color: #ffffff;
  border: 1px solid #666666;
}

.login-input:focus {
  border-color: #8a2be2;
  box-shadow: 0 0 0 0.25rem rgba(138, 43, 226, 0.25);
  background-color: #444444;
}

.login-button {
  background-color: #8a2be2;
  border-color: #8a2be2;
  color: #ffffff;
  font-weight: bold;
}

.login-button:hover {
  background-color: #6a1a9e;
  border-color: #6a1a9e;
}

.card {
    background-color: transparent;
}

.card-header {
     background-color: transparent;
}
</style>
