<script setup>
// Nav controls: light/dark toggle and an accent colour picker.
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AppIcon from './AppIcon.vue'
import { accents, useTheme } from '../composables/useTheme.js'

const { theme, accent, toggleTheme, setAccent } = useTheme()

const open = ref(false)
const wrapper = ref(null)

// Close the colour popover on outside click or Escape.
const onDocClick = (e) => {
  if (open.value && wrapper.value && !wrapper.value.contains(e.target)) open.value = false
}
const onKey = (e) => {
  if (e.key === 'Escape') open.value = false
}
onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKey)
})
</script>

<template>
  <div ref="wrapper" class="relative flex items-center gap-1">
    <!-- Light / dark toggle -->
    <button
      type="button"
      class="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-100"
      :aria-label="theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'"
      :title="theme === 'light' ? 'Dark theme' : 'Light theme'"
      @click="toggleTheme"
    >
      <AppIcon :name="theme === 'light' ? 'moon' : 'sun'" :size="18" />
    </button>

    <!-- Accent colour picker -->
    <button
      type="button"
      class="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-100"
      aria-label="Change accent colour"
      title="Accent colour"
      aria-haspopup="true"
      :aria-expanded="open"
      @click="open = !open"
    >
      <AppIcon name="palette" :size="18" />
    </button>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-1 scale-95"
      leave-active-class="transition duration-100 ease-in"
      leave-to-class="opacity-0 -translate-y-1 scale-95"
    >
      <div
        v-if="open"
        class="card-surface absolute right-0 top-full z-50 mt-2 w-48 origin-top-right rounded-xl p-3 shadow-xl shadow-black/20"
        role="group"
        aria-label="Accent colour"
      >
        <p class="mb-2 text-xs font-medium uppercase tracking-widest text-slate-500">Accent</p>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="a in accents"
            :key="a.id"
            type="button"
            class="flex h-7 w-7 items-center justify-center rounded-full ring-offset-2 ring-offset-ink-850 transition-transform hover:scale-110"
            :class="accent === a.id ? 'ring-2 ring-slate-300' : ''"
            :style="{ background: a.swatch }"
            :aria-label="a.label"
            :aria-pressed="accent === a.id"
            :title="a.label"
            @click="setAccent(a.id)"
          >
            <AppIcon v-if="accent === a.id" name="check" :size="14" class="text-on-brand" />
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>
