<template>
  <v-container>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Task
                </th>
                <th class="text-left">
                  Owner
                </th>
                <th class="text-left">
                  Deploy Date
                </th>
                <th class="text-left">
                  Actualization Date
                </th>
                <th class="text-left">
                  EDIT
                </th>
                <th class="text-left">
                  DELETE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(location, idx) in locations" :key="idx">
                <td>{{ location.name }}</td>
                <td>{{ location.task }}</td>
                <td>{{ location.owner }}</td>
                <td>{{ location.deploy | formatDate }}</td>
                <td>{{location.actualization}}</td>
                <td>
                  <button @click="deleteLocation(location.id)">Delete</button>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
  </v-container>
</template>

<script>
  import { db } from '../firebase'

  export default {
    name: 'HelloWorld',

    data () {
      return {
        locations: []
      }
    },
    firestore () {
      return {
        locations: db.collection('locations').orderBy('name')
      }
    },
    methods: {
      deleteLocation (id) {
        db.collection('locations').doc(id).delete()
      }
    }
  };
</script>
