<template>
    <v-container>
      <v-col md="6" offset-md="3">
        <v-layout row class="newVmForm">
            <v-flex xs12 sm10 offset-sm1>
                <h1 class="text--secondary mb--3">Add a new Virtual Machine</h1>
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
                    v-model="task">
                  </v-text-field>
                  <v-text-field
                    prepend-icon="person"
                    name="owner"
                    label="who use"
                    type="text"
                    v-model="owner">
                  </v-text-field>
                  <v-text-field
                    prepend-icon="alarm"
                    name="actual"
                    label="actualization date"
                    type="date"
                    v-model="date">
                  </v-text-field>
                  <v-color-picker class="ma-2" hide-canvas v-model="color"></v-color-picker>
                  <v-layout>
                    <v-flex xs12>
                      <v-spacer></v-spacer>
                      <v-btn
                      :loading="loading"
                      :disabled="!valid || loading"
                      class="success"
                      @click="createProduct">Create</v-btn>
                    </v-flex>
                  </v-layout>
                </v-form>
            </v-flex>
        </v-layout>
      </v-col>
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
      color: '',
      valid: false
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createProduct () {
      if (this.$refs.form.validate()) {
        const vm = {
          name: this.name,
          task: this.task,
          owner: this.owner,
          date: this.date,
          color: this.color
        }
        this.$store.dispatch('createVm', vm)
          .then(() => {
            this.$router.push('/myvms')
          })
          .catch(() => {})
      }
    }
  }
}
</script>

<style scoped>
.newVmForm {
  background-color: aliceblue;
  border-radius: 8px;
  border: 1px solid #78909C;
}
</style>
