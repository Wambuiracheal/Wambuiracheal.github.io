import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the build works whether it's served from a domain root
  // or a GitHub Pages project subpath (e.g. /Portfolio/).
  base: './',
  plugins: [vue(), tailwindcss()],
  server: {
    // Native file events are unreliable on some Windows setups; polling makes
    // the dev server pick up every save without a restart.
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
})
