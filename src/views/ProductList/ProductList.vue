<template>
  <!-- 검색 필터 -->
  <v-row dense class="mb-6">
    <v-col cols="12" md="6">
      <!-- 검색필터 컴포넌트-->
      <FilterComponent
        v-model="params"
        :isSelected="isSelected"
        @change="fetchProducts"
      />
    </v-col>

    <v-col
      cols="12"
      md="6"
      class="d-flex mt-6 mt-md-0"
      :class="$vuetify.display.mdAndUp ? 'justify-end' : 'justify-center'"
    >
      <!-- 리스트 액션 컴포넌트 -->
      <ListActionComponent v-model:selectMode="selectMode" :isSelected="isSelected" />
    </v-col>
  </v-row>

  <v-row align="center" class="mb-2" dense>
    <v-col cols="12" md="4" style="min-height: 32px">
      <div v-if="!selectedItems.length" class="font-weight-medium">
        검색결과 {{ products.length }}건
      </div>

      <!-- 선택된 상품 있을 때 메뉴버튼-->
      <v-menu v-else>
        <template v-slot:activator="{ props }">
          <v-btn color="secondary" v-bind="props" :class="$vuetify.display.smAndDown ? 'action-fixed' : ''">
            <b>{{ selectedItems.length }}</b>개 선택됨
            <v-icon end>arrow_drop_down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <div class="pt-2 px-4 text-caption text-primary">다음 상태로 변경합니다</div>
          <v-list-item title="진열" @click="editSelected('exhibition', true)" />
          <v-list-item title="미진열" @click="editSelected('exhibition', false)" />
          <v-list-item title="판매" @click="editSelected('sell', true)" />
          <v-list-item title="미판매 (SOLD OUT)" @click="editSelected('sell', false)" />
          <v-divider />
          <v-list-item title="선택취소" class="text-grey" @click="selectMode = false" />
        </v-list>
      </v-menu>
    </v-col>
  </v-row>

  <!-- 검색결과 없을 때 -->
  <div v-if="!products.length && showNoDataMessage" class="d-flex align-center justify-center h-75">
    <div class="text-center">
      <div :style="`font-size: ${$vuetify.display.mdAndUp ? 100 : 80}px`">
        🧘🏻‍♀️
      </div>
      <div class="text-grey">검색된 상품이 없습니다.</div>
    </div>
  </div>

  <!-- 리스트 뷰 컴포넌트 -->
  <ProductTableList
    v-if="$store.getters.viewOption === 'table' && products.length"
    v-model="selectedItems"
    :products="products"
    :select-mode="selectMode"
  />

  <!-- 카드 뷰 컴포넌트 -->
  <ProductCardList
    v-if="$store.getters.viewOption === 'card' && products.length"
    id="card-list"
    v-model="selectedItems"
    :products="products"
    :select-mode="selectMode"
  />

  <!-- 페이징 -->
  <v-pagination
    v-if="!($vuetify.display.smAndDown && $store.getters.viewOption === 'card')"
    v-model="params.page"
    disabled
    :length="10"
    :total-visible="$vuetify.display.mdAndUp ? 10 : 3"
    class="mt-4"
  />

  <!-- 페이징: 모바일 -->
  <v-btn
    v-else
    size="large"
    variant="text"
    class="w-100 my-2"
    disabled
    style="height: 60px"
  >
    더보기
  </v-btn>

</template>


<script lang="ts" src="./ProductList.ts" />

<style lang="scss" scoped>
// 모바일 선택 모드일 때 상단에 고정되는 액션 버튼
.action-fixed{
  position: fixed;
  top: 78px;
  left: calc(50% - 100px);
  width: 200px;
  z-index: 1;
  height: 40px !important;
  border-radius: 26px;
  font-size: 1rem;
}
</style>