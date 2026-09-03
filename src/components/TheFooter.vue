<script setup>
import AppIcon from './AppIcon.vue'
import { navLinks, personal } from '../data/cv.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-white/10 py-10">
    <div
      class="container-page flex flex-col items-center justify-between gap-6 sm:flex-row"
    >
      <div class="text-center sm:text-left">
        <p class="font-display font-semibold text-slate-200">
          {{ personal.name }}
        </p>
        <p class="text-xs text-slate-500">
          © {{ year }} · Built with Vue &amp; Tailwind CSS
        </p>
      </div>

      <nav class="flex flex-wrap justify-center gap-x-5 gap-y-2">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-xs font-medium text-slate-500 transition-colors hover:text-slate-200"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-1">
        <a
          :href="personal.github"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          class="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-100"
        >
          <AppIcon name="github" :size="18" />
        </a>
        <a
          :href="personal.linkedin"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          class="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-100"
        >
          <AppIcon name="linkedin" :size="18" />
        </a>
        <a
          :href="`mailto:${personal.email}`"
          aria-label="Email"
          class="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-100"
        >
          <AppIcon name="mail" :size="18" />
        </a>
      </div>
    </div>
  </footer>
</template>
