<template style="justify-content: center">
      <v-col md="12">
        <v-layout row wrap>
          <v-flex xs12 sm6 v-for="person in team" :key="person.name">
            <v-card class="text-center ma-3">
              <v-responsive class="pt-4">
                <v-img src="https://picsum.photos/id/11/500/300"></v-img>
              </v-responsive>
              <v-card-text>
                <div class="subheading">{{ person.name }}</div>
                <div class="grey--text">{{ person.role }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="grey">
                  <v-icon small left>message</v-icon>
                  <span class="">Message</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-col>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'The Net Ninja', role: 'Web developer' },
        { name: 'Ryu', role: 'Graphic designer' },
        { name: 'Chun Li', role: 'Web developer' },
        { name: 'Gouken', role: 'Social media maverick' }
      ]
    }
  },
  name: "pendingAppointment",

}
</script>

<style scoped>

</style>
