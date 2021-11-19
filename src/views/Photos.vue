<template>
  <el-container>
    <!-- menu -->
    <el-header>
      <top-menu/>
    </el-header>
    <!-- content -->
    <el-main>
      <el-row :gutter="5">
        <el-col :span="6" v-for="item in 20" :key="item">
          <div class="photo-wrapper">
              <photo-details/>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopMenu from '@/components/menu/topMenu.vue'
import PhotoDetails from '@/components/photo/photoDetails.vue'

export default defineComponent({
  components: {
    TopMenu,
    PhotoDetails
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>
.photo-wrapper {
  background: #f7f8f9;
  box-sizing: border-box;
  padding: 5px;
}
</style>
