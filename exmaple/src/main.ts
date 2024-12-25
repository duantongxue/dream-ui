import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import DreamUI from '@dream-man/dream-ui'
// import  '@dream-man/dream-ui/ui/es/dream-ui.css'
const app = createApp(App);
app.use(DreamUI);
app.mount('#app')
