<script setup>
import AppIcon from './AppIcon.vue'
import SectionHeading from './SectionHeading.vue'
import { certificates } from '../data/cv.js'

const base = import.meta.env.BASE_URL
</script>

<template>
  <section id="certificates" class="container-page py-14 sm:py-16">
    <SectionHeading
      index="06"
      title="Certificates"
      subtitle="Courses completed to round out my skills across AI, backend languages, messaging, and infrastructure."
    />

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <a
        v-for="(c, i) in certificates"
        :key="c.file"
        :href="`${base}${c.file}`"
        target="_blank"
        rel="noopener"
        v-reveal="{ delay: (i % 3) * 80 }"
        class="card-surface group flex flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:border-brand-500/40"
      >
        <div class="relative aspect-[4/3] overflow-hidden bg-ink-900">
          <img
            v-if="c.type === 'image'"
            :src="`${base}${c.file}`"
            :alt="c.title"
            loading="lazy"
            class="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
          <div
            v-else
            class="flex h-full w-full flex-col items-center justify-center gap-2 text-brand-300"
          >
            <AppIcon name="doc" :size="32" />
            <span class="text-xs font-medium uppercase tracking-widest text-slate-500">PDF</span>
          </div>
          <span
            class="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink-950/80 text-slate-300 backdrop-blur transition-colors group-hover:text-brand-300"
          >
            <AppIcon name="external" :size="15" />
          </span>
        </div>
        <div class="p-5">
          <h3 class="text-sm font-semibold text-slate-100">{{ c.title }}</h3>
          <p v-if="c.issuer" class="mt-1 text-xs text-slate-500">{{ c.issuer }}</p>
        </div>
      </a>
    </div>
  </section>
</template>
