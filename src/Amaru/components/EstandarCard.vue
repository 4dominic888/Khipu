<template>
  <div class="rounded-lg border border-purple-200 p-4">
    <template v-if="isInicial">
      <div class="flex items-center gap-4 text-purple-700">
        <h2 class="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-700">
          Estándar de aprendizaje del ciclo 2
        </h2>

        <CopyToClipboardComponents :text="`${estandar}`" class="mb-3" />
      </div>

      <h3 class="text-sm leading-relaxed text-slate-700 text-justify">
        {{ estandar }}
      </h3>
    </template>

    <template v-if="isPrimaria">
      <div class="flex flex-col gap-4 justify-center text-blue-700">
        <h2 class="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
          Estándares de aprendizaje
        </h2>
        <div class="flex flex-col items-center">
          <section v-for="key in availableKeys" :key="key">
            <EstandarCycle
              :cycle-name="key"
              :description="(props.estandar as EstandarPrimaria)[key]!"
            />
          </section>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  CICLOS_KEYS,
  type CiclosKeys,
  type EducationType,
  type EstandarInicial,
  type EstandarPrimaria,
} from '../types/main.ts'
import CopyToClipboardComponents from './CopyToClipboardComponents.vue'
import EstandarCycle from './EstandarCycle.vue'

const props = defineProps<{ estandar: EstandarInicial | EstandarPrimaria; type: EducationType }>()

const isInicial = props.type === 'inicial'
const isPrimaria = props.type === 'primaria'

let availableKeys: CiclosKeys[] = []
if (isPrimaria) {
  availableKeys = computed(() =>
    CICLOS_KEYS.filter((key) => (props.estandar as EstandarPrimaria)[key] != null),
  ).value
}
</script>
