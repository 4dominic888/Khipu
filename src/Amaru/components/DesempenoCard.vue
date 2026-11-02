<template>
  <div class="rounded-lg border border-slate-200 bg-white p-4">
    <h2 class="mb-4 text-sm font-semibold uppercase tracking-wide text-red-700">Desempeños</h2>

    <div class="grid grid-flow-col auto-cols-max justify-center gap-5">
      <section v-for="key in availableKeys" :key="key">
        <DesempenoAgeDialog :title="key + ' años'" :desempenoAge="props.desempenos[key]!" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DESEMPENO_KEYS, type Desempeno } from '../types/main.ts'
import DesempenoAgeDialog from './DesempenoAgeDialog.vue'
import { computed } from 'vue'

const props = defineProps<{ desempenos: Desempeno }>()
const availableKeys = computed(() =>
  DESEMPENO_KEYS.filter((key) => props.desempenos[key] != null),
).value
</script>
