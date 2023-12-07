<template>
  <Thing>
    <time :class="$style['clock']">
      <div
        v-for="n in 12"
        :key="n"
        :class="$style['clock__sectors']" />
      <div>
        <div
          v-for="s in 60"
          :key="s"
          :class="$style['clock__second-sectors']" />
      </div>
      <div>
        <div
          v-for="n in [1,2,3,4,5,6,7,8,9,10,11,12]"
          :key="n"
          :class="$style['clock__numbers']">{{ n }}
        </div>
      </div>
      <div :class="$style['clock__hours']" :style="{'transform': rotateHours}" />
      <div :class="$style['clock__minutes']" :style="{'transform': rotateMinutes}" />
      <div :class="$style['clock__seconds']" :style="{'transform': rotateSeconds}" />
    </time>
  </Thing>
</template>
<script setup>
const interval = ref(null)
const rotateHours = ref(null)
const rotateMinutes = ref(null)
const rotateSeconds = ref(null)
const calculateRotation = () => {
  const date = new Date()
  const hoursDeg = 360 * ((date.getHours() * 3600) + (date.getMinutes() * 60) + date.getSeconds()) / 43200
  const minutesDeg = 360 * ((date.getMinutes() * 60) + date.getSeconds()) / 3600
  const secondsDeg = 360 * date.getSeconds() / 60
  rotateHours.value = `rotate(${hoursDeg}deg) translateX(-50%)`
  rotateMinutes.value = `rotate(${minutesDeg}deg) translateX(-50%)`
  rotateSeconds.value = `rotate(${secondsDeg}deg) translateX(-50%)`
}

calculateRotation()

clearInterval(interval.value)
interval.value = setInterval(() => calculateRotation(), 1000)
</script>
<style lang="scss" module>
@use 'sass:math';

.clock {
    aspect-ratio: 1/1;
    box-shadow: 0px 0px 0px 1px #fff;
    border-radius: 100%;
    margin: auto;
    position: relative;
    container: clock / inline-size;
    padding-bottom: 100%;

    &__hours,
    &__minutes,
    &__seconds {
        background-color: #fff;
        border-radius: 4px;
        position: absolute;
        bottom: 50%;
        left: 50%;
        height: 45%;
        width: 1.5cqmin;
        transform-origin: 0 100%;
    }

    &__hours {
        height: 30cqmin;
        width: 1.5cqmin;

    }

    &__seconds {
        border-color: #aaa;
        width: 1px;

    }

    &__second-sectors,
    &__sectors {
        background-color: #fff;
        display: inline-flex;
        height: 3cqmin;
        width: 1px;
        position: absolute;
        top: 0;
        left: 50%;
        transform-origin: 0px 50cqmin;
        z-index: 2;

        @for $i from 1 through 12 {
            &:nth-of-type(#{$i}) {
                transform: rotate(#{$i * 30}deg) ;
            }
        }
    }

    &__second-sectors {
        background-color: #aaa;
        height: 8px;
        z-index: 1;

        @for $s from 0 through 59 {
            &:nth-of-type(#{$s}) {
                transform: rotate(#{$s * 6}deg);
            }
        }
    }

    &__numbers {
        font-size: 7cqmin;
        line-height: 1;
        font-weight: 400;
        position: absolute;
        left: 46cqmin;
        top: 46cqmin;
        width: 8cqmin;
        height: 8cqmin;
        text-align: center;

        @for $i from 1 through 12 {
            &:nth-of-type(#{$i}) {
                $x: 40 * math.cos(math.$pi / -2 + (2 * $i * math.$pi) / 12);
                $y: 40 * math.sin(math.$pi / -2 +  (2 * $i * math.$pi) / 12);

                transform: translate3d(#{$x} +'cqmin', #{$y} +'cqmin', 0);
            }
        }
    }
}
</style>
