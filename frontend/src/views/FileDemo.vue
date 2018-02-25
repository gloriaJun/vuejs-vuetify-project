<template>
  <v-container fluid>
    <h1 class="display-1 primary--text">
      <p>File Component Demo Page</p>
    </h1>

    <v-layout
      row
      wrap>
      <v-flex
        xs12
        sm6
        md4
      >
        <v-card>
          <v-card-title primary-title>
            <div class="headline">Single File Upload</div>
          </v-card-title>
          <v-card-actions class="pl-3">
            <file-upload/>
          </v-card-actions>
          <v-container>
            <v-card>
              <v-card-media
                src=""
                height="200px" />
            </v-card>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import FileUpload from '@/components/FileUpload'

export default {
  name: 'FileDemo',
  components: {
    FileUpload
  },
  props: {},
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
