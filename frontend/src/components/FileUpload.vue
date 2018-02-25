 <!--
 ## multi with axios
 https://vuejsexamples.com/drag-and-drop-multiple-file-uploader-with-vue-js-v2-and-axios/
 -->
 <!--
  File Upload Component
 -->
<template>
  <div>
    <div class="image-preview">
      <i
        v-show="!imageSrc"
        class="fa fa-picture-o" />
      <img
        v-show="imageSrc"
        :src="imageSrc">
    </div>
    <div class="file-input">
      <input
        type="file"
        @change="onFileChange">
      <button
        :disabled="!imageSrc"
        @click="onClickUpload">Upload</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FileUpload',
  props: {
  },
  data () {
    return {
      imageSrc: '',
      file: null
    }
  },
  methods: {
    onFileChange (event) {
      // drag & drop으로 파일 선택 시에는 dataTransfer에 저장되어있음
      let files = event.target.files || event.dataTransfer.files
      if (files.length) {
        this.file = files[0]

        // image 파일인 경우에 preview를 출력
        if (/^image\//.test(this.file.type)) {
          this.preview(this.file)
        } else {
          this.imageSrc = ''
        }
      }
    },
    preview (file) {
      let vm = this
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        vm.imageSrc = e.target.result
      }
    },
    onClickUpload () {
      // FormData에 저장
      let formData = new FormData()
      formData.append('name', this.file.name)
      formData.append('file', this.file)
      axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
      axios.post('/api/upload', formData)
        .then(res => {
          console.log(res.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  .image-preview {
    border-radius: 4px;
    margin-right: 1rem;
    background: #eee;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    overflow: hidden;

    i {
      color: #ccc;
      font-size: 50px;
    }
    img {
      width: 80px;
      height: 80px;
    }
  }
  .file-input {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button {
      margin: 1rem;
      border-radius: .5rem;
      width: 100%;
      background: #00BFA5;
      color: #fff;
    }
  }
}
</style>
