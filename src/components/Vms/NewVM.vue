<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm4 offset-sm4>
                <h1 class="text--secondary mb--3">Add new Virtual Machine</h1>
                <v-form ref="form" v-model="valid" lazy-validation class="mb-3">
                  <v-text-field
                  prepend-icon="laptop"
                  name="name"
                  label="name"
                  type="text"
                  required
                  :rules="[v => !!v  || 'Name is required']"
                  v-model="name"></v-text-field>
                  <v-text-field
                  prepend-icon="anchor"
                  name="task"
                  label="task number"
                  type="text"
                  v-model="task"></v-text-field>
                  <v-text-field
                  prepend-icon="person"
                  name="owner"
                  label="who use"
                  type="text"
                  v-model="owner"></v-text-field>
                  <v-text-field
                  prepend-icon="alarm"
                  name="actual"
                  label="actualization date"
                  type="text"
                  v-model="date"></v-text-field>
                  <v-layout>
                    <v-flex xs12>
                      <v-spacer></v-spacer>
                      <v-btn
                      :disabled="!valid"
                      class="success"
                      @click="createProduct">Create</v-btn>
                    </v-flex>
                  </v-layout>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      task: '',
      owner: '',
      date: '',
      valid: false
    }
  },
  methods: {
    createProduct () {
      if (this.$refs.form.validate()) {
        const vm = {
          name: this.name,
          task: this.task,
          owner: this.owner,
          date: this.date
        }
        this.$store.dispatch('createVm', vm)
      }
    }
  }
}
</script>
