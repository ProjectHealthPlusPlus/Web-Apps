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
      <v-card max-width="150%" >

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

    <!--Creador de eventos-->
    <v-row align="center" class="px-4 mx-auto">
     
      <v-col cols="12" sm="12">
        <v-card class="mx-auto" title>
          <v-data-table :headers="headers" :items="tutorials"  :search="title" sort-by="title">
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Events</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot: activator="{}">
                    <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New event</v-btn>
                  </template>
                  <v-card>
                    <v-card-title>{{ formTitle }}</v-card-title>
                    <v-card-text>
                       <v-container>
                         <v-row>
                           <v-col cols="12" sm="6" md="4" lg="12" >
                             <v-text-field v-model="edited.Item.title" label="Event title"></v-text-field>
                           </v-col>
                           <v-col cols="12" sm="6" md="4" lg="12">
                             <v-select :items="eventStatus" v-model="editedItem.status" label="Current Status"></v-select>
                           </v-col>
                         </v-row>
                       </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click="save">Save</v-btn>
                      <v--btn color="primary" text @click="close">Cancel</v--btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title>Delet Item</v-card-title>
                    <v-card-text>Are you sure you want to delete this item?</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="closeDelete">Cancel</v-btn>
                      <v-btn color="primary" @click="deleteItemConfirm">Delete</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <!--ACTIONS-->
            <template v-slot:item.actions="{item}">
              <v-icon small class ="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
              <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </template>

            <template v-slot:no-data>
              <v-btn color="primary" @click="retrieveEvents">Reset</v-btn>
            </template>
          </v-data-table>
        </v-card>

      </v-col>

    </v-row>


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
      events: []
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