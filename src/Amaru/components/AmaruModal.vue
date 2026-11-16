<template>
  <div
    v-if="visible"
    @click="emit('close')"
    class="fixed inset-0 flex items-center justify-center bg-black/50 z-1"
  >
    <div @click.stop class="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6">
      <div class="border-b p-4">
        <slot name="header" />
      </div>

      <div flex-1 overflow-y-auto p-4>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'

const props = defineProps<{ visible: boolean }>()

const emit = defineEmits<{
  close: []
}>()

let historyEntryActive = false
let mounted = false

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') emit('close')
}

function handlePopState() {
  if (!historyEntryActive) return

  historyEntryActive = false
  emit('close')
}

function activate() {
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('popstate', handlePopState)

  // Agregar una entrada al historial para interceptar el botón atrás.
  window.history.pushState({ ...window.history.state, modalOpen: true }, '')

  historyEntryActive = true
}

function deactivate() {
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('popstate', handlePopState)

  // Retirar la entrada agregada al historial si todavía existe.
  if (historyEntryActive) {
    historyEntryActive = false
    window.history.back()
  }
}

watch(
  () => props.visible,
  (visible) => {
    if (!mounted) return

    if (visible) {
      activate()
    } else {
      deactivate()
    }
  },
)

onMounted(() => {
  mounted = true

  if (props.visible) {
    activate()
  }
})

onUnmounted(() => {
  deactivate()
  mounted = false
})
</script>
