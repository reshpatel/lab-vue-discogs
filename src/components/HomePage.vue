<template>
  <div class="container">

  <h1 class="title">HomePage</h1>
  <search-bar></search-bar>
  </div>
</template>

//going to import searchbar
<script>
import SearchBar from '@/components/SearchBar'

export default {
  data () {
    return {
      greeting: 'Hello'
    }
  },
  components: {
    SearchBar
  }
}
</script>
