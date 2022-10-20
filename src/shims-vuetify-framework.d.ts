import { Framework } from 'vuetify'

declare module 'vue/types/vue' {
  interface CreateComponentPublicInstance {
    $vuetify: Framework
  }
}