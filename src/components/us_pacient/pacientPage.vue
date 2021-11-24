<template>
  <v-card>
    <h1 class="text-center" style="font-size: 80px">
      Welcome #########
    </h1>
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="8">
          <h1 style="font-size: 60px">
            <v-icon style="font-size: 60px" color="black">event</v-icon>Your close Appointments
          </h1>
      </v-col>
      <v-col cols="6" md="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" class="mx-auto">
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{on, attrs}">
                  <h1 style="font-size: 60px" v-bind="attrs" v-on="on">
                    <v-icon style="font-size: 60px; font-weight: bolder" color="black" >mdi-plus</v-icon>New Appointment
                  </h1>
                </template>
                <v-card>
                  <v-card-title>{{formTitle}}</v-card-title>
                  <v-card-text>
                    <appointments/>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-card>
          </v-hover>

      </v-col>
    </v-row>

    <v-row class="mb-6" no-gutters>
      <v-col sm="4" md="3">
      </v-col>
      <v-col sm="5" offset-sm="2" md="6" offset-md="0">
          <pending-appointment/>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class="text-center">
        <h1 style="font-size: 60px">
          <v-icon style="font-size: 60px" color="black">mail</v-icon>Mail
        </h1>
      </v-col>
      <v-col cols="6" md="4">
          <h1 style="font-size: 60px">
            Filter
          </h1>
      </v-col>
    </v-row>


    <v-card class="d-flex justify-space-between mb-6" :color="$vuetify.theme.dark ? 'grey darken-3' : 'white'" flat>
      <div></div>
<!--      Patron de centrado definitivo-->
      <v-card class="pa-2 col-8" outlined tile>
        <messages/>
      </v-card>
      <div></div>
    </v-card>
  </v-card>
</template>

<script>

import pendingAppointment from "./pendingAppointment";
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Appointments from "./appointments";
import Messages from "./messages";

export default {
  name: "pacientPage",
  components: {Messages, Appointments, pendingAppointment}
}
</script>

<style scoped>

</style>
