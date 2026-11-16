<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    size: 'md',
  },
)

const emit = defineEmits<{
  copied: [text: string]
}>()

const isCopied = ref(false)
let timeout: number | undefined

const classSize = computed(() => ({
  sm: 'px-2 py-1 text-xs [&>svg]:h-4 [&>svg]:w-4',
  md: 'px-4 py-2 text-sm [&>svg]:h-5 [&>svg]:w-5',
  lg: 'px-5 py-3 text-base [&>svg]:h-6 [&>svg]:w-6',
}))

function fallbackCopy(text: string): boolean {
  const textarea = document.createElement('textarea')

  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  textarea.style.top = '0'
  textarea.style.left = '0'

  document.body.appendChild(textarea)

  textarea.focus()
  textarea.select()
  textarea.setSelectionRange(0, textarea.value.length)

  const success = document.execCommand('copy')

  textarea.remove()

  return success
}

async function copyToClipboard(text: string): Promise<void> {
  try {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text)
      } catch {
        if (!fallbackCopy(text)) throw new Error('No se pudo copiar')
      }
    } else {
      if (!fallbackCopy(text)) throw new Error('No se pudo copiar')
    }

    isCopied.value = true
    emit('copied', text)

    window.clearTimeout(timeout)

    timeout = window.setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (error) {
    console.error('Error al copiar:', error)
  }
}

onUnmounted(() => {
  window.clearTimeout(timeout)
})
</script>
<template>
  <button
    type="button"
    class="inline-flex items-center gap-2 rounded-lg bg-gray-400 px-4 py-2 text-white transition hover:bg-gray-500 active:scale-95"
    :class="classSize[props.size]"
    @click="copyToClipboard(text)"
  >
    <svg
      v-if="!isCopied"
      class="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>

    <svg
      v-else
      class="h-5 w-5 animate-bounce"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  </button>
</template>
