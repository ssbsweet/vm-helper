<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>VM Helper</h1>
      </div>

      <v-spacer></v-spacer>

      <form @submit="addLocation(name, task, owner, deploy, actualization)">
        <input v-model="name" placeholder="VM Name">
        <input v-model="task" placeholder="Task Name">
        <input v-model="owner" placeholder="Who Use VM">
        <input v-model="deploy" placeholder="When Deploy">
        <input v-model="actualization" placeholder="When Actualization">
        <button type="submit">ADD NEW VM</button>
        <v-icon>mdi-open-in-new</v-icon>
      </form>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import { db } from './firebase'
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data () {
   return {
     name: '',      // <-- новое свойство
     task: '',
     owner: '',
     deploy: '',
     actualization: ''      // <-- новое свойство
   }
 },
 methods: {
   addLocation (name, task, owner, deploy, actualization) {      // <-- новый метод
     const create =  new Date()
     db.collection('locations').add({ name, task, owner, deploy, actualization, create })
   }
 }
};
</script>

<style scoped>

</style>
