<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>ddip-vue</h1>
    <Articles />
  </div>
</template>

<script>
import Articles from './components/Articles.vue'

export default {
  name: 'app',
  components: {
    Articles
  }
}
</script>
