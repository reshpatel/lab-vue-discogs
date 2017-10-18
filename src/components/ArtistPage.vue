<template>
  <div>
    <article class="media" v-if="artist">
      <figure class="media-left">
        <p class="image is-64x64">
          <img :src="artist.images[0].resource_url">

        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{artist.name}}</strong>
            <br>

            {{artist.profile}}
            <br>
          </p>
        </div>
      </div>
    </article>

  </div>
</template>

<script>

import { getArtist } from '@/api'

export default {
  data() {
    return {
      artist: null,
    };
  },
  created() {
    getArtist(this.$route.params.id).then(artist => {
      if (artist) {
        this.artist = artist;
      } else {
        this.$router.push('/');
      }
    });
  },
}
</script>
