// v-reveal — adds `.is-visible` when the element scrolls into view.
// Usage: <div v-reveal> ... </div>  or  <div v-reveal="{ delay: 120 }">

// One shared observer watches every revealed element. Older browsers without
// IntersectionObserver just show everything immediately.
const supportsObserver =
  typeof window !== 'undefined' && 'IntersectionObserver' in window

const observer = supportsObserver
  ? new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Animate in once, then stop watching so it doesn't re-hide on scroll up.
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      // Trigger when ~12% is visible, slightly before it reaches the bottom edge.
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
  : null

export default {
  mounted(el, binding) {
    // Start hidden (.reveal in style.css); .is-visible fades it in.
    el.classList.add('reveal')

    // Optional stagger so items in a grid appear one after another.
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
