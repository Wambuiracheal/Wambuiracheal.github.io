<script setup>
import { ref } from 'vue'
import AppIcon from './AppIcon.vue'
import { personal, stats, summary } from '../data/cv.js'

// Each word renders as its own inline-block so lines only break between words.
const roleWords = personal.subtitle.split(' ')

// Surname is split out so it can take the gradient on large screens.
const nameParts = personal.name.split(' ')
const lastName = nameParts.pop()
const firstNames = nameParts.join(' ')

// Portrait lives in /public/racheal.jpg. Resolved against the deploy base
// (works at a domain root and at a GitHub Pages subpath). If the file is
// missing, `imgOk` flips false and a styled placeholder takes its place.
const photoUrl = import.meta.env.BASE_URL + 'racheal.jpg'
const imgOk = ref(true)
</script>

<template>
  <section id="top" class="relative overflow-hidden pt-24 pb-4 sm:pt-28 sm:pb-6 lg:pt-32 lg:pb-8">
    <!-- ambient background -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="blob left-[-6rem] top-[-4rem] h-72 w-72" style="background: var(--color-brand-600)"></div>
      <div class="blob right-[-8rem] top-24 h-80 w-80" style="background: var(--color-accent-500); animation-delay: -6s"></div>
      <div class="absolute inset-0 opacity-[0.06]" style="
          background-image:
            linear-gradient(var(--color-white) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-white) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%);
        "></div>
    </div>

    <!-- Stacked on phones, side by side from md up, a weighted two-column grid from lg up -->
    <div
      class="container-page flex flex-col gap-10 md:flex-row md:items-center md:gap-12 lg:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
      <!-- Text column -->
      <!-- @container lets the name size itself to this column's width -->
      <div class="@container md:min-w-0 md:flex-1">
        <!-- Availability badge with a pulsing status dot -->
        <p v-reveal
          class="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] sm:mb-5 sm:px-4 sm:py-1.5 sm:text-xs font-medium text-slate-300">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
          </span>
          Open to frontend &amp; fullstack roles
        </p>

        <!-- Font size scales with the column width (cqw) so the full name always fits on one line -->
        <h1 v-reveal="{ delay: 60 }"
          class="whitespace-nowrap text-[length:clamp(1.125rem,7.2cqw,3.5rem)] font-extrabold leading-[1.1] tracking-tight">
          {{ firstNames }} <span class="lg:text-gradient">{{ lastName }}</span>
        </h1>

        <p v-reveal="{ delay: 120 }" class="mt-3 text-base font-medium sm:mt-5 sm:text-xl lg:mt-6 lg:text-2xl">
          <span class="text-gradient">{{ personal.title }}</span>
          <span class="text-slate-500"> — </span>
          <span class="text-slate-300">
            <span v-for="(word, i) in roleWords" :key="i" class="mr-[0.3ch] inline-block">{{ word }}</span>
          </span>
        </p>

        <p v-reveal="{ delay: 180 }" class="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:mt-6 sm:text-base lg:mt-7 lg:leading-7">
          {{ summary }}
        </p>

        <!-- Calls to action + social links -->
        <div v-reveal="{ delay: 240 }" class="mt-6 flex flex-wrap items-center gap-2.5 sm:mt-9 sm:gap-3 lg:mt-10">
          <a href="#projects"
            class="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-4 py-2.5 text-sm font-semibold sm:px-5 sm:py-3 text-on-brand shadow-lg shadow-brand-600/25 transition-transform hover:-translate-y-0.5">
            View my work
            <AppIcon name="arrowRight" :size="16" class="transition-transform group-hover:translate-x-1" />
          </a>
          <a :href="`mailto:${personal.email}`"
            class="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold sm:px-5 sm:py-3 text-slate-200 transition-colors hover:bg-white/10">
            <AppIcon name="mail" :size="16" />
            <!-- Full address on larger screens, short label on phones -->
            <span class="hidden sm:inline">{{ personal.email }}</span>
            <span class="sm:hidden">Email me</span>
          </a>
          <div class="flex items-center gap-1">
            <a :href="personal.github" target="_blank" rel="noopener" aria-label="GitHub"
              class="rounded-xl border border-white/10 p-2.5 text-slate-300 sm:p-3 transition-colors hover:bg-white/10 hover:text-white">
              <AppIcon name="github" :size="18" />
            </a>
            <a :href="personal.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"
              class="rounded-xl border border-white/10 p-2.5 text-slate-300 sm:p-3 transition-colors hover:bg-white/10 hover:text-white">
              <AppIcon name="linkedin" :size="18" />
            </a>
          </div>
        </div>
      </div>

      <!-- Portrait column -->
      <div v-reveal="{ delay: 160 }"
        class="relative w-full shrink-0 md:max-w-[17rem] lg:max-w-[23rem] lg:justify-self-end xl:max-w-[25rem]">
        <!-- glow -->
        <div
          class="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/30 via-accent-500/20 to-transparent blur-2xl lg:-inset-8">
        </div>
        <!-- offset outline frame behind the photo (large screens only) -->
        <!-- <div
          class="absolute inset-0 -z-10 hidden translate-x-5 translate-y-5 rounded-[1.75rem] border border-brand-400/30 lg:block">
        </div> -->

        <div
          class="relative aspect-[4/5] overflow-hidden md:aspect-[3/4] rounded-[1.75rem] border border-white/12 bg-ink-800 shadow-2xl shadow-black/40">
          <!-- placeholder sits underneath; the photo covers it once loaded -->
          <div
            class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-600/30 to-accent-500/20">
            <span class="font-display text-6xl font-bold text-white/70">RW</span>
          </div>
          <img :src="photoUrl" alt="Racheal Wambui Njuguna in graduation cap and gown" width="1023" height="1537"
            class="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500"
            :class="imgOk ? 'opacity-100' : 'opacity-0'" @load="imgOk = true" @error="imgOk = false" />
          <!-- blend into page -->
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent">
          </div>
        </div>

        <!-- floating credential chip -->
        <div
          class="absolute -bottom-4 left-4 md:-left-5 flex items-center gap-2 whitespace-nowrap rounded-xl border border-amber-400/25 bg-ink-900/90 px-3 py-2 sm:gap-2.5 sm:px-3.5 sm:py-2.5 shadow-xl backdrop-blur lg:-bottom-6 lg:-left-8 lg:px-4 lg:py-3">
          <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400/15 text-amber-300">
            <AppIcon name="trophy" :size="16" />
          </span>
          <span class="leading-tight">
            <span class="block text-xs font-semibold text-slate-100">Best Female Innovator</span>
            <span class="block text-[11px] text-slate-400">ICT Authority · 2024</span>
          </span>
        </div>

        <!-- location chip, top-right; balances the award chip on large screens -->
        <div
          class="absolute -right-4 top-10 hidden items-center gap-2.5 whitespace-nowrap rounded-xl border border-white/10 bg-ink-900/90 px-3.5 py-2.5 shadow-xl backdrop-blur lg:flex">
          <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500/15 text-accent-400">
            <AppIcon name="pin" :size="16" />
          </span>
          <span class="leading-tight">
            <span class="block text-[11px] text-slate-400">Based in</span>
            <span class="block text-xs font-semibold text-slate-100">{{ personal.location }}</span>
          </span>
        </div>
      </div>
    </div>

    <!-- Stats: 2 columns on phones, 4 across from sm up (values come from cv.js) -->
    <div class="container-page">
      <dl v-reveal="{ delay: 300 }"
        class="mt-8 grid grid-cols-2 gap-px sm:mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4 lg:mt-12">
        <div v-for="s in stats" :key="s.label"
          class="bg-ink-900 px-3 py-4 text-center transition-colors sm:px-5 sm:py-6 lg:py-8 lg:hover:bg-ink-850">
          <dt class="font-display text-xl font-bold text-slate-100 sm:text-3xl lg:text-4xl lg:text-gradient">
            {{ s.value }}
          </dt>
          <dd class="mt-1 text-xs text-slate-400 sm:text-sm">{{ s.label }}</dd>
        </div>
      </dl>
    </div>

    <!-- Scroll hint -->
    <a href="#about"
      class="mx-auto mt-6 flex w-fit sm:mt-8 flex-col items-center gap-1 text-slate-500 transition-colors hover:text-slate-300"
      aria-label="Scroll to about">
      <span class="text-[11px] uppercase tracking-widest">Scroll</span>
      <AppIcon name="arrowDown" :size="18" class="animate-bounce" />
    </a>
  </section>
</template>
