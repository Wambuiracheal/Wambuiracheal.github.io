<script setup>
// Shared heading used at the top of every section.
defineProps({
  index: { type: String, default: '' }, // section number, e.g. "01"
  title: { type: String, required: true },
  subtitle: { type: String, default: '' }, // optional intro line under the title
})
</script>

<template>
  <div v-reveal class="mb-5 max-w-2xl sm:mb-6">
    <!-- Number + short gradient rule -->
    <div class="mb-2 flex items-center gap-3">
      <span
        v-if="index"
        class="font-display text-sm font-semibold tracking-widest text-brand-400"
        >{{ index }}</span
      >
      <span class="h-px w-10 bg-gradient-to-r from-brand-500 to-transparent"></span>
    </div>
    <h2 class="text-2xl font-bold sm:text-4xl">{{ title }}</h2>
    <p v-if="subtitle" class="mt-2 text-sm leading-relaxed text-slate-400 sm:mt-3 sm:text-base">
      {{ subtitle }}
    </p>
  </div>
</template>
