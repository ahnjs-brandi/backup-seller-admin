<template>
  <div>
    <!-- 선택모드 토글 버튼 -->
    <v-btn
      variant="text"
      class="mr-2"
      color="charcoal"
      prepend-icon="checklist"
      @click="toggleSelectMode"
    >
      선택
    </v-btn>

    <!-- 상품등록 버튼 -->
    <v-btn
      class="mr-2"
      color="charcoal"
      variant="text"
      prepend-icon="add"
      :disabled="isSelected"
      @click="$router.push('/product/create')"
    >
      상품추가
    </v-btn>

    <!-- 리스트/카드 보기 토글 버튼 -->
    <v-btn
      variant="text"
      color="charcoal"
      :prepend-icon="$store.getters.viewOption === 'table' ? 'call_to_action' : 'view_list'"
      @click="$store.commit('toggleViewOption')"
    >
      보기변경
    </v-btn>
  </div>
</template>

<script lang="ts" src="./ListActionComponent.ts" />
