<template>
  <v-form ref="imageForm" v-model="valid">

    <p v-if="$vuetify.display.smAndDown" class="text-body-2 text-secondary mb-4">
      스와이프하여 이미지 순서를 변경할 수 있습니다.
    </p>

    <v-row dense>
      <v-col
        cols="4"
        sm="3"
        md="2"
        lg="2"
        xl="1"
        v-for="index in (images.length >= 5 ? images.length : 5)"
        :key="index"
      >
        <!-- 이미지 썸네일 -->
        <v-img
          :src="imgUrls[index - 1] ? imgUrls[index - 1] : require('@/assets/no_image.png')"
          :class="imgUrls[index - 1] ? '' : 'no-image'"
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
          @touchstart="startDrag"
          @touchend="endDrag"
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
                v-if="imgUrls[index - 1]"
                icon
                variant="plain"
                size="small"
                color="white"
                class="delete-btn"
                style="text-shadow: 1px 1px 1px rgba(0, 0, 0, .3)"
                @click="removeImage(index - 1)"
              >
                <v-icon class="">cancel</v-icon>
              </v-btn>
            </div>

            <!-- 순서 변경 버튼 -->
            <div
              v-if="imgUrls[index - 1] && $vuetify.display.smAndUp"
              class="move-btns d-flex justify-space-between mt-auto"
            >
              <v-btn
                icon="arrow_back_ios"
                variant="plain"
                color="white"
                :disabled="index === 1"
                style="text-shadow: 1px 1px 1px rgba(0, 0, 0, .1)"
                @click="moveImage(index - 1, -1)"
              />
              <v-btn
                icon="arrow_forward_ios"
                variant="plain"
                color="white"
                :disabled="index === imgUrls.length"
                style="text-shadow: 1px 1px 1px rgba(0, 0, 0, .1)"
                @click="moveImage(index - 1, 1)"
              />
            </div>
          </div>
        </v-img>
      </v-col>
    </v-row>

    <!-- 파일 업로드 필드 -->
    <v-file-input
      v-model="uploadedImages"
      accept="image/jpeg"
      label="클릭하여 이미지 추가"
      multiple
      single-line
      prepend-icon=""
      prepend-inner-icon="attach_file"
      persistent-label
      :clearable="false"
      density="compact"
      hide-details="auto"
      class="mt-6 cursor-pointer"
      style="max-width: 500px"
      :rules="imageRules"
    >
      <template v-slot:selection>
        {{ images.length < 6 ? '클릭하여 이미지 추가' : '최대 5장의 이미지만 등록 가능 합니다.' }}
      </template>
    </v-file-input>

  </v-form>
</template>

<script lang="ts" src="./ImageUploadComponent.ts" />

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
