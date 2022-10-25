<template>
  <v-form ref="basicForm" v-model="validBasicForm">
    <v-row>
      <v-col cols="12" md="6">
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
          <v-btn flat color="grey-lighten-4 text-charcoal" @click="dialogDuplicate = true">
            <v-icon start>sim_card_download</v-icon>
            등록된 상품 복사
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- 등록된 상품 복사 컴포넌트 -->
    <DuplicateComponent v-model="dialogDuplicate" @selectItem="(id: number) => duplicate(id)" />

    <v-row class="mt-16">

      <!-- 상품정보 섹션 -->
      <v-col cols="12" md="6">
        <div id="basic-section" class="section-title">상품 정보</div>

        <v-row dense>
          <v-col cols="12">
            <div class="label">상품명</div>
            <v-text-field
              v-model="product.name"
              density="compact"
              counter="60"
              placeholder="상품명을 입력해주세요."
              :rules="nameRules"
              @blur="product.name = product.name!.trim()"
            />
          </v-col>
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
              :placeholder="product.category1 ? '선택해 주세요' : '1차 카테고리 먼저 선택'"
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
            />
          </v-col>
          <v-col cols="6" sm="6">
            <div class="label">제조국(원산지)</div>
            <v-select
              v-model="product.madeIn"
              :items="['상품 상세 참조', '한국', '중국', '베트남', '기타']"
              density="compact"
            />
          </v-col>
          <v-col cols="6" sm="6">
            <div class="label">코디 상품 사용 여부</div>
            <v-select
              v-model="product.codi"
              :items="['미사용', '사용']"
              density="compact"
            />
          </v-col>
          <v-col cols="6" sm="6">
            <div class="label">안전인증정보</div>
            <v-select
              v-model="product.certification"
              :items="certificationOptions"
              density="compact"
              :hint="certificationHint"
              persistent-hint
            />
          </v-col>
          <template v-if="product.certification === 'provide'">
            <v-col cols="6" sm="6">
              <v-select
                value="안전인증 번호"
                :items="['안전인증 번호', '안전확인 번호', '공급자적합성확인 번호']"
                density="compact"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <v-text-field
                placeholder="인증번호를 입력해주세요."
                density="compact"
                hint="* 허위로 작성한 경우 관계법령에 의거 처벌받을 수 있습니다."
                persistent-hint
              />
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-row>
  </v-form>

  <!-- 상품 이미지 섹션 -->
  <div class="section-title mt-12 mb-6">상품 이미지</div>

  <ImageUploadComponent
    v-model="product.images"
    @validation="validImageForm = $event"
    ref="imageUploadComponent"
  />

  <!-- 상품 상세 정보 섹션 -->
  <div class="section-title mt-12 mb-6">상품 상세 정보</div>

  <EditorComponent />

  <!-- 하단 액션 -->
  <div class="text-right" style="margin: 80px 0 20px 0">
    <v-btn
      v-if="$vuetify.display.mdAndUp"
      color="grey-lighten-4"
      class="mr-2"
      flat
      @click="this.$router.go(-1)"
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
</template>



<script lang="ts" src="./ProductDetail.ts" />
