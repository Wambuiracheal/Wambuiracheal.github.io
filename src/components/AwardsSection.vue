<script setup>
import SectionHeading from './SectionHeading.vue'
import { awards } from '../data/cv.js'

const highlights = {
    '2023': [
        'Winner, Best Female Innovator Engineer, ICT Authority Tech Awards 2023 in collaboration with The Co-operative University of Kenya innovation week 2023',
    ]
}
</script>

<template>
  <section id="awards" class="container-page py-5 sm:py-8">
    <SectionHeading
      index="07"
      title="Awards"
      subtitle="Recognitions and awards received for innovation, leadership, and technical excellence."
    />

    <div v-reveal class="space-y-6">
      <div v-for="(awardsList, year) in highlights" :key="year" class="space-y-3">
        <h3 class="text-lg font-semibold text-slate-100 sm:text-xl">{{ year }}</h3>
        <ul class="space-y-2">
          <li
            v-for="(award, i) in awardsList"
            :key="i"
            class="flex gap-3 text-[13px] leading-relaxed sm:text-sm text-slate-300"
          >
            <span
              class="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-500/15 text-brand-300"
            >
              <AppIcon name="check" :size="14" />
            </span>
            {{ award }}
          </li>
        </ul>
      </div>
    </div>
  </section>
  </template>
}
