<template>
  <v-snackbar
    v-model="$store.state.snackbar"
    :color="$store.getters.snackbarType === 'error' ? 'error' : 'green'"
    @afterLeave="$store.commit('resetSnackbar')"
  >
    <template v-if="$store.getters.snackbarText">
      {{ $store.getters.snackbarText }}
    </template>
    <template v-else>
      저장 하였습니다.
    </template>

    <template v-slot:actions>
      <v-btn
        variant="text"
        @click="$store.commit('hideSnackbar')"
      >
        닫기
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script type="ts" src="./SnackbarComponent.ts" />
