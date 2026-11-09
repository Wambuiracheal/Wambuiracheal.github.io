<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import AppIcon from './AppIcon.vue'
import SectionHeading from './SectionHeading.vue'
import { awardImages } from '../data/cv.js'

const highlights = {
  '2023': [
    'Winner, Best Female Innovator Engineer, ICT Authority Tech Awards 2023 in collaboration with The Co-operative University of Kenya innovation week 2023',
  ],
}

// Award photos live in /public/awards/web; prefix with the deploy base so
// they resolve on GitHub Pages subpaths too.
const base = import.meta.env.BASE_URL
const slides = awardImages.map((img) => ({ ...img, src: `${base}awards/web/${img.file}` }))

// ---- Carousel state ----
const current = ref(0)
const total = slides.length
const go = (i) => (current.value = (i + total) % total)
const next = () => go(current.value + 1)
const prev = () => go(current.value - 1)

// Only load the current slide and its neighbours, so the page doesn't pull
// every photo up front.
const loaded = ref(new Set())
watch(
  current,
  (c) => [c, (c + 1) % total, (c - 1 + total) % total].forEach((n) => loaded.value.add(n)),
  { immediate: true },
)
const shouldLoad = (i) => loaded.value.has(i)

// Autoplay: pauses on hover/focus and when the user prefers reduced motion.
const INTERVAL = 5000
const paused = ref(false)
let timer = null
const reducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const start = () => {
  stop()
  if (!reducedMotion) timer = setInterval(() => !paused.value && next(), INTERVAL)
}
const stop = () => timer && clearInterval(timer)
onMounted(start)
onBeforeUnmount(stop)

// Restart the timer after manual navigation so it doesn't jump right away.
const manual = (fn) => {
  fn()
  start()
}

// Touch swipe support.
let touchX = null
const onTouchStart = (e) => (touchX = e.touches[0].clientX)
const onTouchEnd = (e) => {
  if (touchX === null) return
  const dx = e.changedTouches[0].clientX - touchX
  if (Math.abs(dx) > 40) manual(dx < 0 ? next : prev)
  touchX = null
}

const counter = computed(() => `${current.value + 1} / ${total}`)
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
            class="flex gap-3 text-[13px] leading-relaxed text-slate-300 sm:text-sm"
          >
            <span
              class="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-500/15 text-brand-300"
            >
              <AppIcon name="trophy" :size="14" />
            </span>
            {{ award }}
          </li>
        </ul>
      </div>

      <!-- Best Female Innovator photo carousel -->
      <div
        v-if="total"
        class="card-surface overflow-hidden rounded-2xl"
        role="region"
        aria-roledescription="carousel"
        aria-label="Best Female Innovator award photos"
        tabindex="0"
        @mouseenter="paused = true"
        @mouseleave="paused = false"
        @focusin="paused = true"
        @focusout="paused = false"
        @keydown.left.prevent="manual(prev)"
        @keydown.right.prevent="manual(next)"
      >
        <div
          class="relative aspect-[3/2] w-full overflow-hidden bg-ink-900"
          @touchstart.passive="onTouchStart"
          @touchend="onTouchEnd"
        >
          <!-- Sliding track -->
          <div
            class="flex h-full transition-transform duration-500 ease-out motion-reduce:transition-none"
            :style="{ transform: `translateX(-${current * 100}%)` }"
          >
            <div
              v-for="(s, i) in slides"
              :key="s.file"
              class="h-full w-full flex-none"
              role="group"
              aria-roledescription="slide"
              :aria-label="`${i + 1} of ${total}`"
              :aria-hidden="i !== current"
            >
              <img
                v-if="shouldLoad(i)"
                :src="s.src"
                :alt="s.alt"
                decoding="async"
                draggable="false"
                class="h-full w-full select-none object-cover"
              />
            </div>
          </div>

          <!-- Caption badge -->
          <div
            class="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent p-4 sm:p-5"
          >
            <span class="flex items-center gap-2 text-xs font-semibold text-slate-100 sm:text-sm">
              <AppIcon name="trophy" :size="16" class="text-brand-300" />
              Best Female Innovator
            </span>
            <span class="text-xs tabular-nums text-slate-300" aria-live="polite">{{ counter }}</span>
          </div>

          <!-- Prev / next -->
          <button
            type="button"
            class="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink-950/70 text-slate-200 backdrop-blur transition-colors hover:text-brand-300 sm:h-10 sm:w-10"
            aria-label="Previous photo"
            @click="manual(prev)"
          >
            <AppIcon name="chevronLeft" :size="18" />
          </button>
          <button
            type="button"
            class="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink-950/70 text-slate-200 backdrop-blur transition-colors hover:text-brand-300 sm:h-10 sm:w-10"
            aria-label="Next photo"
            @click="manual(next)"
          >
            <AppIcon name="chevronRight" :size="18" />
          </button>
        </div>

        <!-- Dots -->
        <div class="flex flex-wrap justify-center gap-2 p-3">
          <button
            v-for="(s, i) in slides"
            :key="s.file"
            type="button"
            class="h-2 rounded-full transition-all"
            :class="i === current ? 'w-6 bg-brand-400' : 'w-2 bg-slate-600 hover:bg-slate-400'"
            :aria-label="`Go to photo ${i + 1}`"
            :aria-current="i === current"
            @click="manual(() => go(i))"
          />
        </div>
      </div>
    </div>
  </section>
</template>
