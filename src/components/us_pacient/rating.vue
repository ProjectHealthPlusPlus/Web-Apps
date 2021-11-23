<template>
  <v-card
      class="elevation-16 mx-auto"
      width="300"
  >
    <v-card-title class="text-h5">
      Rate The Attention
    </v-card-title>
    <v-card-text>
      How was the technical service that you have recived?
      <div class="text-center mt-1">
        <v-rating
            v-model="rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
            hover
            large
        ></v-rating>
      </div>
    </v-card-text>
    <v-card-text>
      How was the doctor attention?
      <div class="text-center mt-1">
        <v-rating
            v-model="rating1"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
            hover
            large
        ></v-rating>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="justify-space-between">
      <v-btn text>
        No Thanks
      </v-btn>
      <v-btn
          color="primary"
          text
      >
        Rate Now
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "rating",
  data: () => ({
    rating: 4.5,
    rating1: 4.5,
  }),
}
</script>

<style scoped>

</style>
