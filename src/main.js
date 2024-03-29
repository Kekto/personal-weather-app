import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";
import VueGoogleMaps from "@fawmi/vue-google-maps";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
const pinia = createPinia();
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
app
	.use(router)
	.use(ElementPlus)
	.use(pinia)
	.use(VueGoogleMaps, {
		load: {
			key: "AIzaSyD4vD_jiEOYTc0sq7_3gJ0xWG1YqSn2aJc",
			language: "en",
		},
	})
	.mount("#app");
