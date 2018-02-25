<template>
  <v-toolbar
    color="light-blue"
    dark
    fixed
    app>
    <v-toolbar-side-icon @click.stop="toggleDrawer" />
    <v-toolbar-title>Application</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'AppToolbar',
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
    toggleDrawer () {
      this.$emit('toggleDrawer')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
