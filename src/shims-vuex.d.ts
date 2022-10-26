// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface State {
    drawer: true,
    loading: false,
    pageTitle: '',
    demoDialog: false,
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}