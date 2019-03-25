<template>
  <section>
    <div class="results" v-for="post in processedPosts" v-bind:key="post.title">
      <card v-bind:post="post"></card>
    </div>
  </section>
</template>

<script>
import Card from "../components/Card";

export default {
  name: "results",
  props: {
    results: Array
  },
  computed: {
    processedPosts() {
      const posts = this.results;

      // add image_url attribute
      posts.map(post => {
        const imgObj = post.multimedia.find(
          media => media.format === "superJumbo"
        );
        post.image_url = imgObj
          ? imgObj.url
          : "https://via.placeholder.com/400x300";
      });

      return posts;
    }
  },
  components: {
    Card
  }
};
</script>
