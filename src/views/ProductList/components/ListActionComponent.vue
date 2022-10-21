<template>
  <div>
    <!-- 선택모드 토글 버튼 -->
    <v-btn
      :variant="selectMode ? 'tonal' : 'text'"
      class="mr-2"
      color="charcoal"
      @click="toggleSelectMode"
    >
      <template v-if="selectMode">
        <v-icon start>close</v-icon>
        취소
      </template>
      <template v-else>
        <v-icon start>checklist</v-icon>
        선택
      </template>
    </v-btn>

    <!-- 상품등록 버튼 -->
    <v-btn
      class="mr-2"
      color="charcoal"
      variant="text"
      :disabled="isSelected"
      @click="$router.push('/product-list/product/create')"
    >
      <v-icon start>add</v-icon>
      상품추가
    </v-btn>

    <!-- 리스트/카드 보기 토글 버튼 -->
    <v-btn
      variant="text"
      color="charcoal"
      @click="toggleView"
    >
      <template v-if="viewOption === 'list'">
        <v-icon start>call_to_action</v-icon>
        보기변경
      </template>
      <template v-else>
        <v-icon start>view_list</v-icon>
        보기변경
      </template>
    </v-btn>
  </div>
</template>

<script lang="ts" src="./ListActionComponent.ts" />
