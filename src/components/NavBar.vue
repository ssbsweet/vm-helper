<template>
  <div>
    <v-navigation-drawer app temporary v-model="sideNav">
      <v-list shaped>
        <v-subheader>MENU</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item
          v-for="(link, i) in links"
          :key="i"
          :to="link.url">
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="link.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
          @click="onLogout"
          v-if="isUserLoggedIn">
            <v-list-item-icon>
              <v-icon>exit_to_app</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="'Logout'"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app class="mainNavBar">
      <v-app-bar-nav-icon @click="sideNav =! sideNav"
      class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title class="titleText">
        <h2>VM HELPER</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text
        color="blue lighten-5"
        v-for="(link, i) in links"
        :key="i"
        :to="link.url" class="hidden-sm-and-down">
        <v-icon left>{{ link.icon }}</v-icon>
      {{ link.title }}</v-btn>
      <v-btn text
        color="blue lighten-5"
        @click="onLogout"
        v-if="isUserLoggedIn">
        <v-icon left>exit_to_app</v-icon>
      Logout</v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  },
  computed: {
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
          { title: 'My VMs', icon: 'computer', url: '/myvms' },
          { title: 'New VM', icon: 'add', url: '/new' }
        ]
      }
      return [
        { title: 'Login', icon: 'account_box', url: '/' },
        { title: 'Register', icon: 'face', url: '/register' }
      ]
    }
  }
}
</script>

<style scoped>
.mainNavBar {
  background: linear-gradient(to right, #4b79a1 0%, #283e51 100%);
}
.titleText {
  color: #E3F2FD;
}
</style>
