<template>
  <v-app-bar app flat style="border-bottom: 1px solid #ddd">
    <v-app-bar-nav-icon variant="text" @click.stop="$store.commit('toggleLeftDrawer')" />

    <!-- 페이지 타이틀 -->
    <v-toolbar-title class="nanum" style="margin-top: 2px">
      {{ $store.getters.pageTitle }}
    </v-toolbar-title>

    <v-spacer v-if="$vuetify.display.mdAndUp && !safari" />

    <!-- 전체화면 토글 버튼 -->
    <v-btn
      v-if="$vuetify.display.mdAndUp && !safari"
      icon
      color="charcoal"
      class="mr-2"
      @click="toggleFullscreen"
    >
      <v-icon v-if="fullscreen">fullscreen_exit</v-icon>
      <v-icon v-else>fullscreen</v-icon>
    </v-btn>

    <!-- 어카운트 메뉴 -->
    <v-btn
      v-if="$vuetify.display.mdAndUp"
      text
      class="text-none h-100 rounded-0 text-dense"
      color="charcoal"
    >
      <!-- 상점 프로필 이미지 -->
      슈가파우더
      <v-avatar size="36" class="ml-4">
        <v-img src="@/assets/mock-profile.jpeg" />
      </v-avatar>

      <v-menu activator="parent">
        <v-list>
          <v-list-item title="내 스토어 바로가기" prepend-icon="store" @click="openMyStore" />
          <v-divider />
          <v-list-item title="로그아웃" prepend-icon="power_settings_new" to="/login" />
        </v-list>
      </v-menu>
    </v-btn>

  </v-app-bar>
</template>

<script type="ts" src="./TopComponent.ts" />
