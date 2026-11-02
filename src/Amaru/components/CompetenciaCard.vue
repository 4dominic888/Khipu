<template>
  <div class="border-b border-slate-100">
    <div
      variant="ghost"
      class="flex w-full items-center gap-3 p-4 bg-slate-50 text-left cursor-pointer"
      role="button"
      @click="expanded = !expanded"
    >
      <span class="rounded bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">
        Competencia
      </span>

      <span class="flex-1 min-w-0 wrap-normal md:wrap-break-word">
        {{ title }}
      </span>

      <CopyToClipboardComponents :text="title" class="ml-auto" @click.stop />

      <ChevronDownIcon class="size-4 transition-transform" :class="{ 'rotate-180': expanded }" />
    </div>

    <div v-if="expanded" class="grid gap-4 p-5 md:grid-cols-2">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import CopyToClipboardComponents from './CopyToClipboardComponents.vue'
import ChevronDownIcon from './Icons/ChevronDownIcon.vue'
import type { Competencia } from '../types/main.ts'

defineProps<Competencia>()

const expanded = ref(false)
</script>
