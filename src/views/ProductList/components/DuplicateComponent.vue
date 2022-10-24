<template>
  <v-dialog v-model="dialog" max-width="600" height="100%">
    <v-card>
      <v-card-title>등록된 상품 복사</v-card-title>

      <v-card-text>
        <v-text-field
          v-model="searchText"
          density="compact"
          placeholder="상품명 / 상품번호 검색"
          prepend-inner-icon="search"
          @input="search"
        />

        <v-list density="comfortable">
          <v-list-item
            v-for="item in filteredItems"
            :key="item.code"
            class="py-3"
            @click="selectItem(item)"
          >
            <template v-slot:prepend>
              <v-img :src="item.img" width="50" cover aspect-ratio="1" class="mr-4" />
            </template>
            <v-list-item-title >{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.code }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" src="./DuplicateComponent.ts" />
