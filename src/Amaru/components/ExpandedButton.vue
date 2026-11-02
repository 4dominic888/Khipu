<template>
  <button :class="classes" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const variants = {
  default: 'bg-teal-700 text-white hover:bg-teal-800',
  outline: 'border border-slate-300 bg-white hover:bg-slate-100',
  secondary: 'bg-slate-200 hover:bg-slate-300',
  ghost: 'hover:bg-slate-100',
  destructive: 'bg-red-600 text-white hover:bg-red-700',
} as const

const sizes = {
  default: 'h-10 px-4',
  sm: 'h-8 px-3 text-sm',
  lg: 'h-12 px-6',
  icon: 'size-10',
} as const

type VariantTypes = keyof typeof variants
type Sizes = keyof typeof sizes

const props = withDefaults(
  defineProps<{
    variant?: VariantTypes
    size?: Sizes
  }>(),
  {
    variant: 'default',
    size: 'default',
  },
)

const classes = computed(() => [
  'flex w-full items-center p-8 justify-center rounded-lg transition-colors font-medium',
  variants[props.variant],
  sizes[props.size],
])
</script>
