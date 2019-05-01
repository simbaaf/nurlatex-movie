<template>

  <v-container v-if="loading" grid-list-{xs through xl}>
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="black">
      </v-progress-circular>
    </div>
  </v-container>

  <!-- <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4
        v-for="(item, index) in wholeResponse"
        :key="index"
        mb-2>
        <v-box>
          <v-img
            :src="item.Poster"
            aspect-ratio="2"
            contain
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3>{{item.Title}}</h3>
              <v-divider></v-divider>
              <div><strong>Year:</strong> {{item.Year}}</div>
              <div><strong>Type:</strong> {{item.Type}}</div>
            </div>
          </v-card-title>

          <v-card-actions class="justify-center">
            <v-btn
              dark
              round
              color="black"
              @click="singleMovie(item.imdbID)"
              >View</v-btn>
          </v-card-actions>

        </v-box>
      </v-flex>
  </v-layout>
  </v-container> -->
  <v-container v-else grid-list-{xs through xl}>
    <div class="box"
    v-for="(item, index) in wholeResponse"
      :key="index"
    >
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x32">
        <img :src= item.Poster >
      </figure>
    </div>
    <div class="media-content is-64x64">
      <div class="content"> 
          <v-card-title primary-title>{{item.Title}}</v-card-title>
          <br>

      </div>
    </div>
  </article>
</div>
  </v-container>
</template>

<script>
import movieApi from '@/services/MovieApi'

export default {
  data () {
    return {
      wholeResponse: [],
      loading: true
    }
  },
  mounted () {
    movieApi.fetchMovieCollection('avengers')
      .then(response => {
        this.wholeResponse = response.Search
        this.loading = false
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    singleMovie (id) {
      this.$router.push('/movie/' + id)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
