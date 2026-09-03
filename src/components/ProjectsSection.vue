<script setup>
import { computed } from 'vue'
import AppIcon from './AppIcon.vue'
import SectionHeading from './SectionHeading.vue'
import { projects } from '../data/cv.js'

const featured = computed(() => projects.filter((p) => p.featured))
const more = computed(() => projects.filter((p) => !p.featured))
</script>

<template>
  <section id="projects" class="relative py-14 sm:py-16">
    <div class="container-page">
      <SectionHeading
        index="04"
        title="Selected projects"
        subtitle="Production frontends for fintech, betting and messaging platforms, plus fullstack builds across React, Flask and Laravel."
      />

      <!-- Featured -->
      <div class="grid gap-5 md:grid-cols-3">
        <article
          v-for="(p, i) in featured"
          :key="p.name"
          v-reveal="{ delay: i * 80 }"
          class="card-surface group flex flex-col rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-brand-500/40"
        >
          <div class="mb-4 flex items-center justify-between">
            <span
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/25 to-accent-500/20 text-brand-200"
            >
              <AppIcon name="sparkle" :size="18" />
            </span>
            <a
              v-if="p.url"
              :href="p.url"
              target="_blank"
              rel="noopener"
              :aria-label="`Open ${p.name}`"
              class="text-slate-500 transition-colors group-hover:text-brand-300"
            >
              <AppIcon name="external" :size="18" />
            </a>
          </div>

          <h3 class="text-lg font-semibold text-slate-100">{{ p.name }}</h3>
          <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
            {{ p.description }}
          </p>

          <ul class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="t in p.tech"
              :key="t"
              class="rounded-md bg-white/[0.04] px-2 py-1 text-[11px] font-medium text-slate-400"
            >
              {{ t }}
            </li>
          </ul>
        </article>
      </div>

      <!-- More -->
      <h3
        v-reveal
        class="mt-10 mb-5 font-display text-sm font-semibold uppercase tracking-widest text-slate-500"
      >
        More work
      </h3>
      <div class="grid gap-4 sm:grid-cols-2">
        <article
          v-for="(p, i) in more"
          :key="p.name"
          v-reveal="{ delay: (i % 2) * 70 }"
          class="card-surface rounded-xl p-5"
        >
          <div class="flex items-start justify-between gap-3">
            <h4 class="font-semibold text-slate-200">{{ p.name }}</h4>
            <span
              v-if="p.status"
              class="flex-none rounded-full border border-accent-500/25 bg-accent-500/[0.08] px-2.5 py-0.5 text-[11px] font-medium text-accent-200"
            >
              {{ p.status }}
            </span>
          </div>
          <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ p.description }}</p>
          <div class="mt-3 flex flex-wrap items-center gap-2">
            <span
              v-for="t in p.tech"
              :key="t"
              class="rounded-md bg-white/[0.04] px-2 py-0.5 text-[11px] text-slate-500"
            >
              {{ t }}
            </span>
            <a
              v-if="p.url"
              :href="p.url"
              target="_blank"
              rel="noopener"
              class="ml-auto inline-flex items-center gap-1 text-xs font-medium text-brand-300 hover:text-brand-200"
            >
              View <AppIcon name="external" :size="13" />
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
