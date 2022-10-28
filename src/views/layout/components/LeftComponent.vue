<template>
  <v-navigation-drawer v-model="$store.state.drawer" class="bg-primary">
    <div class="text-center" style="margin-top: 10px">
      <!-- 브랜디 로고 -->
      <router-link to="/" class="left-logo">
        <v-img src="@/assets/logo_b.png" width="150" class="d-inline-block mr-2" />
      </router-link>
    </div>

    <!-- 네비게이션 -->
    <v-list v-model:opened="open" class="left-menu nanum" open-strategy="single">
      <v-list-item prepend-icon="space_dashboard" title="대쉬보드" to="/dashboard" />

      <!-- 광고 메뉴 그룹 -->
      <v-list-group value="Promotions">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="sell" title="광고" />
        </template>
        <v-list-item title="진행중인 광고" />
        <v-list-item title="유입 현황" />
      </v-list-group>

      <!-- 상품 메뉴 그룹 -->
      <v-list-group value="Products">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="checkroom" title="상품" />
        </template>
        <v-list-item title="상품 리스트" :active="currentView === 'product-list'" to="/product-list" />
        <v-list-item title="상품 추가" to="/product/create" />
        <v-list-item title="가격/재고 관리" />
      </v-list-group>

      <!-- 주문 메뉴 그룹 -->
      <v-list-group value="Oders">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="shopping_cart" title="주문" />
        </template>
        <v-list-item title="새로운 주문" />
        <v-list-item title="취소 리스트" />
      </v-list-group>

      <!-- 정산 메뉴 그룹 -->
      <v-list-group value="Settlement">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="receipt_long" title="정산" />
        </template>
        <v-list-item title="정산 리스트" />
        <v-list-item title="은행 / 사업자 정보" />
      </v-list-group>

      <v-list-item prepend-icon="question_answer" title="문의/답변" />
      <v-list-item prepend-icon="grade" title="리뷰" />
      <v-list-item prepend-icon="settings" title="셀러 설정" />
    </v-list>

    <template v-if="$vuetify.display.smAndDown">
      <v-divider />
      <v-list class="nanum">
        <v-list-item prepend-icon="power_settings_new" title="로그아웃" to="/login" />
        <v-list-item title="내 스토어 바로가기" prepend-icon="open_in_new" @click="openMyStore" />
      </v-list>
    </template>

  </v-navigation-drawer>
</template>

<script type="ts" src="./LeftComponent.ts" />

<style lang="scss">
  .left-logo {
    opacity: .85;
    transition: opacity .3s ease;
    &:hover {
      opacity: 1;
    }
  }
  .left-menu {
    padding-top: 5px;
    .v-list-item-title {
      margin-top: 2px;
    }
    .v-list-group__items {
      background-color: #324381;
    }
  }
</style>
