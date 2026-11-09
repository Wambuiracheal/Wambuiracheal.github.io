<script setup>
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
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
const slides = awardImages.map((img, i) => ({ ...img, i, src: `${base}awards/web/${img.file}` }))
const total = slides.length

// ---- Infinite carousel ----
// The track is [clone of last, ...slides, clone of first]. Moving past either
// end slides onto a clone, then we silently jump to the matching real slide
// with the transition switched off. The loop always moves in the same direction
// instead of rewinding through every photo.
const track = total > 1 ? [slides[total - 1], ...slides, slides[0]] : slides
const DURATION = 800 // ms
const EASING = 'cubic-bezier(0.65, 0, 0.35, 1)' // smooth ease-in-out

const reducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const pos = ref(total > 1 ? 1 : 0) // index into `track`
const animate = ref(true)
const busy = ref(false)
const current = computed(() => (total > 1 ? (pos.value - 1 + total) % total : 0))

const trackStyle = computed(() => ({
  transform: `translate3d(-${pos.value * 100}%, 0, 0)`,
  transition: animate.value && !reducedMotion ? `transform ${DURATION}ms ${EASING}` : 'none',
}))

let settleTimer = null
const moveTo = (p) => {
  if (busy.value || total < 2) return
  if (reducedMotion) {
    // No animation: wrap directly.
    pos.value = ((p - 1 + total) % total) + 1
    return
  }
  busy.value = true
  pos.value = p
  // Fallback in case transitionend never fires (e.g. tab hidden mid-slide).
  clearTimeout(settleTimer)
  settleTimer = setTimeout(settle, DURATION + 100)
}

// After a slide finishes: if we landed on a clone, jump to the real slide
// without animating, then turn the transition back on.
const settle = async () => {
  clearTimeout(settleTimer)
  if (!busy.value) return
  if (pos.value === 0 || pos.value === total + 1) {
    animate.value = false
    pos.value = pos.value === 0 ? total : 1
    await nextTick()
    // Two frames so the browser applies the jump before re-enabling transitions.
    requestAnimationFrame(() => requestAnimationFrame(() => (animate.value = true)))
  }
  busy.value = false
}
const onTransitionEnd = (e) => {
  if (e.target === e.currentTarget && e.propertyName === 'transform') settle()
}

const next = () => moveTo(pos.value + 1)
const prev = () => moveTo(pos.value - 1)
const go = (i) => moveTo(i + 1)

// Load the current photo and its neighbours ahead of time, so a photo is
// already there when it slides in.
const loaded = ref(new Set())
watch(
  current,
  (c) => [c, (c + 1) % total, (c - 1 + total) % total].forEach((n) => loaded.value.add(n)),
  { immediate: true },
)
const shouldLoad = (i) => loaded.value.has(i)

// Autoplay: pauses on hover/focus, while the tab is hidden, and when the user
// prefers reduced motion.
const INTERVAL = 5000
const paused = ref(false)
let timer = null
const stop = () => timer && clearInterval(timer)
const start = () => {
  stop()
  if (!reducedMotion && total > 1) {
    timer = setInterval(() => !paused.value && !document.hidden && next(), INTERVAL)
  }
}
onMounted(start)
onBeforeUnmount(() => {
  stop()
  clearTimeout(settleTimer)
})

// Restart the timer after manual navigation so it doesn't move again right away.
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
          <!-- Sliding track (with clones at each end for the seamless loop) -->
          <div
            class="flex h-full will-change-transform"
            :style="trackStyle"
            @transitionend="onTransitionEnd"
          >
            <div
              v-for="(s, t) in track"
              :key="`${t}-${s.file}`"
              class="h-full w-full flex-none"
              role="group"
              aria-roledescription="slide"
              :aria-label="`${s.i + 1} of ${total}`"
              :aria-hidden="t !== pos"
            >
              <img
                v-if="shouldLoad(s.i)"
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
            v-if="total > 1"
            type="button"
            class="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink-950/70 text-slate-200 backdrop-blur transition-colors hover:text-brand-300 sm:h-10 sm:w-10"
            aria-label="Previous photo"
            @click="manual(prev)"
          >
            <AppIcon name="chevronLeft" :size="18" />
          </button>
          <button
            v-if="total > 1"
            type="button"
            class="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink-950/70 text-slate-200 backdrop-blur transition-colors hover:text-brand-300 sm:h-10 sm:w-10"
            aria-label="Next photo"
            @click="manual(next)"
          >
            <AppIcon name="chevronRight" :size="18" />
          </button>
        </div>

        <!-- Dots -->
        <div v-if="total > 1" class="flex flex-wrap justify-center gap-2 p-3">
          <button
            v-for="s in slides"
            :key="s.file"
            type="button"
            class="h-2 rounded-full transition-all duration-500"
            :class="s.i === current ? 'w-6 bg-brand-400' : 'w-2 bg-slate-600 hover:bg-slate-400'"
            :aria-label="`Go to photo ${s.i + 1}`"
            :aria-current="s.i === current"
            @click="manual(() => go(s.i))"
          />
        </div>
      </div>
    </div>
  </section>
</template>
