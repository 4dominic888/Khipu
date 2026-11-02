<template>
  <button @click="open = true" type="button" class="mb-3 flex items-center gap-1 hover:opacity-70">
    <div
      class="center relative inline-block select-none whitespace-nowrap rounded-lg py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"
      :class="badgeColor(title)"
    >
      {{ title }}
    </div>
  </button>

  <div
    v-if="open"
    @click="open = false"
    class="fixed inset-0 flex items-center justify-center bg-black/50 z-1"
  >
    <div @click.stop class="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6">
      <div class="border-b p-4">
        <h2 class="text-xl font-semibold">Desempeño de {{ title }}</h2>
      </div>

      <div flex-1 overflow-y-auto p-4>
        <ul class="space-y-3">
          <li
            v-for="(item, index) in props.desempenoAge"
            :key="index"
            class="flex flex-row items-start gap-3 rounded-lg bg-slate-50 p-3 text-sm leading-7 text-slate-700"
          >
            <span class="mt-2 size-1.5 shrink-0 rounded-full" :class="badgeColor(props.title)" />
            <p class="min-w-0 flex-1 text-sm text-justify text-wrap leading-7 text-slate-700">
              {{ item.definicion }}
              <span v-if="item.ejemplo" class="text-slate-600 italic">
                <strong>Ejemplo:</strong> {{ item.ejemplo }}
              </span>
            </p>
            <CopyToClipboardComponents
              :text="item.definicion + (item.ejemplo ? ' Ejemplo: ' + item.ejemplo : '')"
              class="ml-auto"
              ,
              size="sm"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onUnmounted } from 'vue'
import type { DesempenoAge } from '../types/main.ts'
import badgeColor from '../utils/function.ts'
import CopyToClipboardComponents from './CopyToClipboardComponents.vue'

const props = defineProps<{
  title: string
  desempenoAge: DesempenoAge[]
}>()
console.log(badgeColor(props.title))
const open = defineModel<boolean>('open')
watch(open, (value) => {
  document.body.classList.toggle('overflow-hidden', value)
})
onUnmounted(() => {
  document.body.classList.remove('overflow-hidden')
})
</script>
