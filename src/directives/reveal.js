// v-reveal — adds `.is-visible` when the element scrolls into view.
// Usage: <div v-reveal> ... </div>  or  <div v-reveal="{ delay: 120 }">

const supportsObserver =
  typeof window !== 'undefined' && 'IntersectionObserver' in window

const observer = supportsObserver
  ? new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
  : null

export default {
  mounted(el, binding) {
    el.classList.add('reveal')

    const delay = binding.value?.delay
    if (delay) el.style.transitionDelay = `${delay}ms`

    if (!observer) {
      el.classList.add('is-visible')
      return
    }
    observer.observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
