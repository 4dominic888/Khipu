<template>
  <article
    class="overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow shadow-md p-2 my-2"
  >
    <Button
      variant="ghost"
      class="flex w-full items-center gap-4 p-5 text-left"
      @click="expanded = !expanded"
    >
      <AreaIcon :name="title" />
      <!-- <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal-100 font-bold text-teal-700">
            {{ icon }}
        </span> -->
      <span class="flex-1">
        <span class="block text-lg font-semibold">
          {{ title }}
        </span>

        <span class="block text-sm text-slate-500">
          {{ competencias.length }} {{ competencias.length > 1 ? 'competencias' : 'competencia' }}
        </span>
      </span>
      <ChevronDownIcon class="size-5 transition-transform" :class="{ 'rotate-180': expanded }" />
    </Button>

    <div v-if="expanded" class="border-t border-slate-200">
      <div v-for="(competencia, index) in competencias" :key="index">
        <CompetenciaCard :title="competencia.title" class="flex flex-wrap" :key="index">
          <CapacidadList :capacidades="competencia.capacidades" />

          <EstandarCard :text="competencia.estandar" />

          <DesempenoCard :desempenos="competencia.desempenos" class="col-span-2" />
        </CompetenciaCard>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Button from './ExpandedButton.vue'
import ChevronDownIcon from './Icons/ChevronDownIcon.vue'
import AreaIcon from './AreaIcon.vue'
import CompetenciaCard from './CompetenciaCard.vue'
import CapacidadList from './CapacidadList.vue'
import DesempenoCard from './DesempenoCard.vue'
import EstandarCard from './EstandarCard.vue'
import type { Area, Capacidades, Competencia, Desempeno, Estandar } from '../types/main.ts'

defineProps<
  Area & {
    competencias: (Competencia & Capacidades & Estandar & { desempenos: Desempeno })[]
  }
>()
const expanded = ref(false)
</script>
