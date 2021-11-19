<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* Element ui style override */
.el-header {
  padding: 0px !important;
}

.el-upload {
  width: 100% !important;
  max-width: 550px !important;
}

.el-upload-dragger {
  width: 100% !important;
}
</style>
