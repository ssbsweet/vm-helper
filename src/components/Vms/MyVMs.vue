<template>
    <v-container>
        <v-layout row v-if="!loading && vms.length !== 0">
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
                            <edit-vm :vm="vm"></edit-vm>
                            <delete-vm :vm="vm"></delete-vm>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-banner>
            </v-flex>
        </v-layout>
        <v-layout v-else-if="!loading && vms.length === 0">
          <v-flex xs12 class="text-xs-center">
            <h1 class="text-primary">You have no VMs</h1>
          </v-flex>
        </v-layout>
        <v-layout v-else>
          <v-flex xs12 class="text-xs-center">
            <v-progress-circular
              :size="100"
              :width="4"
              color="blue"
              indeterminate>
            </v-progress-circular>
          </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import EditVm from './EditVm.vue'
import DeleteVm from './DeleteVm.vue'

export default {
  computed: {
    vms () {
      return this.$store.getters.myVms
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  components: {
    EditVm,
    DeleteVm
  }
}
</script>
