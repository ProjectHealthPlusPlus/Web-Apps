<template>
  <v-container>
    <v-card class="mx-auto my-18" max-width="150%" outlined>

      <v-card-title class="text-h2 my-5 title justify-center"> WELCOME MEDICAL CENTER ##</v-card-title>

      <v-card-item>
        <v-img
            height= "400"
            contain="true"
            position="center"
            src="https://images.vexels.com/media/users/3/140487/isolated/preview/8e77dd6a09ce0f0a31bd7d077321dd7b-grafico-de-lineas-de-colores-en-crecimiento.png">
        </v-img>
        <v-card-title class="center-center">
          Incremento de 100 clientes esta semana!
        </v-card-title>
      </v-card-item>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>

      </v-card-actions>

    </v-card>



    <!--catalogo de medicos-->

    <v-container class="catalogoMedicos">
      
      <v-card max-width="100%" size="100px">
        <v-card-title class="text-h3 my-5 title justify-center">
          Our best doctors
        </v-card-title>

        <v-carousel progress-color="green">
          <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-card>
    </v-container>


    <!--calendario citas-->

    <v-container>
      <div>
        <v-card-title class="text-h3 my-5 title justify-center">
          Medical calendar
        </v-card-title>

          <v-col cols="12" md="4" ><h2>Event administrator</h2></v-col>
          <v-col cols="12" md="8">
            <v-spacer> </v-spacer>
            <v-text-field v-model="title" append-icon="mdi-magnify" label="Search event by name"
            single-line ></v-text-field>
          </v-col>

        <v-row>
          <v-col>
            <v-sheet height="400">
              <v-calendar
                ref="calendar"
                :now="today"
                :value="today"
                :events="events"
                color="primary"
                type="week"
              ></v-calendar>
            </v-sheet>
          </v-col>
        </v-row>

        
      </div>
    </v-container>

  </v-container>
</template>

<!--SCRIPTS-->



<script>
import axios from 'axios'
export default {
  name: "medicalCenter",
  data() {
    return {
      today: '2021-10-20',
      events: [],
      items: [
        {
          src: 'https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2014/07/07/140707150133_doctor_tests_624x351_thinkstock.jpg',
        },
        {
          src: 'https://images.ecestaticos.com/w_Dh6K-JVt3o2CB0uPNdDaFwoG8=/0x70:1716x1040/972x547/filters:fill(white):format(jpg)/https://f.elconfidencial.com/original/8db/8b6/aa5/8db8b6aa54b585253e15f79a68447aeb.jpg',
        },
        {
          src: 'https://media.revistagq.com/photos/5ca5fd6e3492a940f5bf1bf0/master/pass/doctor_mike_gq_5080.jpg',
        },
        {
          src: 'https://cnnespanol.cnn.com/wp-content/uploads/2014/10/141013123220-female-doctor-google-story-top.jpg?quality=100&strip=info&w=460&h=260&crop=1',
        },
      ],
    };
  },
  async created(){
    try{
      const res = await axios.get(`http://localhost:3000/events`)

      this.events = res.data;
    } catch (e){
      console.error(e);
    }
  }
}
</script>


<style scoped>

</style>