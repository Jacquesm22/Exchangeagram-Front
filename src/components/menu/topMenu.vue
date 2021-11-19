<template>
  <el-menu
    mode="horizontal"
    background-color="#000"
    text-color="#fff"
    active-text-color="#2ECC71"
    router
  >
    <el-menu-item index="/Home"><span class="menu-title">Exchangeagram</span></el-menu-item>
    <el-menu-item index="/Photos"><i class="el-icon-picture menu-icon-color"></i>Photos</el-menu-item>
    <el-menu-item index="/Albums"><i class="el-icon-folder-opened menu-icon-color"></i>Albums</el-menu-item>
    <el-menu-item index="/SharedPhotos"><i class="el-icon-share menu-icon-color"></i>Shared Photos</el-menu-item>
    <el-menu-item index="/SharedAlbums"><i class="el-icon-share menu-icon-color"></i>Shared Albums</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style scoped>
.menu-icon-color {
  color: #fff;
}

.menu-title {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  font-family: "Lobster", Arial, Helvetica, sans-serif;
  margin-bottom: 25px;
}
</style>
