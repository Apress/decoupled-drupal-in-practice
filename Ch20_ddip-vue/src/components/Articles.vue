<!-- src/components/Articles.vue -->
<template>
  <section v-if="errored">
    <p>Sorry, this information is not available at the moment.</p>
  </section>

  <section v-else>
    <div v-if="loading">Loading ...</div>

    <div v-else class="articles">
      <ul>
      <li v-for="article in articles" v-bind:key="article.id">
        {{ article.attributes.title }}
        <ul>
          <li>{{ article.attributes.created }}</li>
          <li>{{ article.attributes.body.value }}</li>
        </ul>
      </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Articles',
  data () {
    return {
      articles: [],
      loading: true,
      errored: false
    };
  },
  mounted () {
    this.getArticles();
  },
  methods: {
    getArticles () {
      axios.get('http://jsonapi-test.dd:8083/jsonapi/node/article')
           .then(res => this.articles = res.data.data)
           .catch(err => {
             this.errored = true;
             throw new Error(err);
           })
           .finally(() => this.loading = false);
    }
  }
}
</script>
