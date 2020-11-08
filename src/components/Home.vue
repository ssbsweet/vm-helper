<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <h1>HomePage</h1>
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
