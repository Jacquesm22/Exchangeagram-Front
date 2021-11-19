<template>
  <div class="file-upload-title">Upload Photos</div>
  <el-upload
    drag
    action="#"
    :headers="header"
    :on-success="onSuccess"
    :on-error="onError"
    :before-upload="beforeImageUpload"
  >
    <i class="el-icon-upload upload-icon"></i>
    <div class="upload-text">Drop file here or <em>click to upload.</em></div>
    <template #tip>
      <div class="upload-tip">
        <b>png/jpg/jpeg</b> files with a size less than 2MB
      </div>
    </template>
  </el-upload>
</template>

<script lang="ts">
import { ElMessage } from 'element-plus'
import { defineComponent, Ref, ref } from 'vue'

export default defineComponent({
  setup () {
    function beforeImageUpload (file: File) {
      const isPNG = file.type === 'image/png'
      const isJPG = file.type === 'image/jpg'
      const isJPEG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isPNG && !isJPG && !isJPEG) {
        ElMessage.error('Image must be PNG, JPG or JPG format s!')
        return false
      }
      if (!isLt2M) {
        ElMessage.error('Image size can not exceed 2MB!')
        return false
      }
      return true
    }

    function onSuccess () {
      // can add a response => return image as blob or base64
      ElMessage.success('Image must successfully uploaded.!')
    }

    function onError () {
      ElMessage.error('Image must be PNG, JPG or JPG format!')
    }

    const header: Ref = ref({
      authorization: `bearer ${'ADD JWT TOKEN'}`
    })

    return {
      beforeImageUpload,
      onSuccess,
      onError,
      header
    }
  }
})
</script>

<style scoped>
.file-upload-title {
  font-size: 25px;
  color: #000;
  font-weight: bold;
  margin-bottom: 15px;
}

.selected-photo-title {
  font-size: 18px;
  color: #000;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
}

.selected-photo {
  height: 25px;
}
</style>
