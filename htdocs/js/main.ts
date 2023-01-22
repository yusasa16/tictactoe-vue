import 'normalize.css'
import { createApp } from 'vue'
// @ts-ignore
import Game from './vue/Game.vue'

window.addEventListener('load', function() {
	createApp(Game).mount('#app')
});
