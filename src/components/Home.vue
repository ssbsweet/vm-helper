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
                          <td>{{ vms.name }}</td>
                          <td>{{ vms.task }}</td>
                          <td>{{ vms.user }}</td>
                          <td>{{ vms.date }}</td>
                          <v-spacer></v-spacer>
                          <v-btn>button1</v-btn>
                          <v-btn>button2</v-btn>
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
