import Vue from 'nativescript-vue';
import Navigator from 'nativescript-vue-navigator';
import App from '@/components/App.vue';
import {routes} from './routes';
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';


Vue.use(Navigator, { routes });

import VueDevtools from 'nativescript-vue-devtools'
import store from './store'
import {jobService, teste} from "@/notifications/teste";


console.log(android.app.IntentService)

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  // 'fa': './font-awesome.css',
  'ion': './ionicons.css',
  'fa': './assets/css/fontawesome.min.css',
  'fal': './assets/css/light.min.css',
  'far': './assets/css/regular.min.css',
  'fas': './assets/css/solid.min.css',
  'fab': './assets/css/brands.min.css'
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);


if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}



// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(App)]),
}).$start()
