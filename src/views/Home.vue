<template>
  <el-container>
    <!-- menu -->
    <el-header>
      <top-menu/>
    </el-header>
    <!-- content -->
    <el-main>
      <file-upload-input/>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import TopMenu from '@/components/menu/topMenu.vue'
import FileUploadInput from '@/components/input/fileUploadInput.vue'
import utils from '@/utils'

export default defineComponent({
  components: {
    TopMenu,
    FileUploadInput
  },
  setup () {
    onMounted(() => {
      utils.Token.checkToken()
    })

    return {
    }
  }
})
</script>

<style scoped>

</style>
