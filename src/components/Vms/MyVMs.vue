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
                          <td>{{ vm.user }}</td>
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
  data () {
    return {
      vms: [
        {
          id: '1',
          name: 'vm1',
          task: 'web-4550',
          user: 'Артур',
          date: '08.11.2020'
        },
        {
          id: '2',
          name: 'vm2',
          task: 'apk-760',
          user: 'Никита',
          date: '08.11.2020'
        },
        {
          id: '3',
          name: 'vm3',
          task: 'mob-721',
          user: 'Мишаня',
          date: '08.11.2020'
        }
      ]
    }
  }
}
</script>
