<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer   dark :app="isapp" prominent v-model="drawer">
        <v-list>
          <v-list-item v-for="item in navitems" :key="item.title" link>
            <a :href="item.url">{{item.title}}</a>
          </v-list-item>
          <v-list-item v-if="this.loggedInUser.email">
            <a @click="signout">Sign out {{this.loggedInUser.email}}</a>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar color="primary" dark max-height="60px" app>
        <v-app-bar-nav-icon @click="toggle"></v-app-bar-nav-icon>
        <v-toolbar-title>Covid 19 Stats</v-toolbar-title>
      </v-app-bar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<style scoped>
  a{
    color: white;
  }
</style>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: mapGetters(["loggedInUser"]),
  name: "App",
  data() {
    return {
      drawer: true,
      isapp: true,
      navitems: [
        { title: "Dashboard", icon: "Home", url: "/" },
        { title: "Global Statistics", icon: "Home", url: "/global" },
        { title: "News", icon: "News", url: "/News" },
        { title: "Sources", icon: "Home", url: "/sources" },
        { title: "Login", icon: "Home", url: "/login" }
      ]
    };
  },

  methods: {
    ...mapActions(["logout"]),
    signout() {
      this.logout().then(()=>{
       
        window.location.reload();
      });
    },
    toggle() {
      this.drawer = !this.drawer;
      if (this.drawer == true) {
        this.isapp = true;
      }
    }
  },
  mounted() {
    if (this.loggedInUser.email) {
      console.log(this.loggedInUser.email);
      this.navitems.pop();
    }
  },
  watch: {
    loggedInUser: function(val) {
     
      if (this.loggedInUser.email) {
        this.navitems.pop();
      }
    }
  },

  created() {
    if (this.loggedInUser.email) {
      console.log(this.loggedInUser.email);
      this.navitems.pop();
      console.log(this.loggedInUser.email);
      console.log(this.navitems);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  text-decoration: none;
  color: black;
}
</style>
