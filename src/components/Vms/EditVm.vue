<template>
  <v-dialog width="400" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">EDIT</v-btn>
    </template>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h3 class="text--primary">Edit Virtual Machine Info</h3>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                prepend-icon="laptop"
                name="name"
                label="name"
                type="text"
                v-model="editedName">
              </v-text-field>
              <v-text-field
                prepend-icon="anchor"
                name="task"
                label="task number"
                type="text"
                v-model="editedTask">
              </v-text-field>
              <v-text-field
                prepend-icon="person"
                name="owner"
                label="who use"
                type="text"
                v-model="editedOwner">
              </v-text-field>
              <v-text-field
                prepend-icon="alarm"
                name="actual"
                label="actualization date"
                type="date"
                v-model="editedDate">
              </v-text-field>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="light-blue darken-4" outlined @click="onCancel">Cancel</v-btn>
              <v-btn dark color="light-blue darken-4" @click="onSave">Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['vm'],
  data () {
    return {
      dialog: false,
      editedName: this.vm.name,
      editedTask: this.vm.task,
      editedOwner: this.vm.owner,
      editedDate: this.vm.date
    }
  },
  methods: {
    onCancel () {
      this.editedName = this.vm.name
      this.editedTask = this.vm.task
      this.editedOwner = this.vm.owner
      this.editedDate = this.vm.date
      this.dialog = false
    },
    onSave () {
      if (this.editedName !== '' && this.editedTask !== '' && this.editedOwner !== '' && this.editedDate !== '') {
        this.$store.dispatch('updateVm', {
          name: this.editedName,
          task: this.editedTask,
          owner: this.editedOwner,
          date: this.editedDate,
          id: this.vm.id
        })
        this.dialog = false
      }
    }
  }
}
</script>
