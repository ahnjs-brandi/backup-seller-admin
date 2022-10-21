<template>
  <v-form ref="form" v-model="valid">

    <v-row>
      <v-col cols="12" md="6" class="mb-4">
        <v-btn-toggle
          v-model="product.exhibition"
          :color="product.exhibition ? 'success' : 'charcoal'"
          density="compact"
          mandatory
        >
          <v-btn :value="true">진열</v-btn>
          <v-btn :value="false">미진열</v-btn>
        </v-btn-toggle>

        <v-btn-toggle
          v-model="product.sell"
          :color="product.sell ? 'success' : 'charcoal'"
          density="compact"
          mandatory
          class="ml-6"
        >
          <v-btn :value="true">판매</v-btn>
          <v-btn :value="false">SOLD OUT</v-btn>
        </v-btn-toggle>
      </v-col>
      <v-col cols="12" md="6">
        <div :class="$vuetify.display.mdAndUp ? 'text-right' : ''">
          <v-btn flat color="grey-lighten-4 text-charcoal">
            <v-icon start>sim_card_download</v-icon>
            등록된 상품 복사
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- 기본정보 섹션 -->
    <v-row class="mt-8">
      <v-col cols="12" md="6">
        <div class="section-title">기본정보</div>

        <v-text-field
          v-model="product.name"
          label="상품명"
          counter="50"
          placeholder="상품명을 입력해주세요."
          :rules="nameRules"
          @blur="product.name = product.name!.trim()"
        />

        <v-row dense>
          <v-col cols="6" sm="6">
            <v-select
              v-model="product.category1"
              :items="category1Options"
              label="1차 카테고리"
              :rules="required"
              @update:model-value="product.category2 = null"
            />
          </v-col>

          <v-col cols="6" sm="6">
            <v-select
              v-model="product.category2"
              :items="category2Options"
              :label="product.category1 ? '2차 카테고리' : '1차 카테고리를 선택해 주세요'"
              :disabled="!product.category1"
              :rules="required"
            />
          </v-col>
        </v-row>

        <!-- 상세정보 섹션 -->
        <div class="section-title mt-12">상세정보</div>

        <v-btn-toggle
          v-model="product.delivery"
          density="compact"
          mandatory
        >
          <v-btn value="domestic">국내배송</v-btn>
          <v-btn value="overseas">해외배송</v-btn>
        </v-btn-toggle>

      </v-col>
    </v-row>

    <div class="my-12 text-right">
      <v-btn
        v-if="$vuetify.display.mdAndUp"
        color="grey-lighten-4"
        class="mr-2"
        flat
        @click="cancel"
      >
        취소
      </v-btn>
      <v-btn
        color="primary"
        style="width: 128px"
        flat
        :class="$vuetify.display.mdAndUp ? '' : 'w-100'"
        :size="$vuetify.display.mdAndUp ? 'default' : 'large'"
        @click="submit"
      >
        저장
      </v-btn>
    </div>

  </v-form>
</template>

<script lang="ts" src="./ProductDetail.ts" />
