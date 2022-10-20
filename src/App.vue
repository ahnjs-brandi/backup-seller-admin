<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'v-calendar/dist/style.css';

export default defineComponent({
  name: 'App',

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