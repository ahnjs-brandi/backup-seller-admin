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
          <OptionSelectComponent
            v-model="item.value"
            :ref="`color${index}`"
            type="color"
            :duplicateItems="colorOptions.map(item => item.value)"
          />

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
          <OptionSelectComponent
            v-model="item.value"
            :ref="`size${index}`"
            type="size"
            :duplicateItems="sizeOptions.map(item => item.value)"
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
        <div class="label mb-1">{{ generatingItems.length }}개의 옵션이 생성될 예정 입니다.</div>
        <div
          v-for="(item, index) in generatingItems"
          :key="index"
          class="text-body-2"
          >
          {{ item.name }}
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="3" class="pl-md-12 mb-5">
        <v-btn
          color="primary"
          prepend-icon="check"
          :class="$vuetify.display.mdAndUp ? '' : 'w-100'"
          @click="submit"
        >
          옵션 생성
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./OptionGeneratorComponent.ts" />
