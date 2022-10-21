<template>
  <v-form ref="form" v-model="valid">
    <v-row>
      <v-col cols="12" md="6" class="mb-4">
        <v-btn-toggle
          v-model="product.exhibition"
          :color="product.exhibition ? 'secondary' : ''"
          density="compact"
          mandatory
        >
          <v-btn :value="true" :size="$vuetify.display.mdAndUp ? 'default' : 'small'">진열</v-btn>
          <v-btn :value="false">미진열</v-btn>
        </v-btn-toggle>

        <v-btn-toggle
          v-model="product.sell"
          :color="product.sell ? 'secondary' : ''"
          density="compact"
          mandatory
          class="ml-6"
        >
          <v-btn :value="true" :size="$vuetify.display.mdAndUp ? 'default' : 'small'">판매</v-btn>
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
        <div class="label">상품명</div>
        <v-text-field
          v-model="product.name"
          density="compact"
          counter="60"
          placeholder="상품명을 입력해주세요."
          :rules="nameRules"
          @blur="product.name = product.name!.trim()"
        />

        <v-row dense>
          <v-col cols="6" sm="6">
            <div class="label">1차 카테고리</div>
            <v-select
              v-model="product.category1"
              :items="category1Options"
              :rules="required"
              density="compact"
              placeholder="선택해주세요"
              @update:model-value="product.category2 = null"
            />
          </v-col>

          <v-col cols="6" sm="6">
            <div class="label">2차 카테고리</div>
            <v-select
              v-model="product.category2"
              :items="category2Options"
              density="compact"
              :placeholder="product.category1 ? '선택해 주세요' : '1차 카테고리를 선택해 주세요'"
              :readonly="!product.category1"
              :rules="required"
            />
          </v-col>
          <v-col cols="6" sm="6">
            <div class="label">배송 구분</div>
            <v-select
              v-model="product.delivery"
              :items="deliveryOptions"
              density="compact"
              placeholder="선택해주세요"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <div class="section-title mt-12 mb-6">상품 이미지</div>

    <div class="text-body-2 mb-4 text-secondary">640 * 720 사이즈 이상 등록 가능하며 확장자는 jpg 만 등록 가능합니다.</div>

    <v-row dense>
      <v-col cols="4" md="2" v-for="item in 5" :key="item">
        <v-img
          :src="product[`image${item}`][0] ? getObjectUrl(product[`image${item}`][0]) : require('@/assets/no_image.png')"
          :class="product[`image${item}`][0] ? '' : 'no-image'"
        >
          <v-chip v-if="item === 1" variant="elevated" color="secondary" size="small" class="ma-2">
            대표 이미지
          </v-chip>
        </v-img>
      </v-col>
    </v-row>

    <v-row dense class="mt-6">
      <v-col cols="12" md="2" v-for="item in 5" :key="item">
        <v-file-input
          v-model="product[`image${item}`]"
          accept="image/jpeg"
          :label="item === 1 ? '대표 이미지' : '추가 이미지'"
          single-line
          prepend-icon=""
          :prepend-inner-icon="product[`image${item}`][0] ? '' : 'attach_file'"
          persistent-label
          density="compact"
          hide-details="auto"
          class="file-input"
        />
      </v-col>
    </v-row>

    <div style="height: 900px;"></div>


    <!-- 하단 액션 -->
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

<style lang="scss">
.no-image{
  opacity: .7;
}
</style>
