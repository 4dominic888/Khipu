<template>
  <div v-if="data">
    <main>
      <header class="bg-teal-700 text-white">
        <div class="mx-auto max-w-5xl px-4 py-10 sm:py-14">
          <h1 class="text-4xl text-center font-medium uppercase tracking-widest text-teal-200">
            Propósitos de Aprendizajes del nivel {{ type }}
          </h1>
          <br />
          <h1 class="mt-2 font-bold text-balance text-5xl sm:text-4xl">Áreas curriculares</h1>
          <p class="text-teal-50 mt-3 text-3xl sm:text-2xl text-justify leading-normal">
            Explora cada área y despliega sus competencias para conocer las capacidades y desempeños
            asociados.
          </p>
        </div>
      </header>
    </main>
    <section class="mx-auto max-w-5xl px-4 py-10 sm:py-10">
      <div class="flex flex-col gap-8" v-for="(area, index) in parsedAreas" :key="index">
        <AreaCard :data="area" :type="props.type" />
      </div>
    </section>
  </div>
  <div v-else>Cargando...</div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import AreaCard from './components/AreaCard.vue'
import type { AvailableProgramaData, EducationType } from './types/main'
import { parseAreas } from './utils/function'

const props = defineProps<{ type: EducationType }>()

const data = ref<unknown | AvailableProgramaData>(null)
const parsedAreas = computed(() => (data.value as AvailableProgramaData).areas)

onMounted(async () => {
  if (props.type === 'inicial') data.value = parseAreas(await import('./assets/AreasInicial.json'))
  if (props.type === 'primaria')
    data.value = parseAreas(await import('./assets/AreasPrimaria.json'))
  else throw Error('Tipo no valido')
})
</script>
