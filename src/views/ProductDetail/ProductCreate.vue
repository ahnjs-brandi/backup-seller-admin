<template>
  <div>
    <!-- Step 메뉴 -->
    <div class="align-center mb-16" :class="$vuetify.display.mdAndUp ? 'd-flex' : ''">
      <template v-for="step in steps" :key="step.value">
        <v-btn
          size="large"
          variant="text"
          :disabled="step.value > access"
          :class="$vuetify.display.mdAndUp ? '' : 'w-100 justify-start'"
          :color="step.value === currentStep ? 'primary' : 'grey'"
          :style="step.value === currentStep ? 'font-weight: 700' : ''"
          @click="currentStep = step.value"
        >
          <v-avatar
            size="28"
            color="primary-lighten-1"
            class="mr-2"
          >
            <v-icon v-if="step.value < access">check</v-icon>
            <span v-else>{{ step.value }}</span>
          </v-avatar>
          {{ step.title }}
        </v-btn>

        <v-divider v-if="step.value < steps.length && $vuetify.display.mdAndUp" />
      </template>
    </div>

    <!-- Step 1: 상품세팅 -->
    <SettingsComponent v-if="currentStep === 1" ref="settings" create />

    <!-- Step 2: 이미지/태그 -->
    <ImageUploadComponent v-if="currentStep === 2" ref="images" create />
    <TagComponent v-if="currentStep === 2" class="mt-8" create />

    <!-- Step 3: 상세정보 -->
    <EditorComponent v-if="currentStep === 3" class="mt-8" create />
    <SizeComponent v-if="currentStep === 3" class="mt-8" create />

    <!-- 하단 액션 -->
    <div class="text-right" style="margin: 80px 0 20px 0">
      <v-btn
        v-if="$vuetify.display.mdAndUp"
        color="grey-lighten-4"
        class="mr-2"
        size="large"
        flat
        @click="cancel"
      >
        취소
      </v-btn>
      <v-btn
        color="primary"
        flat
        :class="$vuetify.display.mdAndUp ? 'w-25' : 'w-100'"
        size="large"
        append-icon="navigate_next"
        @click="submit"
      >
        다음
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts" src="./ProductCreate.ts" />
