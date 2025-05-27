<template>
  <div class="about-page">
    <h1 class="about-title">## About Page</h1>
    <p class="offer-text">এটা আমাদের Offer</p>
    <h2 class="dynamic-message">{{ message }}</h2>
    <button class="btn-click" @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
       isHello: true,         // ফ্ল্যাগ শুরুতে true

      message: 'Hello World'
    };
  },
  methods: {
    handleClick() {
      console.log('yes click success');
            this.isHello = !this.isHello;

      // this.message = 'New World';
            this.message = this.isHello ? 'Hello World' : 'New World';

    }
  }
};
</script>

<style lang="scss" scoped>
.about-page {
  padding: 20px;
  background-color: #f5f5f5;
}

.about-title {
  color: #333;
  margin-bottom: 10px;
}

.offer-text {
  font-style: italic;
  color: #555;
  margin-bottom: 20px;
}

.dynamic-message {
  color: #007BFF;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.btn-click {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
}
</style>
