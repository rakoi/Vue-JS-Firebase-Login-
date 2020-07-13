<template>
  <div>
    <v-form>
      <v-row>
        <v-col md="2" xm="1" sm="2" class="mx-auto"></v-col>
        <v-col md="6" xm="6" sm="12" class="mx-auto">
          <v-text-field label="Email" required v-model="email" outlined></v-text-field>

          <v-text-field
            label="Password"
            type="password"
            required
            v-model="password"
            outlined
            visiblility="false"
          ></v-text-field>
          <p class="error">{{errors}}</p>
          <v-btn class="primary" @click="submit" block>Login</v-btn>
          <br />
          <a href="/Register">Register</a>
        </v-col>

        <v-col></v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters(["loggedInUser"]),
  data() {
    return {
      password: "",
      email: "",
      loadingstatus: true,
      errors: ""
    };
  },
  methods: {
    ...mapActions(["loginUser"]),
    submit: function() {
      if (!this.email || !this.password) {
        this.errors = "Enter Email and password";
      } else {
        this.errors = "";
         let loginCredentials={};
         loginCredentials.email = this.email;
         loginCredentials.password=this.password
         this.loginUser(loginCredentials);
      }
    }
  },
  created(){
    
  }
};
</script>