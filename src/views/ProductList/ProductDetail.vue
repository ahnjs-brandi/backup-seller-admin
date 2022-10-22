<template>
  <v-form ref="basicForm" v-model="validBasicForm">
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
    <div class="section-title mt-12">기본 정보</div>

    <v-row>
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
  </v-form>

  <v-form ref="imageForm" v-model="validImageForm">

    <div class="section-title mt-12 mb-6">상품 이미지</div>

    <div v-if="$vuetify.display.smAndDown" class="text-body2 text-secondary mb-4">
      스와이프하여 이미지 순서를 변경할 수 있습니다.
    </div>

    <v-row dense>
      <v-col
        cols="4"
        md="2"
        v-for="index in (product.images.length >= 5 ? product.images.length : 5)"
        :key="index"
      >
        <v-img
          :src="product.images[index - 1] ? getObjectUrl(product.images[index - 1]) : require('@/assets/no_image.png')"
          :class="product.images[index - 1] ? '' : 'no-image'"
          :style="index > 5 ? 'opacity: .5; filter: grayscale(100%)' : ''"
          class="image-container"
          cover
          aspect-ratio="1"
          v-touch="{
            left: () => swipe('left', index - 1, e),
            right: () => swipe('right', index - 1),
            up: () => swipe('up', index - 1),
            down: () => swipe('down',  index - 1),
          }"
          @touchstart="e => startDrag(e)"
          @touchend="e => endDrag(e)"
        >
          <div class="h-100 d-flex flex-column">
            <div class="d-flex">
              <v-chip
                v-if="index === 1"
                variant="elevated"
                color="secondary"
                size="x-small"
                class="ma-2"
                style="padding-top: 1px"
              >
                대표 이미지
              </v-chip>

              <v-spacer />

              <!-- 삭제 버튼 -->
              <v-btn
                v-if="product.images[index - 1]"
                icon
                variant="plain"
                size="x-small"
                color="white"
                class="delete-btn"
                style="text-shadow: 1px 1px 1px rgba(0, 0, 0, .3)"
                @click="removeImage(index - 1)"
              >
                <v-icon class="">cancel</v-icon>
              </v-btn>
            </div>

            <!-- 순서변경 버튼 -->
            <div
              v-if="product.images[index - 1] && $vuetify.display.mdAndUp"
              class="move-btns d-flex justify-space-between mt-auto"
            >
              <v-btn
                icon="arrow_back_ios"
                variant="plain"
                size="x-small"
                color="white"
                :disabled="index === 1"
                style="text-shadow: 1px 1px 1px rgba(0, 0, 0, .1)"
                @click="moveImage(index - 1, -1)"
              />
              <v-btn
                icon="arrow_forward_ios"
                variant="plain"
                size="x-small"
                color="white"
                :disabled="index === product.images.length"
                style="text-shadow: 1px 1px 1px rgba(0, 0, 0, .1)"
                @click="moveImage(index - 1, 1)"
              />
            </div>
          </div>
        </v-img>
      </v-col>
    </v-row>

    <v-file-input
      v-model="product.images"
      accept="image/jpeg"
      label="이미지를 최대 5개까지 선택해주세요"
      multiple
      chips
      closable-chips
      single-line
      prepend-icon=""
      :prepend-inner-icon="product.images.length ? '' : 'attach_file'"
      persistent-label
      density="compact"
      hide-details="auto"
      :rules="imageRules"
      class="mt-6"
    >
      <template v-slot:selection="{ fileNames }">
        <template v-for="fileName in fileNames" :key="fileName">
          <v-chip
            size="small"
            color="primary"
            class="mr-2"
          >
            {{ fileName }}
          </v-chip>
        </template>
      </template>
    </v-file-input>

  </v-form>

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

<style lang="scss">
.no-image{
  opacity: .7;
}
.delete-btn, .move-btns {
  opacity: 0;
  transition: opacity .3s;
}

.image-container:hover{
  .delete-btn, .move-btns {
    opacity: 1;
  }
}
</style>
