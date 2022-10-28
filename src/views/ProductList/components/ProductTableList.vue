<template>
  <v-table v-if="products.length">
    <thead>
      <tr>
        <th v-if="selectMode" class="check-column">
          <v-checkbox-btn
            v-model="allSelected"
            color="primary"
            style="font-size: 14px"
            @change="toggleAll"
          />
        </th>
        <th>상품번호</th>
        <th>대표이미지</th>
        <th>상품명</th>
        <th>판매가</th>
        <th>할인판매가</th>
        <th>진열상태</th>
        <th>판매상태</th>
        <th>리뷰</th>
        <th>등록일</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td v-if="selectMode" class="check-column">
          <v-checkbox-btn
            v-model="selected"
            :value="item.id"
            color="primary"
          />
        </td>
        <td>
          <a @click="$router.push(`/product-list/${item.id}?tab=settings`)" class="text-link">
            {{ item.code }}
          </a>
        </td>
        <td>
          <v-img :src="item.img" width="70" aspect-ratio="1" cover class="my-2 rounded d-inline-flex" />
        </td>
        <td style="min-width: 200px; max-width: 200px; white-space: normal; word-break: keep-all;">
          {{ item.name }}
        </td>
        <td>{{ $filters.number(item.price) }}</td>
        <td>{{ $filters.number(item.finalPrice) }}</td>
        <td>
          <span
            class="py-1 px-2 rounded-pill text-caption"
            :class="item.exhibition ? 'bg-success' : 'bg-grey-lighten-2'"
          >
            {{ item.exhibition ? '진열' : '미진열' }}
          </span>
        </td>
        <td>
          <span
            class="py-1 px-2 rounded-pill text-caption"
            :class="item.sell ? 'bg-success' : 'bg-error'"
          >
            {{ item.sell ? '판매' : 'SOLD OUT' }}
          </span>
        </td>
        <td>
          <a v-if="item.review" class="text-link" @click="$store.commit('openDemoDialog')">
            {{ item.review }}개
          </a>
          <span v-else>-</span>
        </td>
        <td>
          {{ $filters.dateTime(item.createdAt) }}
        </td>
        <td>
          <v-btn variant="plain" size="small" prepend-icon="bar_chart">
            판매분석
          </v-btn>
          <v-btn variant="plain" size="small" prepend-icon="search">
            웹에서보기
          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts" src="./ProductTableList.ts" />
