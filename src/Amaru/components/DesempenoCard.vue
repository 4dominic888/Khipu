<template>
  <div class="rounded-lg border border-slate-200 bg-white p-4">
    <h2 class="mb-4 text-sm font-semibold uppercase tracking-wide text-red-700">Desempeños</h2>

    <div class="flex flex-row justify-center-safe gap-5 overflow-x-auto overscroll-contain mx-5">
      <template v-if="isPrimaria">
        <section v-for="key in availableKeys" :key="key">
          <DesempenoDialog
            :title="PRIMARIA_DESEMPENO_LABELS[key]"
            :raw-name="key"
            :type="type"
            :desempeno="(props.desempenos as any)[key]!"
          />
        </section>
      </template>
      <template v-if="isInicial">
        <section v-for="key in availableKeys" :key="key">
          <DesempenoDialog
            :raw-name="key"
            :title="INICIAL_DESEMPENO_LABELS[key as InicialDesempenosKeys]"
            :type="type"
            :desempeno="(props.desempenos as any)[key]!"
          />
        </section>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  INICIAL_DESEMPENO_LABELS,
  InicialDesempenosKeys,
  PRIMARIA_DESEMPENO_LABELS,
  PrimariaDesempenosKeys,
  type DesempenoInicial,
  type DesempenoPrimaria,
  type EducationType,
} from '../types/main.ts'
import DesempenoDialog from './DesempenoDialog.vue'
import { computed } from 'vue'

const props = defineProps<{
  desempenos: DesempenoInicial | DesempenoPrimaria
  type: EducationType
}>()

const isInicial = props.type === 'inicial'
const isPrimaria = props.type === 'primaria'

let availableKeys: (InicialDesempenosKeys | PrimariaDesempenosKeys)[]

if (isPrimaria) {
  availableKeys = computed(() =>
    PrimariaDesempenosKeys.values.filter(
      (key) => (props.desempenos as DesempenoPrimaria)[key] != null,
    ),
  ).value
} else {
  availableKeys = computed(() =>
    InicialDesempenosKeys.values.filter(
      (key) => (props.desempenos as DesempenoInicial)[key] != null,
    ),
  ).value
}
</script>
