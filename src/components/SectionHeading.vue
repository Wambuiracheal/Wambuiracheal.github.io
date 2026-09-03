<script setup>
defineProps({
  index: { type: String, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <div v-reveal class="mb-8 max-w-2xl">
    <div class="mb-3 flex items-center gap-3">
      <span
        v-if="index"
        class="font-display text-sm font-semibold tracking-widest text-brand-400"
        >{{ index }}</span
      >
      <span class="h-px w-10 bg-gradient-to-r from-brand-500 to-transparent"></span>
    </div>
    <h2 class="text-3xl font-bold sm:text-4xl">{{ title }}</h2>
    <p v-if="subtitle" class="mt-3 text-base leading-relaxed text-slate-400">
      {{ subtitle }}
    </p>
  </div>
</template>
