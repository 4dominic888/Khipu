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
defineProps<{ visible: boolean }>()

const emit = defineEmits<{
  close: []
}>()
</script>
