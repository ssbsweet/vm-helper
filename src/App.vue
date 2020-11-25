<template>
  <v-app>
    <NavBar/>
    <template v-if="error">
      <v-snackbar
        :multi-line="true"
        :timeout="10000"
        color="error"
        @input="closeError"
        :value="true">
          {{ error }}
        <v-btn
          color="red accent-1"
          text
          @click.native="closeError"
        >Close
        </v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  }
}
</script>
