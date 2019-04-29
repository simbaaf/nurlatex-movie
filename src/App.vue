<template>
  <v-app>
    <v-toolbar color="grey darken-4" dark app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link
        to='/'
        tag='span'
        style='cursor: pointer'>
      <v-btn color="white"
       round
       depressed
       flat
       > <v-icon left>home</v-icon> Nurlatex Movie</v-btn> 
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
       <v-icon left>search</v-icon>
      <v-flex xs12 sm6 md3>
        <v-text-field
          flat
          placeholder="Search for your Movie ..."
          @keyup.enter="searchMovie"
          v-model='searchString'
          >
        </v-text-field>
        </v-flex>
      <v-btn
        flat
        :disabled="!dataAvailable"
        @click="searchMovie"
        round
      >
       <span class="mr-2">Search</span>
      </v-btn>
    </v-toolbar>
    <v-content>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      searchString: ''
    }
  },
  methods: {
    searchMovie () {
      this.$router.push('/search/' + this.searchString)
      this.searchString = ''
    }
  },
  computed: {
    dataAvailable () {
      return this.searchString !== null && this.searchString !== ''
    }
  }
}
</script>
