<template>
      <nav>
        <v-toolbar id="toolbar" color="teal accent-3">
          <v-toolbar-title>Health++</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="black" class="hidden-md-and-up" @click="toggleMenu = !toggleMenu">
            <v-icon color="white">mdi-menu</v-icon>
          </v-btn>
          <v-menu v-model="showMenu" :absolute="toggleMenu" :attach="'#toolbar'" :content-class="'px-2 elevation-0'" :nudge-top="$vuetify.breakpoint.smAndDown?-52:-12" min-width="100%">
            <div class="d-flex flex-column flex-md-row justify-end">
              <v-btn color="error" class="ma-1" rounded>Sign In</v-btn>
              <v-btn color="success" class="ma-1" rounded>Log In</v-btn>
            </div>
          </v-menu>
        </v-toolbar>
      </nav>
</template>

<script>
export default {
  name: "AppHeader",

  data() {
    return {
      toggleMenu: false,
    }
  },
  computed: {
    showMenu() {
      return this.toggleMenu || this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>
<style>
</style>