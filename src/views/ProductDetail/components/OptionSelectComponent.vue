<template>
  <v-text-field
    :model-value="modelValue"
    density="compact"
    placeholder="선택해 주세요"
    readonly
    hide-details
    @click="open = true"
  />

  <v-dialog v-model="open" scrollable max-width="1200" height="100%" @after-leave="reset">
    <v-card>
      <v-card-title>옵션 검색</v-card-title>
      <v-text-field
        v-model="searchText"
        density="compact"
        placeholder="검색"
        prepend-inner-icon="search"
        hide-details
        class="mt-5 mx-5 flex-grow-0"
        @input="chageKeyword"
        @keydown.enter="selectItem(filteredItems[0])"
      />

      <v-card-text :class="$vuetify.display.smAndDown ? 'px-2' : ''">
        <div class="d-flex flex-column align-start flex-wrap option-select" style="max-height: 100%">
          <v-btn
            v-for="item in filteredItems"
            variant="text"
            class="text-none"
            style="font-weight: 400"
            :key="item"
            :disabled="duplicateItems?.includes(item)"
            @click="selectItem(item)"
          >
            {{ item }}
          </v-btn>
        </div>

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

<script lang="ts" src="./OptionSelectComponent.ts" />
