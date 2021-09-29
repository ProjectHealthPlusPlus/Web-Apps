<template>
  <v-app>
    <AppHeader/>
    <v-main>
      <HelloWorld/>
      <HelloWorld/>
      <app-register/>
        <!--      <app-login/>-->
<!--      <app-account-settings/>-->
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<!--  <template>-->
<!--    <app-login></app-login>-->
<!--  </template>-->

<script>
import HelloWorld from './components/HelloWorld';
import AppHeader from "./layout/AppHeader";
import AppFooter from './layout/AppFooter';
// import AppAccountSettings from "./components/common/account-settings/AccountSettings";
// import AppLogin from "./views/pages/Login";
import AppRegister from "./views/pages/Register";

export default {
  name: 'App',

  components: {
    // AppAccountSettings,
    AppRegister,
    // AppLogin,
    HelloWorld,
    AppHeader,
    AppFooter,
  },
};
</script>
