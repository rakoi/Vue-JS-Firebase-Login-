<template>
  <div>
    <v-form>
      <h1>Sign up</h1>
      <v-row>
        <v-col md="2" xm="1" sm="2" class="mx-auto"></v-col>
        <v-col md="6" xm="6" sm="12" class="mx-auto">
          <v-text-field label="Email" required v-model="email" outlined></v-text-field>

          <v-text-field label="Password" type="password" required v-model="password" outlined></v-text-field>
          <v-text-field
            label="Confirm Password"
            type="password"
            required
            v-model="confirmpassword"
            outlined
          ></v-text-field>
          <p class="error">{{errors}}</p>
          <v-btn class="primary" @click="submit" block>submit</v-btn>
        </v-col>

        <v-col></v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmpassword: "",
      loadingstatus: true,
      errors: ""
    };
  },
  methods: {
    ...mapActions(["createUser"]),
    submit: function() {
      if (!this.email || !this.password || !this.confirmpassword) {
        this.errors = "Fill in all details";
      } else {
        if (this.confirmpassword != this.password) {
          this.errors = "Password do not match";
        } else {
          this.errors = "";
          let credentials = {};
          credentials.email = this.email;
          credentials.password = this.password;
          this.createUser(credentials);
          this.$router.replace({ name: "login" });
        }
      }
    }
  }
};
</script>