<template>
  <div>
    <v-row>
      <v-col md="6" xm="6" sm="12">
        <v-autocomplete
         class="mx-4" 
         :items="countryNames"
          v-model="country" 
          hide-no-data 
          label="search">
          <v-icon slot="append">mdi-magnify</v-icon>
        </v-autocomplete>

        <v-card class="mx-auto" outlined>
          <v-simple-table>
            <thead>
              <th class="text-center">
                <b>{{countryStats.Country}}</b>
              </th>
            </thead>
            <tbody>
              <tr></tr>
              <tr>
                <td class="text-left">Confirmed</td>
                <td class="text-left">{{countryStats.Confirmed}}</td>
              </tr>
              <tr>
                <td class="text-left">Deaths</td>
                <td class="text-left">{{countryStats.Deaths}}</td>
              </tr>
              <tr>
                <td class="text-left">Recovered</td>
                <td class="text-left">{{countryStats.Recovered}}</td>
              </tr>
              <tr></tr>
            </tbody>
          </v-simple-table>
          <v-btn class="error" block>Active {{countryStats.Active}}</v-btn>
        </v-card>
      </v-col>
      <v-col :md="6" :sm="12">
        Infection Rate
        <v-sparkline
          :value="graphData"
          color="#8B0000"
          :fill="true"
          :smooth="radius || false"
          :padding="padding"
          :line-width="width"
          auto-draw
        ></v-sparkline>
      </v-col>
    </v-row>

    <v-row>
      <v-col :md="6" :sm="12">Infection Rate</v-col>
    </v-row>
  </div>
</template>

<style scoped>
</style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters([
    "countryStats",
    "graphLabels",
    "graphData",
    "countryNames"
  ]),
  watch:{
    country(val){
      this.fetchCountryStat(val)
      this.fetchgraphData(val);
    }
  },
  methods: {
    ...mapActions(["fetchCountryStat", "fetchgraphData", "fetchGlobalData"])
  },
  created() {
    this.fetchCountryStat(this.country);
    this.fetchgraphData(this.country);
    this.fetchGlobalData().then(()=>{
      if(!this.countryNames){
        this.fetchGlobalData();
      }
    });
  },
  data() {
    return {
      country: "KENYA",
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0],
      labels: ["Months", "RAM", "COWS", "DOGS", "HAM"],
      width: 2,
      radius: 10,
      padding: 8
    };
  }
};
</script>