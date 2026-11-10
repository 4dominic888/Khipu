<template>
  <button @click="open1 = true" type="button" class="mb-3 flex items-center gap-1 hover:opacity-70">
    <div
      class="center relative inline-block select-none whitespace-nowrap rounded-lg py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"
      :class="badgeCycle(cycleName)"
    >
      {{ ParseCycleName(cycleName) }}
    </div>
  </button>

  <div
    v-if="open1"
    @click="open1 = false"
    class="fixed inset-0 flex items-center justify-center bg-black/50 z-1"
  >
    <div @click.stop class="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6">
      <div class="border-b p-4">
        <h2 class="text-xl font-semibold">Estandar del {{ ParseCycleName(cycleName) }}</h2>
      </div>

      <div flex-1 overflow-y-auto p-4>
        <p class="min-w-0 flex-1 text-sm text-justify text-wrap leading-7 text-slate-700">
          {{ description }}
        </p>
        <CopyToClipboardComponents :text="description" class="ml-auto" , size="sm" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, watch } from 'vue'
import { badgeCycle, ParseCycleName } from '../utils/function'
import CopyToClipboardComponents from './CopyToClipboardComponents.vue'

defineProps<{
  cycleName: string
  description: string
}>()

const open1 = defineModel<boolean>('open')
watch(open1, (value) => {
  document.body.classList.toggle('overflow-hidden', value)
})

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden')
})
</script>
