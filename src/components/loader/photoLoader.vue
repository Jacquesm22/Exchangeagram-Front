<template>
  <div class="photo-loader"></div>
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
.photo-loader {
  width: 70px;
  height: 70px;
  background:#fff;
  border-radius: 9px;
  --c:radial-gradient(farthest-side,#000 92%,#0000);
  --s:18px 18px;
  -webkit-mask:
    var(--c) left  10px top    10px,
    var(--c) right 10px top    10px,
    var(--c) right 10px bottom 10px,
    var(--c) left  10px bottom 10px,
    linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;
  mask-composite:exclude;
  -webkit-mask-repeat:no-repeat;
  animation: photo-loader-animation 1.5s infinite;
}

@keyframes photo-loader-animation {
  0%    {-webkit-mask-size:0    0  ,0    0  ,0    0  ,0    0  ,auto}
  12.5% {-webkit-mask-size:var(--s),0    0  ,0    0  ,0    0  ,auto}
  25%   {-webkit-mask-size:var(--s),var(--s),0    0  ,0    0  ,auto}
  37.5% {-webkit-mask-size:var(--s),var(--s),var(--s),0    0  ,auto}
  50%   {-webkit-mask-size:var(--s),var(--s),var(--s),var(--s),auto}
  62.5% {-webkit-mask-size:0    0  ,var(--s),var(--s),var(--s),auto}
  75%   {-webkit-mask-size:0    0  ,0    0  ,var(--s),var(--s),auto}
  87.5% {-webkit-mask-size:0    0  ,0    0  ,0   0   ,var(--s),auto}
  100%  {-webkit-mask-size:0    0  ,0    0  ,0   0   ,0   0   ,auto}
}
</style>
