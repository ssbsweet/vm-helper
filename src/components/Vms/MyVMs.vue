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
                            <v-btn dark color="light-blue darken-4">b1</v-btn>
                            <v-btn dark color="light-blue darken-4">b2</v-btn>
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
export default {
  computed: {
    vms () {
      return this.$store.getters.vms
    }
  }
}
</script>
