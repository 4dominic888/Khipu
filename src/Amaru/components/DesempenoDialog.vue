<template>
  <button @click="open = true" type="button" class="mb-3 flex items-center gap-1 hover:opacity-70">
    <div
      class="center relative inline-block select-none whitespace-nowrap rounded-lg py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"
      :class="type === 'inicial' ? badgeColorInicial(rawName) : badgeColorPrimaria(rawName)"
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

      <div class="flex-1 overflow-y-auto p-4">
        <ul class="space-y-3">
          <li
            v-for="(item, index) in props.desempeno"
            :key="index"
            class="flex flex-col items-start gap-2 rounded-lg bg-slate-50 p-3 text-sm leading-7 text-slate-700"
          >
            <div class="flex w-full items-baseline gap-3">
              <span
                class="size-1.5 shrink-0 rounded-full"
                :class="
                  type === 'inicial' ? badgeColorInicial(rawName) : badgeColorPrimaria(rawName)
                "
              ></span>

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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onUnmounted } from 'vue'
import type { Desempeno, EducationType } from '../types/main.ts'
import CopyToClipboardComponents from './CopyToClipboardComponents.vue'
import { badgeColorInicial, badgeColorPrimaria } from '../utils/function.ts'

const props = defineProps<{
  rawName: string
  title: string
  type: EducationType
  desempeno: Desempeno[]
}>()

const open = defineModel<boolean>('open')
watch(open, (value) => {
  document.body.classList.toggle('overflow-hidden', value)
})
onUnmounted(() => {
  document.body.classList.remove('overflow-hidden')
})
</script>
