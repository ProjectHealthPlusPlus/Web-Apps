<template>

    <v-expansion-panels focusable>
      <v-expansion-panel v-for="person in doctor" :key="person.name">
        <v-expansion-panel-header style="height: 100px">
          <h3 >{{person.name}}</h3><div class="text-center">{{person.specialty}}</div>
        </v-expansion-panel-header>
        <v-expansion-panel-content><h4>{{person.description}}</h4></v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

</template>

<script>
export default {
  name: "messages",
  data() {
    return {
      doctor: [
        { name: 'The Net Ninja',specialty: 'cardiology', description: 'Web developer' },
        { name: 'Ryu', specialty: 'cardiology',description: 'Graphic designer' },
        { name: 'Chun Li', specialty: 'cardiology', description: 'Web developer' },
        { name: 'Gouken', specialty: 'cardiology', description: 'Social media maverick' }
      ]
    }
  },
}
</script>

<style scoped>

</style>
