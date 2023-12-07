<template>
  <div :class="$style['container']">
    <analogClock />
    <Button color="primary">
      Test
    </Button><br>
    <Button color="red">
      Test
    </Button><br>
    <Button color="white">
      White
    </Button><br>
    <Button shape="pill">
      White
    </Button><br>

    <Button icon-left="carbon:arrow-left">
      Met tekst
    </Button><br>
    <Button icon-right="carbon:arrow-right">
      Met tekst
    </Button>

    <FormInput label="Naam" placeholder="Voer je naam in" /><br><br>
    <Button @click="showModal = true">
      Open modal
    </Button>
    <Modal v-if="showModal" title="Test" padding @closed="showModal = false">
      <FormInput label="Schermnaam" /><br>
      <Button>Opslaan</Button>
    </Modal><br>
    <Navigation style="position: relative; z-index: 0;" />
    <section>
      <h1>Welkom bij Dashey</h1>
      <p>
        Een modulair dashboard. In de basis begonnen als dashboard voor Homey, maar ondertussen uitgegroeid tot een multifuncioneel dashboard.
        Integraties met o.a. Homey, Buienradar en Instagram.
      </p>
    </section>
  </div>
</template>
<script setup>
import analogClock from '~/dashey-plugins/datetime/components/Analog.vue'

const showModal = ref(false)
definePageMeta({
  layout: 'clean'
})
</script>
<style lang="scss" module>
.container {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: var(--spacing-xl);
}
</style>
