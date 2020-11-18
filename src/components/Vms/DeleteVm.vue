<template>
  <v-dialog width="400" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn dark color="light-blue darken-4" v-bind="attrs" v-on="on">DELETE</v-btn>
    </template>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h3 class="text--primary">Delete this Virtual Machine?</h3>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="light-blue darken-4" outlined @click="onCancel">Cancel</v-btn>
              <v-btn dark color="light-blue darken-4" @click="onDelete">Delete</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    onCancel () {
      this.dialog = false
    },
    onDelete () {
      this.$store.dispatch('deleteVm')
      this.dialog = false
      // this.$store.dispatch('fetchVms')
      // window.location.reload()
    }
  }
}
</script>
