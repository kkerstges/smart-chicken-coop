<template>
  <v-app>
    <v-navigation-drawer
      id="navigation-menue"
      v-model="isMenueOpen"
      app
      clipped
      left
    >
      <v-list dense>
        <v-list-item @click.stop="route('/')">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-action>Home</v-list-item-action>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click.stop="route('/about')">
        <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-action>About</v-list-item-action>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-app-bar-nav-icon @click.stop="isMenueOpen = !isMenueOpen" />
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import router from './router'

@Component({})
export default class App extends Vue {
  isMenueOpen: boolean = false

  route (path: any) {
    if (router.currentRoute.path !== path) {
      router.push({ path })
    }
  }
}
</script>
