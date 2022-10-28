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
      <v-tab value="price">판매정보</v-tab>
    </v-tabs>

    <div class="pt-12">
      <!-- 상품정보 탭 -->
      <SettingsComponent v-if="tab === 'settings'" ref="settings" :id="Number(id)" />

      <!-- 이미지/태그 탭 -->
      <ImageUploadComponent v-if="tab === 'images'" ref="images" :id="Number(id)" />
      <TagComponent v-if="tab === 'images'" class="mt-8" :id="Number(id)" />

      <!-- 상세정보 탭 -->
      <EditorComponent v-if="tab === 'editor'" ref="editor" :id="Number(id)" />
      <SizeComponent
        v-if="tab === 'editor'"
        class="mt-4"
        :style="$vuetify.display.smAndDown ? 'margin-top: 60px !important' : ''"
        :id="Number(id)"
      />

      <!-- 판매정보 탭 -->
      <PriceComponent v-if="tab === 'price'" ref="price" :id="Number(id)" />

    </div>

    <!-- 하단 액션 -->
    <div class="text-right" style="margin: 80px 0 20px 0">
      <v-btn
        v-if="$vuetify.display.mdAndUp"
        color="grey-lighten-4"
        class="mr-2"
        size="large"
        flat
        @click="$router.push('/product-list')"
      >
        취소
      </v-btn>
      <v-btn
        color="primary"
        flat
        :class="$vuetify.display.mdAndUp ? 'w-25' : 'w-100'"
        size="large"
        @click="submit"
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