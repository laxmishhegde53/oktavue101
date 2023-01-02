import { createApp } from 'vue'
import { OktaAuth } from '@okta/okta-auth-js'
import OktaVue from '@okta/okta-vue'
import './polyfills'
import App from './App.vue'
import router from './router'

import 'semantic-ui-css/semantic.min.css'

import sampleConfig from '@/config'

const oktaAuth = new OktaAuth(sampleConfig.oidc)

createApp(App)
  .use(router)
  .use(OktaVue, { oktaAuth })
  .mount('#app')
