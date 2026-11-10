<template>
  <div class="rounded-lg border border-purple-200 p-4">
    <template v-if="typeof props.estandar === 'string'">
      <div class="flex items-center gap-4 text-purple-700">
        <h2 class="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-700">
          Estándar de aprendizaje Ciclo II
        </h2>

        <CopyToClipboardComponents :text="`${estandar}`" class="mb-3" />
      </div>

      <h3 class="text-sm leading-relaxed text-slate-700 text-justify">
        {{ estandar }}
      </h3>
    </template>
    <template v-else>
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
  type CiclosPossibleKeys,
  type EstandarInicial,
  type EstandarPrimaria,
} from '../types/main.ts'
import CopyToClipboardComponents from './CopyToClipboardComponents.vue'
import EstandarCycle from './EstandarCycle.vue'

const props = defineProps<{ estandar: EstandarInicial | EstandarPrimaria }>()
let availableKeys: CiclosPossibleKeys[] = []

if (!(typeof props.estandar === 'string')) {
  availableKeys = computed(() =>
    CICLOS_KEYS.filter((key) => (props.estandar as EstandarPrimaria)[key] != null),
  ).value
}
</script>
