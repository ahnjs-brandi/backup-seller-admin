import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import filters from './plugins/filters'
import moment from 'moment'
import VCalendar from 'v-calendar';
import { loadFonts } from './plugins/webfontloader'

// 공용 컴포넌트
import DatePicker from './components/DatePickerComponent.vue';
import Confirmation from './components/ConfirmationComponent.vue';

loadFonts()

const app = createApp(App)
  .use(router)
  .use(store)
  .use(VCalendar, {})
  .use(vuetify);

app.config.globalProperties.$moment = moment;
app.config.globalProperties.$filters = filters;

app.component('DatePicker', DatePicker);
app.component('Confirmation', Confirmation);

app.mount('#app')
