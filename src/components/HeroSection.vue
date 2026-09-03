<script setup>
import { ref } from 'vue'
import AppIcon from './AppIcon.vue'
import { personal, stats, summary } from '../data/cv.js'

const roleWords = personal.subtitle.split(' ')

// Portrait lives in /public/racheal.jpg. Resolved against the deploy base
// (works at a domain root and at a GitHub Pages subpath). If the file is
// missing, `imgOk` flips false and a styled placeholder takes its place.
const photoUrl = import.meta.env.BASE_URL + 'racheal.jpg'
const imgOk = ref(true)
</script>

<template>
  <section id="top" class="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-14">
    <!-- ambient background -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="blob left-[-6rem] top-[-4rem] h-72 w-72" style="background: #4f46e5"></div>
      <div
        class="blob right-[-8rem] top-24 h-80 w-80"
        style="background: #06b6d4; animation-delay: -6s"
      ></div>
      <div
        class="absolute inset-0 opacity-[0.06]"
        style="
          background-image:
            linear-gradient(#fff 1px, transparent 1px),
            linear-gradient(90deg, #fff 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%);
        "
      ></div>
    </div>

    <div
      class="container-page grid items-start gap-12 lg:grid-cols-[1.7fr_minmax(0,1fr)] lg:gap-14"
    >
      <!-- Text column -->
      <div>
        <p
          v-reveal
          class="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
            ></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
          </span>
          Open to frontend &amp; fullstack roles
        </p>

        <h1
          v-reveal="{ delay: 60 }"
          class="text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-[4.1rem]"
        >
          {{ personal.name }}
        </h1>

        <p v-reveal="{ delay: 120 }" class="mt-5 text-xl font-medium sm:text-2xl">
          <span class="text-gradient">{{ personal.title }}</span>
          <span class="text-slate-500"> — </span>
          <span class="text-slate-300">
            <span
              v-for="(word, i) in roleWords"
              :key="i"
              class="mr-[0.3ch] inline-block"
              >{{ word }}</span
            >
          </span>
        </p>

        <p
          v-reveal="{ delay: 180 }"
          class="mt-6 max-w-xl text-base leading-relaxed text-slate-400"
        >
          {{ summary }}
        </p>

        <div v-reveal="{ delay: 240 }" class="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            class="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-transform hover:-translate-y-0.5"
          >
            View my work
            <AppIcon
              name="arrowRight"
              :size="16"
              class="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            :href="`mailto:${personal.email}`"
            class="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
          >
            <AppIcon name="mail" :size="16" />
            <span class="hidden sm:inline">{{ personal.email }}</span>
            <span class="sm:hidden">Email me</span>
          </a>
          <div class="flex items-center gap-1">
            <a
              :href="personal.github"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              class="rounded-xl border border-white/10 p-3 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <AppIcon name="github" :size="18" />
            </a>
            <a
              :href="personal.linkedin"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              class="rounded-xl border border-white/10 p-3 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <AppIcon name="linkedin" :size="18" />
            </a>
          </div>
        </div>
      </div>

      <!-- Portrait column -->
      <div
        v-reveal="{ delay: 160 }"
        class="relative mx-auto w-full max-w-[15rem] sm:max-w-[17rem] lg:mx-0 lg:ml-auto lg:-mt-6 lg:max-w-[18rem]"
      >
        <!-- glow -->
        <div
          class="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/30 via-accent-500/20 to-transparent blur-2xl"
        ></div>

        <div
          class="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] border border-white/12 bg-ink-800 shadow-2xl shadow-black/40"
        >
          <!-- placeholder sits underneath; the photo covers it once loaded -->
          <div
            class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-600/30 to-accent-500/20"
          >
            <span class="font-display text-6xl font-bold text-white/70">RW</span>
          </div>
          <img
            :src="photoUrl"
            alt="Racheal Wambui Njuguna in graduation cap and gown"
            width="1023"
            height="1537"
            class="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500"
            :class="imgOk ? 'opacity-100' : 'opacity-0'"
            @load="imgOk = true"
            @error="imgOk = false"
          />
          <!-- blend into page -->
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent"
          ></div>
        </div>

        <!-- floating credential chip -->
        <div
          class="absolute -bottom-4 -left-3 flex items-center gap-2.5 rounded-xl border border-amber-400/25 bg-ink-900/90 px-3.5 py-2.5 shadow-xl backdrop-blur sm:-left-5"
        >
          <span
            class="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400/15 text-amber-300"
          >
            <AppIcon name="trophy" :size="16" />
          </span>
          <span class="leading-tight">
            <span class="block text-xs font-semibold text-slate-100"
              >Best Female Innovator</span
            >
            <span class="block text-[11px] text-slate-400">ICT Authority · 2024</span>
          </span>
        </div>
      </div>
    </div>

    <!-- Stats -->
    <div class="container-page">
      <dl
        v-reveal="{ delay: 300 }"
        class="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4"
      >
        <div v-for="s in stats" :key="s.label" class="bg-ink-900 px-5 py-6 text-center">
          <dt class="font-display text-2xl font-bold text-slate-100 sm:text-3xl">
            {{ s.value }}
          </dt>
          <dd class="mt-1 text-xs text-slate-400 sm:text-sm">{{ s.label }}</dd>
        </div>
      </dl>
    </div>

    <a
      href="#about"
      class="mx-auto mt-10 flex w-fit flex-col items-center gap-1 text-slate-500 transition-colors hover:text-slate-300"
      aria-label="Scroll to about"
    >
      <span class="text-[11px] uppercase tracking-widest">Scroll</span>
      <AppIcon name="arrowDown" :size="18" class="animate-bounce" />
    </a>
  </section>
</template>
