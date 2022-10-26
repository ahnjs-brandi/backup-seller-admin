<template>
  <div>
    <!-- 선택모드 토글 버튼 -->
    <v-btn
      :variant="selectMode ? 'tonal' : 'text'"
      class="mr-2"
      color="charcoal"
      :prepend-icon="selectMode ? 'close' : 'checklist'"
      @click="toggleSelectMode"
    >
      {{ selectMode ? '취소' : '선택' }}
    </v-btn>

    <!-- 상품등록 버튼 -->
    <v-btn
      class="mr-2"
      color="charcoal"
      variant="text"
      prepend-icon="add"
      :disabled="isSelected"
      @click="$router.push('/product-list/product/create')"
    >
      상품추가
    </v-btn>

    <!-- 리스트/카드 보기 토글 버튼 -->
    <v-btn
      variant="text"
      color="charcoal"
      :prepend-icon="viewOption === 'list' ? 'call_to_action' : 'view_list'"
      @click="toggleView"
    >
      보기변경
    </v-btn>
  </div>
</template>

<script lang="ts" src="./ListActionComponent.ts" />
