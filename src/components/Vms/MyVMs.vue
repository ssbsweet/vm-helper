<template>
  <v-container>
      <v-layout row>
          <v-flex xs12
          v-for="(vm, i) in vms"
          :key="i">
              <v-banner single-line>
                <v-simple-table>
                  <template v-slot:default>
                    <tbody>
                      <tr>
                        <td>{{ vm.name }}</td>
                        <td>{{ vm.task }}</td>
                        <td>{{ vm.owner }}</td>
                        <td>{{ vm.date }}</td>
                          <v-spacer></v-spacer>
                          <edit-vm :vm="vm" v-if="isOwner"></edit-vm>
                          <v-btn dark color="light-blue darken-4" @click="onDelete">Delete</v-btn>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-banner>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import EditVm from './EditVm.vue'

export default {
  props: ['id'],
  computed: {
    vms () {
      return this.$store.getters.vms
    }
  },
  components: {
    EditVm
  },
  methods: {
    onDelete () {
      this.$store.dispatch('deleteVm')
      window.location.reload()
    },
    isOwner () {
      return this.product.ownerId === this.$store.getters.user.id
    }
  }
}
</script>
