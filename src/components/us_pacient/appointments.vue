<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="12">
        <span style="color:#ff0000">*</span>
        <v-text-field v-model="specialty" label="Specialty" placeholder="Specialty"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="12">
        <span style="color:#ff0000">*</span>
        <v-text-field v-model="description" label="Description" type="Description" placeholder="Description"/>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="12">
        <v-menu v-model="menu1" :close-on-content-click="false" max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field :value="computedDateFormattedMomentjs" clearable label="Formatted with Moment.js" readonly v-bind="attrs" v-on="on" @click:clear="date = null"></v-text-field>
          </template>
          <v-date-picker v-model="date" @change="menu1 = false"></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="12">
        <span style="color:#ff0000">*</span>
        <v-select v-model="pickAnHour" :items="items" label="Pick Hour" outlined></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="12">
        <span style="color:#ff0000">*</span>
        <v-text-field v-model="doctor" label="Doctor (Optional)" type="Doctor (Optional)" placeholder="Doctor (Optional)"></v-text-field>
      </v-col>
      <v-btn color="primary">
        Book
      </v-btn>

      <v-btn type="Cancel" outlined class="mx-2">
        Cancel
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from '@vue/composition-api'
import moment from 'moment'
import { format, parseISO } from 'date-fns'

export default {
  data: () => ({
    date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
    menu1: false,
    menu2: false,

    items: ['9:30', '10:00', '10:30', '11:00', '11:30','12:00', '12:30', '13:00', '13:30', '14:00'],
  }),
  computed: {
    computedDateFormattedMomentjs () {
      return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
    },
  },
  setup() {
    const specialty = ref('')
    const description = ref('')
    const doctor = ref('')
    const pickaDate = ref('')
    const pickAnHour = ref('')
    const checkbox = ref(false)

    return {
      specialty,
      description,
      doctor,
      pickaDate,
      pickAnHour,
      checkbox,
    }
  },
}
</script>

<style>
.center {
  margin: 0 auto;
}
</style>
