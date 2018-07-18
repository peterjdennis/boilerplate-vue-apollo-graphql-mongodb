// IMPORTS
import Vue from 'vue'
import VueApollo from 'vue-apollo'
import router from './router/index'
import Vuetify from 'vuetify'
import App from './App'
import apolloClient from './apollo'
import store from './store'

// SETUP PLUGINS
Vue.config.productionTip = false
Vue.use(VueApollo)
Vue.use(Vuetify)

// APOLLO PROVIDER
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  provide: apolloProvider.provide(),
  render: h => h(App)
})
