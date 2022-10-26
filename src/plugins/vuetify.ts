// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, md } from 'vuetify/iconsets/md'

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: '#384787',
    'primary-lighten-1': '#5867A7',
    secondary: '#65a4f1',
    charcoal: '#666666',
    error: '#F4516C',
    success: '#5CBF60',
    warning: '#FFC107',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    }
  },
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    }
  },
})
