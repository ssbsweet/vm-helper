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
