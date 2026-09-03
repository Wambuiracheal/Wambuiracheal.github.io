<script setup>
import SectionHeading from './SectionHeading.vue'
import { experience } from '../data/cv.js'
</script>

<template>
  <section id="experience" class="container-page py-14 sm:py-16">
    <SectionHeading
      index="03"
      title="Experience"
      subtitle="Six roles spanning frontend engineering, backend development, technical documentation, and IT / network support."
    />

    <ol class="relative space-y-10 border-l border-white/10 pl-6 sm:pl-8">
      <li v-for="(job, i) in experience" :key="i" v-reveal="{ delay: 40 }" class="relative">
        <span
          class="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-ink-950 sm:-left-[9px]"
          :class="job.end === 'Present' ? 'bg-accent-400' : 'bg-brand-500'"
        ></span>

        <div class="card-surface rounded-2xl p-6 sm:p-7">
          <div class="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
            <h3 class="text-lg font-semibold text-slate-100">{{ job.role }}</h3>
            <span
              class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400"
            >
              {{ job.start }} — {{ job.end }}
            </span>
          </div>

          <p class="mt-1 text-sm font-medium text-brand-300">
            {{ job.company }}
            <span v-if="job.location" class="text-slate-500">· {{ job.location }}</span>
            <span class="text-slate-500">· {{ job.type }}</span>
          </p>

          <p
            v-if="job.note"
            class="mt-3 rounded-lg border border-accent-500/20 bg-accent-500/[0.06] px-3 py-2 text-xs text-accent-200"
          >
            {{ job.note }}
          </p>

          <ul class="mt-4 space-y-2.5">
            <li
              v-for="(h, hi) in job.highlights"
              :key="hi"
              class="flex gap-3 text-sm leading-relaxed text-slate-400"
            >
              <span class="mt-2 h-1 w-1 flex-none rounded-full bg-brand-400"></span>
              {{ h }}
            </li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>
