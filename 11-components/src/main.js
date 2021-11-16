import { createApp } from 'vue'
import App from './App.vue'
// Global Component -- import Greeting from './components/Greeting.vue'

const vm = createApp(App)

// Global Component -- vm.component('Greeting', Greeting)

vm.mount('#app')
