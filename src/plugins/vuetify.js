import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/main.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
}
)
