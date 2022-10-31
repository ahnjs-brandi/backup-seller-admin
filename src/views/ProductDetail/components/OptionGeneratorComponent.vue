<template>
  <div class="bg-grey-lighten-4 py-1 px-6 rounded limit-width mb-8">

    <v-radio-group
      :model-value="optionSettings.customOption"
      inline
      color="primary"
      hide-details
      class="mt-4"
      @update:model-value="optionSettings.customOption = $event"
    >
      <v-radio label="기본옵션" :value="false" class="mr-4" />
      <v-radio label="커스텀옵션" :value="true" disabled />
    </v-radio-group>

    <v-row dense class="mt-6" v-if="!optionSettings.customOption">
      <v-col cols="12" sm="6" md="3">
        <div class="label">색상옵션</div>
        <div
          v-for="(item, index) in colorOptions"
          :key="index"
          class="d-flex align-center my-2"
        >
          <!-- <v-autocomplete
            v-model="item.value"
            :items="colors"
            density="compact"
            height="10"
            placeholder="색상을 선택해주세요"
            :allow-overflow="false"
            no-data-text="검색 결과가 없습니다."
            hide-details
            @update:model-value="checkDuplicateOption('color', item.value, index)"
          /> -->
          <OptionSelectComponent v-model="item.value" type="color" />

          <v-btn
            size="small"
            icon="cancel"
            variant="plain"
            color="charcoal"
            :disabled="index === 0"
            @click="removeOption('color', index)"
            />
        </div>

        <v-btn
          variant="text"
          size="small"
          color="primary"
          prepend-icon="add_circle"
          class="mb-4"
          @click="addOption('color')"
        >
          색상 추가
        </v-btn>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <div class="label">사이즈옵션</div>
        <div
          v-for="(item, index) in sizeOptions"
          :key="index"
          class="d-flex align-center my-2"
        >
          <v-autocomplete
            v-model="item.value"
            :items="sizes"
            density="compact"
            height="10"
            placeholder="사이즈를 선택해주세요"
            :allow-overflow="false"
            no-data-text="검색 결과가 없습니다."
            hide-details
            @update:model-value="checkDuplicateOption('size', item.value, index)"
          />

          <v-btn
            size="small"
            icon="cancel"
            variant="plain"
            color="charcoal"
            :disabled="index === 0"
            @click="removeOption('size', index)"
          />
        </div>

        <v-btn
          variant="text"
          size="small"
          color="primary"
          prepend-icon="add_circle"
          class="mb-4"
          @click="addOption('size')"
        >
          사이즈 추가
        </v-btn>
      </v-col>

      <v-col cols="12" sm="6" md="3" class="pl-md-12 mb-5">
        <div class="label mb-1">{{ generatingItems.length }}개 생성</div>
        <div
          v-for="(item, index) in generatingItems"
          :key="index"
          class="text-body-2"
        >
          {{ item.name }}
        </div>
      </v-col>
    </v-row>

    <!-- <v-row dense class="my-6">
      <v-col cols="12" sm="12" md="6" class="text-center">
        <v-btn
          color="primary"
          :class="$vuetify.display.mdAndUp ? 'w-50' : 'w-100'"
          @click="generateOptionItems"
        >
          {{ optionItemCount }}개의 상품관리코드 생성
        </v-btn>
      </v-col>
    </v-row> -->
  </div>
</template>

<script lang="ts" src="./OptionGeneratorComponent.ts" />
