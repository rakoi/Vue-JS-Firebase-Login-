<template>
  <div>
    <h3>Latest Covid 19 News</h3>
    <v-row>
      <v-col
        md="3"
        xm="6"
        sm="12"
        class="mx-auto"
        v-for="article in articles"
        v-bind:key="article.index"

      >
        <a :href="article.url">
          <v-card max-height="500" height="500">
            <v-card-title>
              <span class="title font-weight-light">
                <h5>{{article.title.substring(0,55)}}</h5>
              </span>
            </v-card-title>
            <v-divider></v-divider>
            <v-spacer></v-spacer>
            <v-img :src="article.urlToImage"></v-img>
            <v-card-text>{{article.description.substring(0,100)}}...</v-card-text>
            <v-card-actions>
            <v-btn
        color="orange"
        text
        block
        >
        Read More
      </v-btn>
            </v-card-actions>
          </v-card>
        </a>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters(["articles"]),
  methods: mapActions(["fetArticles"]),
  created() {
    this.fetArticles().then(() => {
      console.log(this.articles);
    });
  },
  data() {
    return {};
  }
};
</script>