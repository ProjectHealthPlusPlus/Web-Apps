
tall
<template>
  <v-row>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h1 class="text-center">Welcome Doctor ######</h1>
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

            <v-card-subtitle v-text="card.subtitle"></v-card-subtitle>
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
              <h4 >{{message.subtitle}}</h4><div class="text-center">{{message.patientName}}</div>
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

export default {
  name: "doctors",

  data: () => ({
    cards: [
      {title: 'Positron emission tomography (PET)',subtitle: 'Pacient: Damian Thom', src: 'https://viewmedica.com/images/thumbslarge/petscan_1280.jpg', flex: 3, },
      {title: 'Cerebral angiography', subtitle: 'Pacient: Hans Retes', src: 'https://i.ytimg.com/vi/JJyf2lvB-Ps/hqdefault.jpg', flex: 3},
      {title: 'Electroencephalogram (EEG)' ,  subtitle: 'Pacient: Diego Hernandez', src: 'https://media.springernature.com/original/springer-static/image/chp%3A10.1007%2F978-3-319-47653-7_1/MediaObjects/419678_1_En_1_Fig1_HTML.gif', flex: 3},
      {title: 'Electromyography (EMG)', subtitle: 'Pacient: lokzo', src: 'https://www.hopkinsmedicine.org/-/media/images/health/2_-treatment/neurology/emg-hero.ashx?h=500&iar=0&mh=500&mw=1300&w=1297&hash=C2854D9E0F6FBFA8EAAC454E99C18A7C', flex: 3},
      {title: 'Lumbar puncture', subtitle: 'Pacient: lokzo', src: 'data:image/jpeg;base64,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', flex: 3},
      {title: 'Computed tomography (CT)', subtitle: 'Pacient: lokzo', src: 'https://www.hopkinsmedicine.org/-/media/images/health/2_-treatment/neurology/ct-scan-of-brain-hero.ashx?h=500&iar=0&mh=500&mw=1300&w=1297&hash=51CB46836CAC7B0CF642B9FBD2F7A169', flex: 3},
      {title: 'Magnetic resonance imaging (MRI)', subtitle: 'Paciente: lokzo', src: 'https://cureibm.org/wp-content/uploads/2017/08/cure-ibm-mri-examination.jpg', flex: 3},
      {title: 'Evoked potentials', subtitle: 'Pacient: lokzo',src: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/VEP-normal.gif', flex: 3}
    ],

    messages: [],
    messageParts: [
      // {text: 'Id',          value: 'id'},
      // {text: 'Title',       value: 'title'},
      // {text: 'DoctorId',    value: 'doctorId'},
      // {text: 'PatientId',   value: 'patientId'},
      // {text: 'PatientName', value: 'patientName'},
      // {text: 'Description', value: 'description'},
      {title: 'Title', patientName: 'Patient', description: 'Description: Take some pills at 09:00 am'},
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
        subtitle: message.subtitle,
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
