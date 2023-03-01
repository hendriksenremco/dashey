<template>
  <div :class="$style.wrapper">
    <img border="0" :class="$style.img" src="https://image.buienradar.nl/2.0/image/single/RadarMapRainNL?height=500&width=500&renderBackground=True&renderBranding=False&renderText=True">
  </div>
</template>
<style lang="scss" module>
.wrapper {
  border-radius: var(--thing-radius);
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.img {
  pointer-events: none;
  object-fit: cover;
  width: 100%;

}
</style>
