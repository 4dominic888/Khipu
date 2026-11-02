<template>
  <div class="rounded-lg border border-slate-200 p-4">
    <h2 class="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-700">Capacidades</h2>

    <ul class="flex flex-col gap-2">
      <li
        v-for="(item, index) in props.capacidades"
        :key="index"
        class="flex gap-2 text-sm leading-relaxed text-slate-700"
      >
        <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal-500" />
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Capacidades } from '../types/main.ts'

const props = defineProps<Capacidades>()
</script>
