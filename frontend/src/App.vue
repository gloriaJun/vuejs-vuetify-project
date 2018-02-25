<template>
  <v-app id="inspire">
    <!--<app-nav :isNavOpen="isNavOpen" />-->
    <app-nav :is-nav-open="isNavOpen" />
    <app-toolbar
      :is-nav-open="isNavOpen"
      @toggleDrawer="toggleDrawer" />
    <v-content>
      <router-view/>
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
import AppToolbar from '@/layouts/AppToolbar'
import AppNav from '@/layouts/AppNav'
import AppFooter from '@/layouts/AppFooter'

export default {
  name: 'App',
  components: {
    AppToolbar,
    AppNav,
    AppFooter
  },
  data () {
    return {
      isNavOpen: false
    }
  },
  methods: {
    toggleDrawer () {
      console.log(this.isNavOpen)
      this.isNavOpen = !this.isNavOpen
    }
  }
}
</script>
