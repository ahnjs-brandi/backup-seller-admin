<template>
  <v-dialog v-model="dialog" scrollable max-width="600" height="100%">
    <v-card>
      <v-card-title>상품 검색</v-card-title>
      <v-text-field
        v-model="searchText"
        density="compact"
        placeholder="상품명 / 상품번호 검색"
        prepend-inner-icon="search"
        hide-details
        class="mt-5 mx-5 flex-grow-0"
        @input="chageKeyword"
      />

      <v-card-text :class="$vuetify.display.smAndDown ? 'px-0' : ''">
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

        <div
          v-if="filteredItems.length === 0 && searchText.length > 0"
          class="d-flex justify-center align-center mb-9 text-grey"
          style="height: 100px"
        >
          검색 결과가 없습니다.
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" src="./ProductSearchComponent.ts" />
