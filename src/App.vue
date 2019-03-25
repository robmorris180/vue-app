<template>
  <div id="app">
    <header>
      <h1>News Feed</h1>
    </header>
    <main>
      <results v-bind:results="results"></results>
    </main>
  </div>
</template>

<script>
//import Search from './components/Search';
import Results from "../components/Results";
import axios from "axios";
import { apiUrl } from "../mixins/apiUrl";

export default {
  name: "app",
  data() {
    return {
      results: []
    };
  },
  mounted() {
    this.getPosts("home");
  },
  methods: {
    apiUrl,
    getPosts(section) {
      let url = apiUrl(section);
      axios
        .get(url)
        .then(response => {
          this.results = response.data.results;
        })
        .catch(error => console.log(error));
    }
  },
  components: {
    Results
  }
};
</script>
