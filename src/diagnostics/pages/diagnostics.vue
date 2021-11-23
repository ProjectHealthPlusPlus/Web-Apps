<template>
  <v-row align="center" class="px-3 mx-auto">
    <v-col cols="12" md="4"><h1>Diagnostics</h1></v-col>
    <v-col cols="12" md="8">
      <v-spacer></v-spacer>
      <v-text-field v-model="patientId" append-icon="mdi-magnify"
                    label="Search by Patient Id"
                    single-line hide-details></v-text-field>
    </v-col>
    <v-col cols="12" sm="12">
      <v-card class="mx-auto" patientId>
        <v-data-table :headers="headers" :items="diagnostics" :search="patientId" sort-by="id">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Diagnostics List</v-toolbar-title>
              <v-divider class="mx-4" insert vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{on, attrs}">
                  <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Item</v-btn>
                </template>
                <v-card>
                  <v-card-title>{{ formTitle }}</v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-text-field v-model="editedItem.patientId" label="Patient Id"/>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-text-field v-model="editedItem.doctorId" label="Doctor Id"/>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-text-field v-model="editedItem.description" label="Diagnostic Description"/>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" lg="12">
                          <v-select :items="diagnosticStatus" v-model="editedItem.status" label="Current Status"></v-select>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="close">Cancel</v-btn>
                    <v-btn color="primary" @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <!-- Delete Confirmation Dialog -->
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title>Delete Item</v-card-title>
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
          <!-- Item Actions Section -->
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
          </template>
          <!-- No Data Scenario -->
          <template v-slot:no-data>
            <v-btn color="primary" @click="retrieveDiagnostics">Reset</v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import DiagnosticsService from '../services/diagnostics.service'
export default {
  name: "diagnostics",
  data: () => ({
    diagnostics: [],
    patientId: '',
    headers: [
      {text: 'Id',          value: 'id',          sortable: true, align: 'end'},
      {text: 'Patient Id',   value: 'patientId',   sortable: true, align: 'start'},
      {text: 'Description', value: 'description', sortable: false},
      {text: 'Status',      value: 'status',      sortable: false},
      {text: 'Doctor Id',    value: 'doctorId',    sortable: true},
      {text: 'Actions',     value: 'actions',     sortable: false}
    ],
    dialog: false,
    dialogDelete: false,
    editedIndex: -1,
    editedItem: {id: 0, patientId: 0, description: '', status: '', doctorId: 0},
    diagnosticStatus: ['Published', 'Pending']
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    }
  },
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
    getDisplayDiagnostic(diagnostic) {
      return {
        id: diagnostic.id,
        patientId: diagnostic.patientId,
        description: diagnostic.description,
        status: diagnostic.published ? 'Published' : 'Pending',
        doctorId: diagnostic.doctorId,
      };
    },
    retrieveDiagnostics() {
      DiagnosticsService.getAll()
          .then((response) => {
            this.diagnostics = response.data.map(this.getDisplayDiagnostic);
          })
          .catch(e => {
            console.log(e);
          });
    },
    refreshList() {
      this.retrieveDiagnostics();
    },
    editItem(item) {
      this.editedIndex = this.diagnostics.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.diagnostics.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      // TODO: Delete Item
      this.deleteDiagnostic(this.editedItem.id).then(() => this.refreshList()).catch(e => console.log(e));
    },
    save() {
      // TODO: Create or Updete Item
      let item = this.editedItem;
      let dto = { patientId: item.patientId, doctorId: item.doctorId, description: item.description, publishe: item.status === 'Published'};
      if (this.editedIndex >-1) {
        dto.id = item.id;
        DiagnosticsService.update(item.id, dto).then(() => this.refreshList()).catch(e => console.log(e));
      } else DiagnosticsService.create(dto).then(() => this.refreshList()).catch(e => console.log(e));
      this.close();
    },
    deleteDiagnostic(id) {
      DiagnosticsService.delete(id)
          .then(() => this.refreshList())
          .catch(e => console.log(e));
    },
  },
  mounted() {
    this.retrieveDiagnostics();
  }
}
</script>

<style scoped>
</style>
