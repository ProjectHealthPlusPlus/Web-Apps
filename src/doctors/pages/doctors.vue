<template>
  <v-row>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h1 class="text-center">Welcome #########</h1>
    </v-flex>
    <!-- Appointments -->
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
            <v-btn flat color="primary">
              <v-icon small left>assignment</v-icon>
              Details
            </v-btn>
            <v-btn flat color="primary" disabled>
              <v-icon small left>video_camera_back</v-icon>
              Join
            </v-btn>
          </v-card-actions>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-btn plain to="/doctorsCalendar">
      <h2>
        <v-icon>event</v-icon>See full calendar
      </h2>
    </v-btn>

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>

    <!-- Messages -->
    <v-flex xs12 class="text-xs-center" mt-5>
      <h2>Some of your patient's messages</h2>
    </v-flex>

    <v-container>
      <v-row justify="center">
        <v-expansion-panels popout>
          <v-expansion-panel
              v-for="message in messageParts"
              :key="message.title"
          >
            <v-expansion-panel-header>
              <h4 >{{message.title}}</h4><div class="text-center">{{message.patientName}}</div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <h4 >{{message.description}}</h4>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>

    </v-container>
    <v-btn plain to="/doctorsMessages">
      <h2>
        <v-icon>event</v-icon>See all messages
      </h2>
    </v-btn>

  </v-row>

</template>



<script>
import DoctorsMessageService from '../services/doctorsMessages.service'
//import DiagnosticsService from "../../diagnostics/services/diagnostics.service";
export default {
  name: "doctors",

  data: () => ({
    cards: [
      {title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6},
      {title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6},
      {title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6},
      {title: 'White haven Beach', src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', flex: 6}
    ],

    messages: [],
    messageParts: [
      // {text: 'Id',          value: 'id'},
      // {text: 'Title',       value: 'title'},
      // {text: 'DoctorId',    value: 'doctorId'},
      // {text: 'PatientId',   value: 'patientId'},
      // {text: 'PatientName', value: 'patientName'},
      // {text: 'Description', value: 'description'},
      {title: 'Title', patientName: 'Patient', description: 'Description'},
      {title: 'Title', patientName: 'Patient', description: 'Description'},
      {title: 'Title', patientName: 'Patient', description: 'Description'}
    ],
    reveal: false,
  }),

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  methods: {
    close() {
      this.dialog = false;
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    getDisplayMessage(message) {
      return {
        id: message.id,
        title: message.title,
        patientId: message.patientId,
        patientName: message.name,
        description: message.description,
        doctorId: message.doctorId,
      };
    },
    retrieveMessages() {
      DoctorsMessageService.getAll()
          .then((response) => {
            this.messages = response.data.map(this.getDisplayMessage);
          })
          .catch(e => {
            console.log(e);
          });
    },
    refreshList() {
      this.retrieveMessages();
    },

  },
  mounted() {
    this.retrieveMessages();
  }
}
</script>


<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
