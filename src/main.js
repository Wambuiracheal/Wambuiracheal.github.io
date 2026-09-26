// App entry point: loads global styles, registers the v-reveal scroll
// animation directive app-wide, and mounts the root component into #app
// (see index.html).
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import reveal from './directives/reveal'

createApp(App).directive('reveal', reveal).mount('#app')
