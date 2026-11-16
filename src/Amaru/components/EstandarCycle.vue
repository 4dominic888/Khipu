<template>
  <button @click="open = true" type="button" class="mb-3 flex items-center gap-1 hover:opacity-70">
    <div
      class="center relative inline-block select-none whitespace-nowrap rounded-lg py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"
      :class="buttonBackgroundColor"
    >
      {{ CICLOS_KEYS_LABELS[cycleName] }}
    </div>
  </button>

  <AmaruModal :visible="open" @close="open = false">
    <template #header>
      <h2 class="text-xl font-semibold" :class="modalHeaderColor">
        Estandar del {{ CICLOS_KEYS_LABELS[cycleName] }}
      </h2>
    </template>

    <p class="min-w-0 flex-1 text-sm text-justify text-wrap leading-7 text-slate-700">
      {{ description }}
    </p>

    <CopyToClipboardComponents :text="description" class="ml-auto" , size="sm" />
  </AmaruModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  backgroundColors,
  badgeColorCycle,
  badgeSelectColor,
  foregroundColors,
} from '../utils/function'
import CopyToClipboardComponents from './CopyToClipboardComponents.vue'
import { CICLOS_KEYS_LABELS, CiclosKeys } from '../types/main.ts'
import AmaruModal from './AmaruModal.vue'

const props = defineProps<{
  cycleName: CiclosKeys
  description: string
}>()

const open = ref(false)
const selectedColor = badgeSelectColor(props.cycleName, CiclosKeys.parse, badgeColorCycle)
const buttonBackgroundColor = backgroundColors[selectedColor]
const modalHeaderColor = foregroundColors[selectedColor]
</script>
