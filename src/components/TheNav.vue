<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AppIcon from './AppIcon.vue'
import { navLinks, personal } from '../data/cv.js'

const photoUrl = import.meta.env.BASE_URL + 'racheal.jpg'

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 12
}

function close() {
  menuOpen.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="
      scrolled || menuOpen
        ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-lg'
        : 'border-b border-transparent'
    "
  >
    <nav class="container-page flex h-16 items-center justify-between">
      <a
        href="#top"
        class="flex items-center gap-2.5 font-display text-lg font-bold text-slate-100"
        @click="close"
      >
        <img
          :src="photoUrl"
          alt=""
          class="h-8 w-8 rounded-full object-cover object-top ring-1 ring-white/20"
          @error="($event) => ($event.target.style.display = 'none')"
        />
        RW<span class="text-brand-400">.</span>
      </a>

      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:text-slate-100"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="hidden items-center gap-2 md:flex">
        <a
          :href="personal.github"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          class="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-100"
        >
          <AppIcon name="github" :size="18" />
        </a>
        <a
          :href="`mailto:${personal.email}`"
          class="rounded-lg border border-brand-500/40 bg-brand-500/10 px-3.5 py-2 text-sm font-semibold text-brand-300 transition-colors hover:bg-brand-500/20"
        >
          Get in touch
        </a>
      </div>

      <button
        class="rounded-lg p-2 text-slate-300 md:hidden"
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <AppIcon :name="menuOpen ? 'close' : 'menu'" :size="22" />
      </button>
    </nav>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="menuOpen" class="border-t border-white/10 bg-ink-950/95 md:hidden">
        <ul class="container-page flex flex-col py-3">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="block rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5"
              @click="close"
            >
              {{ link.label }}
            </a>
          </li>
          <li class="mt-2 flex gap-2 px-3">
            <a
              :href="`mailto:${personal.email}`"
              class="flex-1 rounded-lg border border-brand-500/40 bg-brand-500/10 px-3 py-2.5 text-center text-sm font-semibold text-brand-300"
              @click="close"
            >
              Get in touch
            </a>
            <a
              :href="personal.github"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              class="rounded-lg border border-white/10 p-2.5 text-slate-300"
            >
              <AppIcon name="github" :size="18" />
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
