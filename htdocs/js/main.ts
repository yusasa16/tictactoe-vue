import 'normalize.css'
import { createApp } from 'vue'
// @ts-ignore
import App from './vue/App.vue'

window.addEventListener('load', function() {
	createApp(App).mount('#app')
});
