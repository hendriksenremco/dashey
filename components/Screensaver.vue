<template>
  <div :class="[$style['screensaver'],{[$style['screensaver--show']]: idle}]">
    Screensaver
  </div>
</template>
<script setup>
import { useIdle } from '@vueuse/core'
const { idle } = useIdle(30000)
</script>
<style lang="scss" module>
.screensaver {
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .9);
  color: var(--grey-400);
  backdrop-filter: blur(4px);
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  opacity: 0;
  transition: opacity 2s ease;
  pointer-events: none;

  &--show {
    opacity: 1;
  }
}
</style>
