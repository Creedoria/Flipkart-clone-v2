

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'

// importing quasar properties
import { Quasar, Loading , QSpinnerGears } from 'quasar'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const app = createApp(App)
// To import any plugins if requried such as notify etc...,

app.use(Quasar, {
  plugins: {
    Loading
  },
  config: {
    loading: {
      delay: 500,  // Delay in milliseconds before showing the loading indicator.
      message: 'Loading...',  // The loading message.
      spinner: QSpinnerGears,  // The spinner component to use.
      spinnerSize: 80,  // The size of the spinner.
      spinnerColor: 'primary'
    }
  }
})

const pinia = createPinia();
app.use(router)
app.use(pinia);
app.mount('#app')
