<template>
  <!-- image card -->
  <el-card :body-style="{ padding: '0px' }">
    <!-- header -->
    <template #header>
      <div class="card-header">
        <span><b>Image Name</b></span>
        <el-button circle size="mini" type="danger" icon="el-icon-delete"/>
      </div>
    </template>
    <!-- image -->
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      class="photo-style"
    />
    <el-divider style="margin: 10px 0px !important;"></el-divider>
    <!-- meta data -->
    <div style="padding: 5px 15px">
      <!-- geo location -->
      <div style="margin-bottom: 5px;"><b>Geo-location</b></div>
      <div style="margin-left: 10px;"><i>Lat:</i> 123456789</div>
      <div style="margin-left: 10px;"><i>Long:</i> 123456789</div>
      <br/>
      <!-- tags -->
      <div style="margin-bottom: 5px;"><b>Tags</b></div>
      <el-tag type="info" style="margin-left: 5px;">Tag 1</el-tag>
      <el-tag type="info" style="margin-left: 5px;">Tag 2</el-tag>
      <el-tag type="info" style="margin-left: 5px;">Tag 3</el-tag>
      <el-tag type="info" style="margin-left: 5px;">Tag 4</el-tag>
      <el-tag type="info" style="margin-left: 5px;">Tag 5</el-tag>
    </div>
    <br/>
  </el-card>
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

.photo-style {
  width: auto;
  height: 250px;
  margin: auto;
  display:block;
  box-sizing: border-box;
  padding: 5px;
  margin-top: 10px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
