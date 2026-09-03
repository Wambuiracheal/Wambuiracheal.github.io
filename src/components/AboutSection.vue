<script setup>
import AppIcon from './AppIcon.vue'
import SectionHeading from './SectionHeading.vue'
import { personal } from '../data/cv.js'

const facts = [
  { icon: 'pin', label: 'Based in', value: personal.location },
  { icon: 'briefcase', label: 'Focus', value: 'Frontend · Fullstack' },
  { icon: 'sparkle', label: 'Also strong in', value: 'IT support · Networking · Docs' },
  { icon: 'check', label: 'Availability', value: 'Open to opportunities' },
]

const highlights = [
  'Production-grade web apps with React, Vue, JavaScript / TypeScript and Tailwind CSS.',
  'REST API & WebSocket integration; backends in PHP/Laravel, Node/Express and Python/Flask.',
  'Agile delivery — code reviews, CI/CD, and cross-functional work with design, product & QA.',
  'Fast learner across new languages, frameworks and tools, backed by an IT & networking foundation.',
]
</script>

<template>
  <section id="about" class="container-page py-14 sm:py-16">
    <SectionHeading
      index="01"
      title="About me"
      subtitle="A fullstack engineer who leans frontend — turning designs into fast, accessible interfaces, and comfortable going down to the infrastructure when it counts."
    />

    <div class="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      <div v-reveal class="card-surface rounded-2xl p-7 sm:p-8">
        <ul class="space-y-4">
          <li
            v-for="(h, i) in highlights"
            :key="i"
            class="flex gap-3 text-sm leading-relaxed text-slate-300"
          >
            <span
              class="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-500/15 text-brand-300"
            >
              <AppIcon name="check" :size="14" />
            </span>
            {{ h }}
          </li>
        </ul>
      </div>

      <dl v-reveal="{ delay: 100 }" class="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        <div
          v-for="f in facts"
          :key="f.label"
          class="card-surface flex items-center gap-4 rounded-xl p-4"
        >
          <span
            class="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-white/5 text-accent-400"
          >
            <AppIcon :name="f.icon" :size="18" />
          </span>
          <div>
            <dt class="text-[11px] uppercase tracking-widest text-slate-500">
              {{ f.label }}
            </dt>
            <dd class="text-sm font-medium text-slate-200">{{ f.value }}</dd>
          </div>
        </div>
      </dl>
    </div>
  </section>
</template>
