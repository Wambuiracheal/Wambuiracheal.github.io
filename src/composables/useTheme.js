// Shared theme state: light/dark mode and accent palette.
// The choice is stored on <html> as data-theme / data-accent (style.css reads
// those) and remembered in localStorage. index.html applies the saved values
// before the app loads, so the page doesn't flash the wrong theme.
import { ref, watch } from 'vue'

// Swatch colours shown in the picker; the full palettes live in style.css.
export const accents = [
  { id: 'indigo', label: 'Indigo', swatch: '#6366f1' },
  { id: 'violet', label: 'Violet', swatch: '#8b5cf6' },
  { id: 'rose', label: 'Rose', swatch: '#f43f5e' },
  { id: 'emerald', label: 'Emerald', swatch: '#10b981' },
  { id: 'sky', label: 'Sky', swatch: '#0ea5e9' },
]

const root = document.documentElement

const read = (key) => {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}
const save = (key, value) => {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* storage blocked: the choice just won't be remembered */
  }
}

const prefersLight = window.matchMedia('(prefers-color-scheme: light)')

// Explicit choice, or null to follow the operating system setting.
const savedTheme = read('theme')
const theme = ref(
  savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : prefersLight.matches ? 'light' : 'dark',
)
const accent = ref(accents.some((a) => a.id === read('accent')) ? read('accent') : 'indigo')

watch(theme, (t) => root.setAttribute('data-theme', t), { immediate: true })
watch(accent, (a) => root.setAttribute('data-accent', a), { immediate: true })

// Follow OS changes until the visitor picks a theme themselves.
prefersLight.addEventListener('change', (e) => {
  if (!read('theme')) theme.value = e.matches ? 'light' : 'dark'
})

export function useTheme() {
  return {
    theme,
    accent,
    toggleTheme() {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
      save('theme', theme.value)
    },
    setAccent(id) {
      accent.value = id
      save('accent', id)
    },
  }
}
