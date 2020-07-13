<template>
  <div>
    <v-row>
      <v-col md="3" xm="3" sm="3">
        <v-card class="mx-auto" max-width="344">
          <p class="success">Total NewRecovered    :       {{globaldata.NewRecovered}}
           <v-divider></v-divider>
            <p class="error">Total Deaths  :     {{globaldata.NewDeaths}}
            <v-divider class="error"></v-divider>
            </p>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="12" xm="12" sm="12"></v-col>

      <v-col md="12" xm="12" sm="12">
        <v-data-table
          :headers="headers"
          :items="countryData"
          :items-per-page="15"
          class="elevation-1"
          id="table"
        >
          <v-spacer></v-spacer>
          <template v-slot:items="countryData">
            <td class="text-xs-right">{{countryData.Slug}}</td>
            <td class="text-xs-right">2</td>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters(["globalStatus"]),
  methods: mapActions(["fetchGlobalData"]),
  created() {
    this.fetchGlobalData().then(() => {
      this.globaldata = this.globalStatus.Global;
      this.countryData = this.globalStatus.Countries;
    });
  },
  data() {
    return {
      globaldata: {},
      countryData: [],
      headers: [
        { text: "Country", value: "Country" },
        { text: "NewDeaths", value: "NewDeaths" },
        { text: "TotalDeaths", value: "TotalDeaths" },
        { text: "NewRecovered", value: "NewRecovered" },
        { text: "TotalRecovered", value: "TotalRecovered" }
      ]
    };
  }
};
</script>

<style scoped>
#table {
  padding-top: 1%;
}
</style>