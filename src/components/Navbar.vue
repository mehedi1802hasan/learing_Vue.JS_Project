<template>
   <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/offer">Offer</router-link>
   </nav>
</template>

<script >
// import router from '../router';
    export default {
     name:"Navbar"
   
    }
</script >

<style  lang="scss" scoped>
nav a{
    margin:0 10px;
    color:red
}
</style>