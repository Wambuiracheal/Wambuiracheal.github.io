<script setup>
import AppIcon from './AppIcon.vue'
import SectionHeading from './SectionHeading.vue'
import { awards, certifications, education } from '../data/cv.js'
</script>

<template>
  <section id="education" class="container-page py-14 sm:py-16">
    <SectionHeading
      index="05"
      title="Education & recognition"
      subtitle="Formal IT degree, an intensive fullstack program, plus certifications and an innovation award."
    />

    <div class="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
      <!-- Education timeline -->
      <div class="space-y-4">
        <div
          v-for="(ed, i) in education"
          :key="i"
          v-reveal="{ delay: i * 80 }"
          class="card-surface rounded-2xl p-6"
        >
          <div class="flex items-start gap-4">
            <span
              class="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-brand-500/15 text-brand-300"
            >
              <AppIcon name="cap" :size="18" />
            </span>
            <div>
              <div class="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 class="font-semibold text-slate-100">{{ ed.degree }}</h3>
                <span class="text-xs text-slate-500">{{ ed.start }} — {{ ed.end }}</span>
              </div>
              <p class="mt-0.5 text-sm font-medium text-brand-300">
                {{ ed.institution }}
              </p>
              <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ ed.details }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Certs + Awards -->
      <div class="space-y-4">
        <div v-reveal class="card-surface rounded-2xl p-6">
          <h3 class="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-slate-400">
            <AppIcon name="doc" :size="16" /> Certifications
          </h3>
          <ul class="space-y-3">
            <li
              v-for="(c, i) in certifications"
              :key="i"
              class="flex items-start gap-3 text-sm text-slate-300"
            >
              <span
                class="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400"
              >
                <AppIcon name="check" :size="12" />
              </span>
              <span>
                {{ c.name }}
                <span v-if="c.issuer" class="text-slate-500"> · {{ c.issuer }}</span>
              </span>
            </li>
          </ul>
        </div>

        <div
          v-for="(a, i) in awards"
          :key="i"
          v-reveal="{ delay: 80 }"
          class="rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-400/[0.08] to-transparent p-6"
        >
          <div class="flex items-center gap-3">
            <span
              class="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-amber-400/15 text-amber-300"
            >
              <AppIcon name="trophy" :size="18" />
            </span>
            <div>
              <h3 class="font-semibold text-amber-100">{{ a.name }}</h3>
              <p class="text-xs text-amber-200/70">{{ a.issuer }} · {{ a.date }}</p>
            </div>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-amber-100/80">{{ a.context }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
