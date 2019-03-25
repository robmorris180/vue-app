<template>
  <div class="card">
    <img :src="post.image_url" alt>
    <div class="card__content">
      <h2>{{post.title}}</h2>
      <p>{{post.abstract}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    post: Object
  }
};
</script>
