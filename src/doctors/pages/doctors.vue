<template>
  <v-row>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h1 class="text-center">Welcome #########</h1>
    </v-flex>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h2>Some of your upcoming appointments</h2>
    </v-flex>
    <v-container>
      <v-row dense>
        <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
        ><v-card>
          <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
        </v-col>
      </v-row>
    </v-container>


  </v-row>

</template>



<script>
export default {
  name: "doctors",

  data: () => ({
    cards: [
      { title: 'Pre-fab homes',       src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',  flex: 6 },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',   flex: 6 },
      { title: 'Best airlines',       src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',  flex: 6 },
      { title: 'Whitehaven Beach',    src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',  flex: 6 }
    ],
  }),
}
</script>


<style scoped>

</style>
