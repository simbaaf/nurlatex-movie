<template>
<body class="has-background-grey-lighter" >
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="black">
      </v-progress-circular>
    </div>
  </v-container>

  <v-container v-else-if="noData">
    <div class="text-xs-center">
    <h2> ooops maybe this api don't contain {{this.name}} </h2>
    </div>
  </v-container>

  <v-container v-else grid-list-xs>
    <v-layout wrap>
      <v-flex xs4
        v-for="(item, index) in movieResponse"
        :key="index"
        mb-2>
        <div class="box">
          <figure class="image is-2by3">
          <img 
            :src="item.Poster" 
          >
          </figure>
          <v-card-title primary-title>
            <div>
              <h1 class="has-text-centered"> {{item.Title}} </h1>
              <br>
              <div><strong>Year:</strong>{{item.Year}}</div>
              <div><strong>Type:</strong>{{item.Type}}</div>
            </div>
          </v-card-title>

          <div class="justify-center">
            <v-btn
              color="black"
              dark
              title="Read more about it"
              round
              @click="singleMovie(item.imdbID)"
              >View more</v-btn>
          </div>
        </div>
      </v-flex>
  </v-layout>
  </v-container>
</body>
</template>

<script>
import movieApi from '@/services/MovieApi'

export default {
  props: ['name'],
  data () {
    return {
      movieResponse: [],
      loading: true,
      noData: false
    }
  },
  methods: {
    singleMovie (id) {
      this.$router.push('/movie/' + id)
    },

    fetchResult (value) {
      movieApi.fetchMovieCollection(value)
        .then(response => {
          if (response.Response === 'True') {
            this.movieResponse = response.Search
            this.loading = false
            this.noData = false
          } else {
            this.noData = true
            this.loading = false
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.fetchResult(this.name)
  },
  watch: {
    name (value) {
      this.fetchResult(value)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
