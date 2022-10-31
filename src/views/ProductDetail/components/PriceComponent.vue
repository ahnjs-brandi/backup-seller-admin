<template>
  <div>
    <v-btn-toggle
      v-model="saleSettings.exhibition"
      :color="saleSettings.exhibition ? 'primary' : 'error'"
      density="compact"
      mandatory
      class="elevation-2"
    >
      <v-btn :value="true" :size="$vuetify.display.mdAndUp ? 'default' : 'small'">진열</v-btn>
      <v-btn :value="false">미진열</v-btn>
    </v-btn-toggle>

    <v-btn-toggle
      v-model="saleSettings.sell"
      :color="saleSettings.sell ? 'primary' : 'error'"
      density="compact"
      mandatory
      class="ml-6 elevation-2"
    >
      <v-btn :value="true" :size="$vuetify.display.mdAndUp ? 'default' : 'small'">판매</v-btn>
      <v-btn :value="false">SOLD OUT</v-btn>
    </v-btn-toggle>

    <v-row dense class="mt-8 limit-width">
      <v-col cols="12" sm="6" md="4">
        <div class="label">기본 판매가</div>
        <v-text-field
          v-model.number="saleSettings.price"
          type="number"
          suffix="원"
          density="compact"
          min="0"
          step="1000"
          :hint="priceToText(saleSettings.price)"
          :rules="rules.price"
        />
      </v-col>

      <v-col cols="6" sm="3" md="2">
        <div class="label">최소 판매수량</div>
        <v-text-field
          v-model.number="saleSettings.minQuantity"
          type="number"
          suffix="개 이상"
          density="compact"
          min="1"
          max="20"
          :rules="rules.min"
        />
      </v-col>

      <v-col cols="6" sm="3" md="2">
        <div class="label">최대 판매수량</div>
        <v-text-field
          v-model.number="saleSettings.maxQuantity"
          type="number"
          suffix="개 이하"
          density="compact"
          min="1"
          max="20"
          :rules="rules.max"
        />
      </v-col>
    </v-row>

    <!-- 옵션 여부 -->
    <v-switch
      v-if="!optionSettings.generated"
      v-model="saleSettings.useOption"
      :label="saleSettings.useOption ? '옵션 사용' : '옵션 미사용'"
      color="primary"
      class="mt-8 d-flex"
      hide-details
    />

    <!-- 재고관리 -->
    <v-row dense v-if="!saleSettings.useOption" class="d-flex align-center" style="min-height: 92px;">
      <v-col cols="6" sm="3" md="2">
        <v-switch
          v-model="saleSettings.setStock"
          :label="saleSettings.setStock ? '재고 관리' : '재고관리 안함'"
          color="primary"
          hide-details
          class="d-flex"
        />
      </v-col>
      <v-col cols="6" sm="3" md="2" v-if="saleSettings.setStock">
        <div class="label">재고</div>
        <v-text-field
          v-model.number="saleSettings.stock"
          type="number"
          suffix="개"
          density="compact"
          min="1"
          max="20"
          :rules="rules.stock"
        />
      </v-col>
    </v-row>

    <!-- 옵션 사용하면 -->
    <div v-if="saleSettings.useOption">

      <!-- 옵션 생성 컴포넌트 -->
      <OptionGeneratorComponent
        v-if="!optionSettings.generated"
        v-model:optionSettings="optionSettings"
        @generate="generateOptions"
      />

      <!-- 옵션 생성되었으면 -->
      <!-- <template v-if="optionSettings.generated">

        <div class="d-flex align-center mt-6 mb-2">

          <div class="text-subtitle-2">{{ optionItemCount }}개의 옵션</div>

          <v-spacer />

          <v-btn
            variant="text"
            prepend-icon="tag"
            @click="resetOption"
          >
            내 상품코드로 관리
          </v-btn>

          <v-btn
            variant="text"
            prepend-icon="refresh"
            @click="dialogReset = true"
          >
            옵션 초기화
          </v-btn>
        </div>

        <v-divider class="my-1" />
      </template> -->

      <!-- <Confirmation v-model="dialogReset" @confirm="resetOption">
        정말로 옵션을 초기화 하시겠습니까?
      </Confirmation> -->

      <!-- 옵션 아이템 리스트 -->
      <!-- <div
        v-for="(item, index) in optionSettings.optionItems"
        :key="index"
        :style="optionSettings.generated ? '' : 'opacity: .5'"
      >
        <v-row dense class="d-flex align-center" style="min-height: 56px">
          <v-col cols="12" sm="6" md="3">
            <div class="text-subtitle-1 font-weight-medium">{{ item.name }}</div>
          </v-col>

          <v-col cols="6" sm="3" md="2" v-if="!optionSettings.generated">
            <div class="text-body-2">생성 준비됨</div>
          </v-col>

          <v-col cols="6" sm="3" md="2" v-if="optionSettings.generated">
            <v-switch
              v-model="item.setStock"
              color="primary"
              density="compact"
              :label="item.setStock ? '재고 관리' : '재고관리 안함'"
              hide-details
            />
          </v-col>
          <v-col cols="6" sm="3" md="2" v-if="optionSettings.generated && item.setStock">
            <v-text-field
              v-model.number="item.stock"
              type="number"
              suffix="개"
              density="compact"
              min="1"
              max="20"
              hide-details
              :rules="rules.stock"
            />
          </v-col>
        </v-row>

        <v-divider class="my-1" />
      </div> -->
    </div>

  </div>
</template>

<script lang="ts" src="./PriceComponent.ts" />
