<template>
  <button @click="open = true" type="button" class="my-3 flex hover:opacity-70">
    <div
      class="center relative inline-block select-none whitespace-nowrap rounded-lg py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"
      :class="buttonBackgroundColor"
    >
      {{ title }}
    </div>
  </button>

  <AmaruModal :visible="open" @close="open = false">
    <template #header>
      <h2 class="text-xl font-semibold" :class="modalHeaderColor">Desempeño de {{ title }}</h2>
    </template>

    <ul class="space-y-3">
      <li
        v-for="(item, index) in props.desempeno"
        :key="index"
        class="flex flex-col items-start gap-2 rounded-lg bg-slate-50 p-3 text-sm leading-7 text-slate-700"
      >
        <div class="flex w-full items-baseline gap-3">
          <span class="size-1.5 shrink-0 rounded-full" :class="buttonBackgroundColor"></span>

          <p class="min-w-0 text-justify leading-7">
            {{ item.def }}
            <span v-if="item.ejemplo" class="text-slate-600 italic">
              <strong>Ejemplo:</strong> {{ item.ejemplo }}
            </span>
          </p>
        </div>

        <ul v-if="item.list?.length" class="list-disc pl-6 space-y-1 w-full">
          <li
            v-for="(subItem, subIndex) in item.list"
            :key="subIndex"
            class="text-justify leading-7"
          >
            {{ subItem }}
          </li>
        </ul>

        <CopyToClipboardComponents
          :text="
            item.def +
            (item.ejemplo ? ' Ejemplo: ' + item.ejemplo : '') +
            (item.list ? ' ' + item.list.join(' ') : '')
          "
          class="ml-auto"
          size="sm"
        />
      </li>
    </ul>
  </AmaruModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  InicialDesempenosKeys,
  PrimariaDesempenosKeys,
  type Desempeno,
  type EducationType,
} from '../types/main.ts'
import CopyToClipboardComponents from './CopyToClipboardComponents.vue'
import {
  backgroundColors,
  badgeColorInicial,
  badgeColorPrimaria,
  badgeSelectColor,
  foregroundColors,
} from '../utils/function.ts'
import AmaruModal from './AmaruModal.vue'

const props = defineProps<{
  rawName: string
  title: string
  type: EducationType
  desempeno: Desempeno[]
}>()

const isInicial = props.type === 'inicial'

const selectedColor = isInicial
  ? badgeSelectColor(props.rawName, InicialDesempenosKeys.parse, badgeColorInicial)
  : badgeSelectColor(props.rawName, PrimariaDesempenosKeys.parse, badgeColorPrimaria)

const buttonBackgroundColor = backgroundColors[selectedColor]
const modalHeaderColor = foregroundColors[selectedColor]
const open = ref(false)
</script>
