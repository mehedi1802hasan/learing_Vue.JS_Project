<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link" active-class="active-link">Home</router-link>
    <router-link to="/about" class="nav-link" active-class="active-link">About</router-link>
    <router-link to="/offer" class="nav-link" active-class="active-link">Offer</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #0077cc;
  padding: 15px 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
  border-radius: 8px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffe600;
  }
}

.active-link {
  color: #ffcc00;
  text-decoration: underline;
}
</style>
