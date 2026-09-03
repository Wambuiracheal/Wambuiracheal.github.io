<script setup>
import AppIcon from './AppIcon.vue'
import SectionHeading from './SectionHeading.vue'
import { skills } from '../data/cv.js'
</script>

<template>
  <section id="skills" class="relative py-14 sm:py-16">
    <div class="container-page">
      <SectionHeading
        index="02"
        title="Skills & toolbox"
        subtitle="The languages, frameworks and tools I reach for — grouped by where they sit in the stack."
      />

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(cat, i) in skills"
          :key="cat.group"
          v-reveal="{ delay: (i % 3) * 80 }"
          class="card-surface group rounded-2xl p-6 transition-colors hover:border-brand-500/40"
        >
          <div class="mb-4 flex items-center gap-3">
            <span
              class="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300 transition-colors group-hover:bg-brand-500/25"
            >
              <AppIcon :name="cat.icon" :size="18" />
            </span>
            <h3 class="text-base font-semibold text-slate-100">{{ cat.group }}</h3>
          </div>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="item in cat.items"
              :key="item"
              class="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
