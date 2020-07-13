<template>
  <div>
    <h1>Sources</h1>
    <v-row>
        <v-col md="1" xm="1" sm="1">
        </v-col>
        <v-col md="8" xm="6" sm="6">
    <v-simple-table
   
    >
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Source</th>
        </tr>
      </thead>
      <tbody  >
        <tr
          v-for="item in sources"
          :key="item.index"
          >
        <td>{{item.name}}</td>
        <td  > <a :href="item.source"> {{item.source}}</a></td>
        </tr>
        <td></td>
      </tbody>
    </v-simple-table>
        </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sources: [
        { name: "Global Status", source: "https://api.covid19api.com/summary" },
        {
          name: "Country Status",
          source: "https://api.covid19api.com/summary"
        },
        {
          name: "News",
          source:
            "https://newsapi.org/v2/everything?q=corona&apiKey=d5bda3d1dae143d7acb4045d3eab8e62"
        }
      ]
    };
  }
};
</script>