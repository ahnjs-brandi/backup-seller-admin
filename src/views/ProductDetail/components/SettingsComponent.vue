<template>
  <v-form ref="form">
    <div class="text-right mt-n12">
      <v-btn
        variant="text"
        prepend-icon="refresh"
        color="charcoal"
        class="mb-4"
        @click="reset"
      >
        상품추가 초기화
      </v-btn>
    </div>

    <v-row>
      <v-col
        v-if="create"
        cols="12"
        md="6"
        :order="$vuetify.display.mdAndUp ? 2 : 1"
        :class="$vuetify.display.mdAndUp ? 'text-right' : ''"
      >
        <v-btn flat color="grey-lighten-4 text-charcoal" @click="dialogDuplicate = true">
          <v-icon start>sim_card_download</v-icon>
          등록된 상품 복사
        </v-btn>

        <!-- 상품검색: 등록된 상품 복사 -->
        <ProductSearchComponent
          v-model="dialogDuplicate"
          @selectItem="(id: number) => onDuplicateSelect(id)"
        />
      </v-col>

      <v-col cols="12" md="6" :order="$vuetify.display.mdAndUp ? 1 : 2">
        <v-row dense>
          <v-col cols="12" md="6" v-if="!create">
            <div class="label">상품번호</div>
            <v-text-field
              v-model="settings.code"
              density="compact"
              readonly
            />
          </v-col>

          <v-col cols="12">
            <div class="label">상품명</div>
            <v-text-field
            v-model="settings.name"
            density="compact"
            counter="100"
            placeholder="상품명을 입력해주세요."
            :rules="[...rules.name, ...rules.noSymbols, ...rules.required]"
            @blur="settings.name = settings.name.trim()"
            />
          </v-col>

          <v-col cols="12">
            <div class="label">한줄 상품 설명</div>
            <v-text-field
              v-model="settings.description"
              density="compact"
              counter="100"
              placeholder="상품설명을 입력해 주세요."
              :rules="[...rules.description, ...rules.noSymbols]"
              @blur="settings.description = settings.description!.trim()"
            />
          </v-col>

          <v-col cols="6" sm="6">
            <div class="label">1차 카테고리</div>
            <v-select
              v-model="settings.category1"
              :items="['자체제작','아우터','상의','바지','원피스','스커트','신발','가방','주얼리','패션소품','언더웨어','홈웨어','비치웨어','빅사이즈','기타']"
              :rules="rules.required"
              density="compact"
              placeholder="선택해주세요"
              @update:model-value="settings.category2 = null"
            />
          </v-col>

          <v-col cols="6" sm="6">
            <div class="label">2차 카테고리</div>
            <v-select
              v-model="settings.category2"
              :items="['티셔츠','셔츠/남방','블라우스','니트/스웨터','후드','맨투맨','나시/민소매','베스트']"
              density="compact"
              :placeholder="settings.category1 ? '선택해 주세요' : '1차 카테고리 먼저'"
              :readonly="!settings.category1"
              :rules="rules.required"
            />
          </v-col>

          <v-col cols="6" sm="6">
            <div class="label">배송 구분</div>
            <v-select
              :value="settings.delivery"
              :items="['국내배송','해외배송']"
              density="compact"
            />
          </v-col>

          <v-col cols="6" sm="6">
            <div class="label">과세 여부</div>
            <v-select
              :value="settings.tax"
              :items="['과세','면세']"
              density="compact"
            />
          </v-col>

          <v-col cols="6" sm="6">
            <div class="label">시즌 구분</div>
            <v-select
              v-model="settings.seasonType"
              :items="['봄','여름','가을','겨울','4계절']"
              placeholder="해당없음"
              clearable
              density="compact"
            />
          </v-col>

          <v-col cols="12" sm="12">
            <v-checkbox
              v-model="settings.custom"
              label="맞춤제작상품"
              color="primary"
              class="my-n3"
              hide-details
            />
            <div class="text-body-2 text-grey ml-3 mb-6">
              * 맞춤제작상품 설정 시, ‘배송준비중’ 상태일 때 취소가 불가능 합니다.
            </div>

            <v-checkbox
              v-model="settings.codi"
              label="코디 상품 사용"
              color="primary"
              class="my-n3"
              hide-details
            />
            <div class="text-body-2 text-grey ml-3 mb-6">
              * 상품 하단에 잘 어울리는 다른 상품들을 추천합니다. (앱에서만 적용)
            </div>

            <div v-if="settings.codi">
              <v-btn color="primary" variant="text" prepend-icon="add_circle" @click="dialogCodi = true">
                코디상품 추가
              </v-btn>
            </div>

            <!-- 상품검색: 코디 상품 검색 -->
            <ProductSearchComponent
              v-model="dialogCodi"
              @selectItem="(id: number) => addCodiProduct(id)"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col v-for="item in settings.codiProducts" :key="item.id" cols="4" sm="3" md="2" lg="1">
        <v-card>
          <v-img :src="item.img" aspect-ratio="1">
            <div class="text-right">
              <v-btn variant="plain" size="small" icon="cancel" @click="removeCodiProduct(item.id)" />
            </div>
          </v-img>
          <v-card-text class="text-center">
            <div>{{ item.code }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-form>
</template>

<script lang="ts" src="./SettingsComponent.ts" />
