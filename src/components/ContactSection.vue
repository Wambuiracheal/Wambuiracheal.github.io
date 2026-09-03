<script setup>
import AppIcon from './AppIcon.vue'
import SectionHeading from './SectionHeading.vue'
import { personal, references } from '../data/cv.js'

const channels = [
  { icon: 'mail', label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: 'phone', label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
  { icon: 'github', label: 'GitHub', value: 'Wambuiracheal', href: personal.github },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'rachealnjugunatech',
    href: personal.linkedin,
  },
]
</script>

<template>
  <section id="contact" class="relative py-14 sm:py-16">
    <div class="container-page">
      <SectionHeading
        index="06"
        title="Let's build something"
        subtitle="Available for frontend and fullstack roles. The fastest way to reach me is email — I usually reply within a day."
      />

      <div class="grid gap-8 lg:grid-cols-2">
        <div v-reveal class="card-surface rounded-2xl p-7 sm:p-8">
          <div class="grid gap-3 sm:grid-cols-2">
            <a
              v-for="c in channels"
              :key="c.label"
              :href="c.href"
              :target="c.href.startsWith('http') ? '_blank' : undefined"
              rel="noopener"
              class="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-brand-500/40 hover:bg-white/[0.06]"
            >
              <span
                class="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-brand-500/15 text-brand-300"
              >
                <AppIcon :name="c.icon" :size="18" />
              </span>
              <span class="min-w-0">
                <span class="block text-[11px] uppercase tracking-widest text-slate-500">
                  {{ c.label }}
                </span>
                <span class="block truncate text-sm font-medium text-slate-200">
                  {{ c.value }}
                </span>
              </span>
            </a>
          </div>

          <div
            class="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-400"
          >
            <AppIcon name="pin" :size="18" class="flex-none text-accent-400" />
            {{ personal.location }} · {{ personal.address }}
          </div>

          <a
            :href="`mailto:${personal.email}`"
            class="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-transform hover:-translate-y-0.5"
          >
            <AppIcon name="mail" :size="16" /> Send me an email
          </a>
        </div>

        <div v-reveal="{ delay: 100 }">
          <h3
            class="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-slate-500"
          >
            References
          </h3>
          <div class="space-y-4">
            <div
              v-for="(r, i) in references"
              :key="i"
              class="card-surface rounded-xl p-5"
            >
              <p class="font-semibold text-slate-100">{{ r.name }}</p>
              <p class="text-sm text-brand-300">{{ r.role }}</p>
              <div class="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-400">
                <a
                  :href="`mailto:${r.email}`"
                  class="inline-flex items-center gap-1.5 hover:text-slate-200"
                >
                  <AppIcon name="mail" :size="14" /> {{ r.email }}
                </a>
                <a
                  :href="`tel:${r.phone}`"
                  class="inline-flex items-center gap-1.5 hover:text-slate-200"
                >
                  <AppIcon name="phone" :size="14" /> {{ r.phone }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
