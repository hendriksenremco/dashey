<template>
  <div :class="[$style['device'], {[$style['device--on']] : state.onoff}, {[$style['device--disabled']] : disabled}]" @click="onClick">
    <Icon v-if="device.virtualClass === 'light' || device.class === 'light'" name="fluent:lightbulb-16-filled" :class="$style['device__icon']" size="36" />
    <Icon v-if="device.driverId === 'camera'" name="fluent:video-security-20-filled" :class="$style['device__icon']" size="36" />
    <div :class="$style['device__name']">
      {{ device.name }}
    </div>
  </div>
  <!-- <Thing :title="device.name" :disabled="!device.available" :subtitle="device.zoneName" :loading="loading"> -->
  <!-- {{ state }} -->
  <!-- <component
      :is="capabilityToComponent(capability)"
      v-for="capability in device.capabilities"
      :key="capability"
      :state="state[capability]"
      @update="updateCapability" /> -->
  <!-- </Thing> -->
</template>

<script setup lang="ts">
import { useHomey } from '../composables/useHomey'
import CapabilityOnOff from './Capability/OnOff.vue'
import CapabilityDim from './Capability/Dim.vue'
const { getDeviceById, loading } = useHomey()
const props = defineProps<{
  id?: String
  disabled?: boolean
}>()
const device: any = await getDeviceById(props.id)
const capabilitiesObj: any = {}
const state: any = ref({})

device.capabilities.forEach((capability: string) => {
  state.value[capability] = device.capabilitiesObj[capability].value
  capabilitiesObj[capability] = device.makeCapabilityInstance(capability, (value: any) => {
    state.value[capability] = value
  })
})

// @ts-ignore
const updateCapability = async ({ key, value }) => {
  state.value[key] = value
  await capabilitiesObj[key].setValue(value)
}

const onClick = async () => {
  if (props.disabled) { return false }
  await updateCapability({ key: 'onoff', value: !state.value.onoff })
}

const capabilityToComponent = (capability: String) => {
  if (capability === 'onoff') { return CapabilityOnOff }
  if (capability === 'dim') { return CapabilityDim }
}
</script>
<style lang="scss" module>
.device {
  background-color: var(--grey-800);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, .4);
  border-radius: var(--thing-radius);
  color: var(--white);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  padding: var(--spacing-l);
  transition: all 500ms ease;

  &__icon {
    filter: grayscale(1);
    transition: filter 2s ease;
  }

  &__name {
    line-height: 1.2;
  }

  &--on {
    background-color: var(--grey-100);
    color: var(--black);

    .device__icon {
      filter: grayscale(0)
    }
  }
}
</style>
