// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import vuetify from "./plugins/vuetify";
import store from './store'
import Toasted from 'vue-toasted';


import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAkoRCtp7YAMHrKiPWaZld4AmsPsBSHvEM",
  authDomain: "vuelogin-5341d.firebaseapp.com",
  databaseURL: "https://vuelogin-5341d.firebaseio.com",
  projectId: "vuelogin-5341d",
  storageBucket: "vuelogin-5341d.appspot.com",
  messagingSenderId: "841679278816",
  appId: "1:841679278816:web:c9b4107fcfe301414cf685",
  measurementId: "G-5BW0NK3EKW"
};
firebase.initializeApp(firebaseConfig);


Vue.config.productionTip = false
Vue.use(Toasted)


firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  vuetify,
  firebase,
  router,
  components: { App },
  template: '<App/>'
})
