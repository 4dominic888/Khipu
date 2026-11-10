<template>
  <div class="rounded-lg border border-slate-200 bg-white p-4">
    <h2 class="mb-4 text-sm font-semibold uppercase tracking-wide text-red-700">Desempeños</h2>

    <div class="grid grid-flow-col auto-cols-max justify-center gap-5">
      <template v-if="!('6' in props.desempenos)">
        <section v-for="key in availableKeys" :key="key">
          <DesempenoDialog
            :title="key + ' años'"
            :raw-name="key"
            :type="desempenoType"
            :desempeno="(props.desempenos as any)[key]!"
          />
        </section>
      </template>
      <template v-else>
        <section v-for="key in availableKeys" :key="key">
          <DesempenoDialog
            :raw-name="key"
            :title="key + '° grado'"
            :type="desempenoType"
            :desempeno="(props.desempenos as DesempenoPrimaria)[key]!"
          />
        </section>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  INICIAL_DESEMPENO_KEYS,
  PRIMARIA_DESEMPENO_KEYS,
  type DesempenoInicial,
  type DesempenoPrimaria,
  type EducationType,
  type InicialDesempenosPossibleKeys,
  type PrimariaDesempenosPossibleKeys,
} from '../types/main.ts'
import DesempenoDialog from './DesempenoDialog.vue'
import { computed } from 'vue'

const props = defineProps<{ desempenos: DesempenoInicial | DesempenoPrimaria }>()
let availableKeys: (InicialDesempenosPossibleKeys | PrimariaDesempenosPossibleKeys)[]
let desempenoType: EducationType

if ('6' in props.desempenos) {
  availableKeys = computed(() =>
    PRIMARIA_DESEMPENO_KEYS.filter((key) => (props.desempenos as DesempenoPrimaria)[key] != null),
  ).value
  desempenoType = 'primaria'
} else {
  availableKeys = computed(() =>
    INICIAL_DESEMPENO_KEYS.filter((key) => (props.desempenos as DesempenoInicial)[key] != null),
  ).value
  desempenoType = 'inicial'
}
</script>
