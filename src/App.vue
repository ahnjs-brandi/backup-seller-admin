<template>
  <v-app>
    <router-view />
    <DemoDialogComponent />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'v-calendar/dist/style.css';
import DemoDialogComponent from './components/DemoDialogComponent.vue'

export default defineComponent({
  name: 'App',

  components: {
    DemoDialogComponent
  },

  data () {
    return {
      //
    }
  },
})
</script>

<style lang="scss">
  @import './main.scss';
</style>