<!-- todo how to connect and ask to yacine -->
<template>
  <div>
    <div class="field has-addons">
      <div class="control">
        <input class="input" type="text" placeholder="Find a repository" v-model="query">
      </div>
      <div class="control">
        <a class="button is-info" @click='search'>
          Search
        </a>
      </div>
    </div>

  <!-- <thumbnails-list v-for="artist in artists"></thumbnails-list> -->
  <div v-if="artists.length>0">
      <router-link v-for="artist in artists" :to="'/artists/'+ artist.id">
        <img :src="artist.thumb"></router-link>
  </div>
  </div>
</template>

<script>
import ThumbnailsList from '@/components/ThumbnailsList'
import {searchArtists} from '@/api'

export default {
  data () {
    return {
      artists: [],
      query: ''
    }
  },
  components: {
    ThumbnailsList
  },
  methods: {
    search () {
      searchArtists(this.query).then(artists =>{
        this.artists = artists;
      });
    }
  }
}
</script>
