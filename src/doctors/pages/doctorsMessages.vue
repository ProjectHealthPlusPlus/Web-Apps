<template>
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
</template>

<script>
//import DoctorsMessageService from '../services/doctorsMessages.service'
export default {
  name: "doctorsMessages",

  data: () => ({
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
