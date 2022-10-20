<template>
  <!-- 좌측 네비게이션 -->
  <left-component />

  <!-- 탑 툴바 -->
  <top-component />

  <v-main>
    <v-card
      elevation="0"
      color="transparent"
      class="py-6 rounded-0"
      height="100%"
      :class="$vuetify.display.xs ? 'px-3' : 'px-6'"
    >
      <!-- 로딩 오버레이 -->
      <v-overlay
        v-model="$store.getters.loading"
        contained
        class="align-center justify-center"
      >
        <v-progress-circular
          indeterminate
          size="64"
          color="primary"
        />
      </v-overlay>

      <!-- 라우터 뷰 -->
      <router-view />

    </v-card>
  </v-main>
</template>

<script lang="ts" src="./LayoutView.ts" />
