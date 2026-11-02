<script setup lang="ts">
import PersonalSocialIcon from './Icons/PersonalSocialIcon.vue'
import PsicomotrizIcon from './Icons/PsicomotrizIcon.vue'
import CienciaTecnologiaIcon from './Icons/CienciaTecnologiaIcon.vue'
import MatematicaIcon from './Icons/MatematicaIcon.vue'
import ComunicacionIcon from './Icons/ComunicacionIcon.vue'
import CompetenciasTransversalesIcon from './Icons/CompetenciasTransversalesIcon.vue'
import DefaultIcon from './Icons/DefaultIcon.vue'
import { computed } from 'vue'

type AreasName = keyof typeof icons

const props = defineProps<{
  name: string
}>()

const icons = {
  'Personal Social': PersonalSocialIcon,
  Psicomotriz: PsicomotrizIcon,
  'Ciencia y Tecnología': CienciaTecnologiaIcon,
  Matemática: MatematicaIcon,
  Comunicación: ComunicacionIcon,
  'Competencias Transversales': CompetenciasTransversalesIcon,
} as const

function isIconName(name: string): name is AreasName {
  return name in icons
}

const icon = computed(() => (isIconName(props.name) ? icons[props.name] : DefaultIcon))
</script>

<template>
  <component
    :is="icon"
    class="flex h-11 w-11 p-2 shrink-0 items-center justify-center rounded-lg bg-teal-100 font-bold text-teal-700"
  />
</template>
