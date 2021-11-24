<template>
  <v-app>
    <v-app-bar app color="primary white--text">
      <v-app-bar-title>
        <span class="display-1">WebCode</span>
        <v-divider insert vertical class="mx-1"></v-divider>
        <span>Health++</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-text-field v-model="title" append-icon="mdi-magnify"
                    label="Search something"
                    single-line hide-details>
      </v-text-field>
      <v-btn plain to="/home" color="white">Home</v-btn>
      <v-btn plain to="/diagnostics" color="white">Diagnostics</v-btn>
      <v-btn plain to="/doctors" color="white">Doctors</v-btn>
      <v-btn plain to="/patients" color="white">Patients</v-btn>
      <v-btn plain to="/MedicalCenter" color="white">Medical Center</v-btn>
      <v-btn plain to="/about" color="white">About</v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css'
//import diagnostics from "./diagnostics/pages/diagnostics";

export default {
  name: "App",
  title: '',

  components: {
    //diagnostics
  },

  data(){
    return {
      appTitle: 'Awesome App',
      sidebar: false,
      menuItems: [
        { title: 'Home', path: '/home', icon: 'home' },
        { title: 'Sign Up', path: '/signup', icon: 'face' },
        { title: 'Sign In', path: '/signin', icon: 'lock_open' }
      ]
    }
  },
};
</script>

<style>

</style>
<script>
import pacientPage from "./components/us_pacient/pacientPage";

export default {
  components: {pacientPage},
}
</script>
