<template>
    <div id="app">
    <header>
      <h1>NASA -- Mars Rover Photos</h1>
    </header>
    <main>
      <h2>Click the button to get a random photo</h2>
      <button id="btn" v-on:click="getPhotos">Get Photos</button>
      <div v-if="loading">Loading...</div>

      <div class="wrapper"></div>
    </main>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'app',
    data() {
      return{
        photos: [],
        loading: false
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss">

</style>