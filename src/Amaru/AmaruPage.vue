<script setup lang="ts">
import AreaCard from './components/AreaCard.vue'
import curriculoIncialData from './assets/CurriculoInicial.json'
import type { CurriculoInicialData } from './types/main.ts'

const data = curriculoIncialData as unknown as CurriculoInicialData
</script>

<template>
  <main class="min-h-screen bg-slate-50 text-slate-800">
    <header class="bg-teal-700 text-white">
      <div class="mx-auto max-w-5xl px-4 py-10 sm:py-14">
        <p class="text-5x1 font-medium uppercase tracking-wider text-teal-200">
          Currículo Nacional
        </p>
        <h1 class="mt-2 text-3xl font-bold text-balance sm:text-4xl">Áreas curriculares</h1>
        <p class="mt-3 max-w-2xl leading-relaxed text-teal-50">
          Explora cada área y despliega sus competencias para conocer las capacidades y desempeños
          asociados.
        </p>
      </div>
    </header>

    <section class="mx-auto max-w-5xl px-4 py-8 sm:py-12">
      <div class="flex flex-col gap-4" v-for="(area, index) in data.areas" :key="index">
        <AreaCard :title="area.title" :competencias="area.competencias" :key="index" />
      </div>
    </section>
  </main>
</template>
