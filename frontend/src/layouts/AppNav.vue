<template>
  <v-navigation-drawer
    clipped
    fixed
    v-model="drawer"
    app
  >
    <v-list dense>
      <v-list-tile :to="{path: '/'}">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile :to="{path: '/file'}">
        <v-list-tile-action>
          <v-icon>insert_drive_file</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>FileDemo</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AppNav',
  props: {
    isNavOpen: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      drawer: this.isNavOpen
    }
  },
  watch: {
    isNavOpen (val) {
      this.drawer = val
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
