<template>
<body class="has-background-grey-lighter">
  <v-container v-if="loading">
    <div class="text-xs-center">
        <v-progress-circular
          indeterminate
          :size="150"
          :width="8"
      >
        </v-progress-circular>
      </div>
  </v-container>

  <v-container v-else>
    <v-layout wrap>
      <v-flex xs12 mr-1 ml-1>
        <div class="box has-shadow" >
           <figure class="image">
          <v-img 
            :src="singleMovie.Poster" 
            max-width="350"
            max
            
            >
          </v-img>
          </figure>
          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0">{{singleMovie.Title}}-{{singleMovie.Year}}</h2>
              <br>
              <p> <strong>Description: </strong> {{singleMovie.Plot}}</p>
              <div><strong>Genre: </strong> {{singleMovie.Genre}}.</div>
              <div> <strong>Actors: </strong>{{singleMovie.Actors}}.</div>
               <div><strong>Rating : </strong>{{singleMovie.imdbRating}}.</div>
               <div><strong>Runtime : </strong> {{singleMovie.Runtime}}.</div>
               <div><strong>Genre: </strong> {{singleMovie.Country}}.</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn round color="black" dark @click ="back">
              back</v-btn>
          </v-card-actions>
        </div>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <div class="text-xs-center">
        <v-dialog
          v-model="dialog"
          width="500">
        </v-dialog>
      </div>
      </v-flex>
    </v-layout>
  </v-container>
  </body>
</template>

<script>
import movieApi from '@/services/MovieApi'
export default {
  props: ['id'],

  data () {
    return {
      singleMovie: '',
      dialog: false,
      loading: true
    }
  },

  mounted () {
    movieApi.fetchSingleMovie(this.id)
      .then(response => {
        this.singleMovie = response
        this.loading = false
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    back () {
      this.$router.push('/')
    }
  }
}

</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
