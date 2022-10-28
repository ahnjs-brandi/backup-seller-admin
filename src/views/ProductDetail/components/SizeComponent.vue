<template>
  <v-row class="limit-width">
    <v-col cols="12">
      <v-btn-toggle
        v-model="show"
        density="compact"
        color="primary"
        mandatory
      >
        <v-btn :value="true">실측사이즈 상세정보에 미포함</v-btn>
        <v-btn :value="false">상세정보에 포함</v-btn>
      </v-btn-toggle>
    </v-col>

    <template v-if="show">
      <v-col cols="12" sm="6" md="3">
        <v-img src="@/assets/mock-size.jpeg" width="100%" />
      </v-col>

      <v-col cols="12" sm="6" md="9">
        <div class="text-body-2 text-grey mb-4">*단위 mm</div>
        <v-row dense v-for="n in sizeCount" :key="n" class="mb-4">
          <v-col cols="3" md="2">
            <v-text-field label="사이즈" min="0" placeholder="ex) XL" variant="underlined" density="compact" hide-details :ref="`size${n}`" />
          </v-col>
          <v-col cols="3" md="1">
            <v-text-field type="number" label="총장" min="0" step="10" variant="underlined" density="compact" hide-details />
          </v-col>
          <v-col cols="3" md="1">
            <v-text-field type="number" label="어깨" min="0" step="10" variant="underlined" density="compact" hide-details />
          </v-col>
          <v-col cols="3" md="1">
            <v-text-field type="number" label="가슴" min="0" step="10" variant="underlined" density="compact" hide-details />
          </v-col>
          <v-col cols="3" md="1">
            <v-text-field type="number" label="소매길이" min="0" step="10" variant="underlined" density="compact" hide-details />
          </v-col>
          <v-col cols="3" md="1">
            <v-text-field type="number" label="소매" min="0" step="10" variant="underlined" density="compact" hide-details />
          </v-col>
          <v-col cols="3" md="1">
            <v-text-field type="number" label="암홀" min="0" step="10" variant="underlined" density="compact" hide-details />
          </v-col>
          <v-col cols="3" md="1">
            <v-text-field type="number" label="밑단" min="0" step="10" variant="underlined" density="compact" hide-details @keydown.enter="addSize" />
          </v-col>
        </v-row>

        <!-- 추가/제거 버튼 -->
        <v-btn color="primary" variant="text" icon="add_circle" size="small" @click="sizeCount++" />
        <v-btn :disabled="sizeCount <= 1" color="primary" variant="text" icon="remove_circle" size="small" @click="sizeCount--" />

        <div class="mt-4" style="overflow-x: auto">
          <v-radio-group :value="1" inline color="primary" hide-details>
            <div class="my-3 mr-3 font-weight-bold flex-shrink-0">안감</div>
            <v-radio label="해당없음" value="1" class="mr-4" />
            <v-radio label="있음" value="2" class="mr-4" />
            <v-radio label="없음" value="3" class="mr-4" />
            <v-radio label="기모" value="4" class="mr-4" />
          </v-radio-group>

          <v-radio-group :value="1" inline color="primary" hide-details>
            <div class="my-3 mr-3 font-weight-bold flex-shrink-0">촉감</div>
            <v-radio label="해당없음" value="1" class="mr-4" />
            <v-radio label="부드러움" value="2" class="mr-4" />
            <v-radio label="보통" value="3" class="mr-4" />
            <v-radio label="까실함" value="4" class="mr-4" />
          </v-radio-group>

          <v-radio-group :value="1" inline color="primary" hide-details>
            <div class="my-3 mr-3 font-weight-bold flex-shrink-0">핏감</div>
            <v-radio label="해당없음" value="1" class="mr-4" />
            <v-radio label="타이트" value="2" class="mr-4" />
            <v-radio label="정사이즈" value="3" class="mr-4" />
            <v-radio label="루즈" value="4" class="mr-4" />
          </v-radio-group>

          <v-radio-group :value="1" inline color="primary" hide-details>
            <div class="my-3 mr-3 font-weight-bold flex-shrink-0">두께감</div>
            <v-radio label="해당없음" value="1" class="mr-4" />
            <v-radio label="도톰" value="2" class="mr-4" />
            <v-radio label="보통" value="3" class="mr-4" />
            <v-radio label="얇음" value="4" class="mr-4" />
          </v-radio-group>

        </div>

        <!-- <v-row dense>
          <v-col cols="6" md="3">
            <div class="label">안감</div>
            <v-select
              density="compact"
              :items="['있음', '없음', '기모']"
              clearable
              placeholder="선택하세요"
            />
          </v-col>
          <v-col cols="6" md="3">
            <div class="label">촉감</div>
            <v-select
              density="compact"
              :items="['부드러움', '보통', '까실함']"
              clearable
              placeholder="선택하세요"
            />
          </v-col>
          <v-col cols="6" md="3">
            <div class="label">핏감</div>
            <v-select
              density="compact"
              :items="['타이트', '정사이즈', '루즈']"
              clearable
              placeholder="선택하세요"
            />
          </v-col>
          <v-col cols="6" md="3">
            <div class="label">두께감</div>
            <v-select
              density="compact"
              :items="['도톰', '보통', '얇음']"
              clearable
              placeholder="선택하세요"
            />
          </v-col>
        </v-row> -->
      </v-col>
    </template>

    <v-col cols="12">
      <v-row dense>
        <v-col cols="6" sm="3">
          <div class="label">제조국(원산지)</div>
          <v-select
            v-model="product.madeIn"
            :items="['상품 상세 참조','한국','중국','베트남','기타']"
            density="compact"
          />
        </v-col>
        <v-col cols="12" sm="3">
          <div class="label">안전인증정보</div>
          <v-select
            v-model="product.certification"
            :items="certificationOptions"
            density="compact"
            :hint="certificationHint"
            persistent-hint
          />
        </v-col>
      </v-row>

      <v-row v-if="product.certification === 'provide'" dense>
        <v-col cols="12" sm="3">
          <div class="label">인증정보 구분</div>
          <v-select
            value="안전인증 번호"
            :items="['안전인증 번호','안전확인 번호','공급자적합성확인 번호']"
            density="compact"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <div class="label">인증번호</div>
          <v-text-field
            placeholder="인증번호를 입력해주세요."
            density="compact"
            hint="* 허위로 작성한 경우 관계법령에 의거 처벌받을 수 있습니다."
            persistent-hint
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./SizeComponent.ts" />
