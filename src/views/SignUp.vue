<template>
  <div class="signup-wrapper">
    <sign-up-form class="signup-form-position"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SignUpForm from '@/components/form/SignUpForm.vue'

export default defineComponent({
  components: {
    SignUpForm
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>
.signup-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='100%' height='1000' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1032%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(46%2c 204%2c 113%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c242 C 57.6%2c204.6 172.8%2c57 288%2c55 C 403.2%2c53 460.8%2c223.4 576%2c232 C 691.2%2c240.6 748.8%2c110.2 864%2c98 C 979.2%2c85.8 1036.8%2c176.6 1152%2c171 C 1267.2%2c165.4 1382.4%2c90.2 1440%2c70L1440 560L0 560z' fill='rgba(46%2c 204%2c 113%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c378 C 96%2c407.6 288%2c545.2 480%2c526 C 672%2c506.8 768%2c298.4 960%2c282 C 1152%2c265.6 1344%2c411.6 1440%2c444L1440 560L0 560z' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1032'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: auto;
  overflow-x: hidden;
}

.signup-form-position {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
