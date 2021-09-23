  <template>
  <v-app>
    <AppHeader/>
    <v-main>
      <HelloWorld/>
      <HelloWorld/>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import AppHeader from "./layout/AppHeader";
import AppFooter from './layout/AppFooter';

export default {
  name: 'App',

  components: {
    HelloWorld,
    AppHeader,
    AppFooter
  },

};
</script>
