<template>
  <div>

    <v-tabs
      v-model="tab"
      color="primary"
      :class="$vuetify.display.smAndDown ? 'tab-fixed' : ''"
    >
      <v-tab value="settings">상품정보</v-tab>
      <v-tab value="images">이미지/태그</v-tab>
      <v-tab value="editor">상세정보</v-tab>
      <v-tab value="price">가격/옵션</v-tab>
    </v-tabs>

    <div class="pt-16">
      <!-- 상품정보 컴포넌트 -->
      <SettingsComponent v-if="tab === 'settings'" ref="settings" :id="Number(id)" />

      <!-- 이미지/태그 컴포넌트 -->
      <ImageUploadComponent v-if="tab === 'images'" ref="images" :id="Number(id)" />
      <TagComponent v-if="tab === 'images'" class="mt-8" :id="Number(id)" />

      <!-- 상세정보 컴포넌트 -->
      <EditorComponent v-if="tab === 'editor'" ref="editor" :id="Number(id)" />
      <SizeComponent v-if="tab === 'editor'" class="mt-8" :id="Number(id)" />


    </div>

    <!-- 하단 액션 -->
    <div class="text-right" style="margin: 80px 0 20px 0">
      <v-btn
        v-if="$vuetify.display.mdAndUp"
        color="grey-lighten-4"
        class="mr-2"
        size="large"
        flat
        @click="$router.go(-1)"
      >
        취소
      </v-btn>
      <v-btn
        color="primary"
        flat
        :class="$vuetify.display.mdAndUp ? 'w-25' : 'w-100'"
        size="large"
        @click="$router.go(-1)"
      >
        저장
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts" src="./ProductDetail.ts" />

<style lang="scss" scoped>
// 모바일 선택 모드일 때 상단에 고정되는 탭 메뉴
.tab-fixed{
  position: fixed;
  width: 100%;
  top: 64px;
  left: 0;
  z-index: 1;
  padding: 0 2px;
  background: white;
  border-bottom: 1px solid #e0e0e0;
}
</style>