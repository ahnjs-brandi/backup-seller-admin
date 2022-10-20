<template>
  <div>
    <div class="d-flex align-center">
      <!-- // 검색필드 -->
      <v-text-field
        v-model="filters.searchText"
        density="compact"
        placeholder="상품번호 / 상품명"
        type="search"
        clearable
        hide-details
        prepend-inner-icon="search"
        :disabled="isSelected"
        @click:clear="$emit('change')"
        @keyup.enter="$emit('change')"
      />
      <!-- // 필터 토글 버튼 -->
      <v-btn
        variant="plain"
        color="charcoal"
        :disabled="isSelected"
        @click="toggleFilter"
      >
        <v-icon start>{{ showFilters ? 'backspace' : 'filter_list' }}</v-icon>
        필터
      </v-btn>
    </div>

    <!-- // 필터영역 -->
    <v-slide-y-transition>
      <v-row dense v-if="showFilters" class="mt-1">
        <v-col cols="6" sm="4">
          <v-select
            v-model="filters.exhibition"
            :items="exhibitionOptions"
            density="compact"
            placeholder="진열여부"
            clearable
            hide-details
            :disabled="isSelected"
            @update:modelValue="$emit('change')"
            @click:clear="$emit('change')"
          />
        </v-col>

        <v-col cols="6" sm="4">
          <v-select
            v-model="filters.sell"
            :items="sellOptions"
            density="compact"
            placeholder="판매여부"
            clearable
            hide-details
            :disabled="isSelected"
            @update:modelValue="$emit('change')"
            @click:clear="$emit('change')"
          />
        </v-col>

        <v-col cols="6" sm="4">
          <v-select
            v-model="filters.discount"
            :items="discountOptions"
            density="compact"
            placeholder="할인여부"
            clearable
            hide-details
            :disabled="isSelected"
            @update:modelValue="$emit('change')"
            @click:clear="$emit('change')"
          />
        </v-col>

        <v-col cols="6" sm="4">
          <v-select
            v-model="filters.category1"
            :items="category1Options"
            density="compact"
            placeholder="카테고리"
            clearable
            hide-details
            :disabled="isSelected"
            @update:modelValue="$emit('change')"
            @click:clear="$emit('change')"
          />
        </v-col>

        <v-col cols="6" sm="4" v-if="filters.category1">
          <v-select
            v-model="filters.category2"
            :items="category2Options"
            density="compact"
            placeholder="상세 카테고리"
            clearable
            hide-details
            no-data-text="프로토타입에서 지원하지 않는 기능입니다."
            :disabled="isSelected"
            @update:modelValue="$emit('change')"
            @click:clear="$emit('change')"
          />
        </v-col>
        <v-col cols="6" sm="4" v-if="filters.category1">
          date picker
        </v-col>
      </v-row>
    </v-slide-y-transition>
  </div>
</template>

<script lang="ts" src="./FilterComponent.ts" />

<style lang="scss" scoped>
//
</style>
