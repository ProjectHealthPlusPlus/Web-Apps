<template>
  <v-app>
    <v-app-bar app color="primary white--text">
      <v-app-bar-title>
        <span class="display-1">WebCode</span>
        <v-divider insert vertical class="mx-1"></v-divider>
        <span>Health++</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn plain to="/home" color="white">Home</v-btn>
      <v-btn plain to="/diagnostics" color="white">Diagnostics</v-btn>
      <v-btn plain to="/about" color="white">About</v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>


<style>

</style>
