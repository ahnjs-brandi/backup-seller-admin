<template>
  <!--
  혹시몰라: 모바일 2열 레이아웃
  <v-row
    :dense="$vuetify.display.smAndDown"
    class="mx-n3"
  >
    <v-col
      v-for="item in products"
      :key="item.id"
      cols="6"
      sm="6"
      md="3"
      xl="2"
    > -->
  <v-row class="mx-n3">
    <v-col cols="12" v-if="selectMode">
      <v-checkbox-btn
        v-model="allSelected"
        label="전체선택"
        color="secondary"
        class="mb-n4"
        @change="toggleAll"
      />
    </v-col>

    <v-col
      v-for="item in products"
      :key="item.id"
      cols="12"
      sm="6"
      md="3"
      xl="2"
    >
      <v-card class="h-100 d-flex flex-column">
        <!-- 상품 이미지 -->
        <v-img
          :src="item.img"
          aspect-ratio="1"
          cover
          class="pa-2 flex-grow-0"
          @click="checkItem(item.id)"
        >
          <div class="d-flex align-start">
            <span class="status-chip" :class="item.exhibition ? 'bg-success' : 'bg-grey-lighten-2 text-charcoal'">
              {{ item.exhibition ? '진열' : '미진열' }}
            </span>
            <span v-if="!item.sell" class="status-chip bg-error" >
              SOLD OUT
            </span>

            <v-spacer />

            <v-checkbox-btn
              v-if="selectMode"
              v-model="selected"
              :value="item.id"
              color="secondary"
              class="text-white ma-n2"
              style="text-shadow: 1px 1px 1px rgba(0, 0, 0, .1)"
              @click="e => e.stopPropagation()"
            />
          </div>
        </v-img>

        <v-card-text>
          <a @click="$router.push(`/product-list/${item.id}`)" class="text-link">
            {{ item.code }}
          </a>
          <div class="card-title cursor-pointer" @click="$router.push(`/product-list/${item.id}`)">
            {{ item.name }}
          </div>
          <div class="card-price">
            <span v-if="priceChanged(item)" class="discount">
              {{ item.discountPercent }}%
            </span>
            <span class="final-price">
              {{ $filters.number(item.finalPrice) }}원
            </span>
            <span v-if="priceChanged(item)" class="price">
              {{ $filters.number(item.price) }}원
            </span>
          </div>

          <div class="d-flex align-center mt-3">
            <v-rating
              v-model="rating"
              density="compact"
              color="amber"
              half-increments
              readonly
            />
            <a class="text-link ml-2">
              {{ item.review }}개
            </a>

          </div>
        </v-card-text>

        <v-card-actions class="mt-n4">
          <v-spacer />
          <v-btn
            size="small"
            color="primary"
            prepend-icon="bar_chart"
            @click="$store.commit('openDemoDialog')"
          >
            판매분석
          </v-btn>
          <v-btn
            size="small"
            color="primary"
            prepend-icon="search"
            @click="openStore"
          >
            웹에서보기
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./ProductCardList.ts" />

<style lang="scss" scoped>
  .card-title {
    font-size: 16px;
    line-height: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 1rem;
  }
  .card-price {
    font-family: 'NanumSquare';
    font-weight: bold;
    letter-spacing: -.5px;
    .discount {
      color: rgb(var(--v-theme-error));
      font-size: 1.2rem;
    }
    .final-price {
      font-size: 1.2rem;
    }
    .price {
      text-decoration: line-through;
      color: grey;
      word-break: keep-all;
    }
  }
</style>
