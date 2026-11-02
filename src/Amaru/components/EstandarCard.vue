<template>
    <div class="rounded-lg border border-purple-200 p-4">
        <div class="flex items-center gap-4 text-purple-700">
            <h2 class="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-700">
                Estándar de aprendizaje
            </h2>
    
            <CopyToClipboardComponents :text="text" class="mb-3"/>
        </div>

        <h3 class="text-sm leading-relaxed text-slate-700 text-justify">
            {{ text }}
        </h3>

    </div>
</template>

<script setup lang="ts">

import CopyToClipboardComponents from "./CopyToClipboardComponents.vue";

defineProps<{
    text: string
}>();
</script>