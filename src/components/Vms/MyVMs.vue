<template>
  <v-container>
    <v-layout row v-if="!loading && vms.length !== 0">
      <v-row>
        <v-col md="8">
          <v-flex
            v-for="(vm, i) in vms"
            :key="i">
            <v-row class="light-blue--text text--lighten-5" id="vmLine">
              <v-col cols="2">
                <v-icon large :style="{ color: vm.color }">mdi-desktop-classic</v-icon>
                {{ vm.name }}
              </v-col>
              <v-col cols="2">{{ vm.task }}</v-col>
              <v-col cols="2">{{ vm.owner }}</v-col>
              <v-col cols="2">{{ vm.date }}</v-col>
              <v-col cols="3">
                <edit-vm :vm="vm"></edit-vm>
                <delete-vm :vm="vm"></delete-vm>
              </v-col>
            </v-row>
          </v-flex>
        </v-col>
        <v-col md="4">
          <v-img
            lazy-src="@/content/catgirl.png"
            src="@/content/catgirl.png"
          ></v-img>
        </v-col>
      </v-row>
      <!-- <v-flex xs8
        v-for="(vm, i) in vms"
        :key="i">
        <v-row class="light-blue--text text--lighten-5" id="vmLine">
          <v-col cols="2">
            <v-icon large :style="{ color: vm.color }">mdi-desktop-classic</v-icon>
            {{ vm.name }}
          </v-col>
          <v-col cols="2">{{ vm.task }}</v-col>
          <v-col cols="2">{{ vm.owner }}</v-col>
          <v-col cols="2">{{ vm.date }}</v-col>
          <v-col cols="3">
            <edit-vm :vm="vm"></edit-vm>
            <delete-vm :vm="vm"></delete-vm>
          </v-col>
        </v-row>
      </v-flex> -->
    </v-layout>
    <v-layout v-else-if="!loading && vms.length === 0">
      <v-row>
        <v-col class="d-flex justify-center">
          <h1 class="text-primary white--text">You have no VMs</h1>
        </v-col>
        <v-col>
          <v-img
            lazy-src="@/content/empty-screen.png"
            max-height="146"
            max-width="200"
            src="@/content/empty-screen.png"
          ></v-img>
        </v-col>
      </v-row>
    </v-layout>
    <v-layout v-else>
      <v-row>
        <v-col class="d-flex justify-center">
          <v-progress-circular
            :size="100"
            :width="4"
            color="blue"
            indeterminate>
          </v-progress-circular>
        </v-col>
      </v-row>
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

<style scoped>
#vmLine {
  background-color: #37474F;
  border-radius: 8px;
  border: 1px solid #78909C;
}
</style>
