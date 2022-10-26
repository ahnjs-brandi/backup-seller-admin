<template>
  <v-row>
    <v-col cols="12" sm="6" md="3">
      <v-img src="@/assets/mock-size.jpeg" width="100%" />
    </v-col>

    <v-col cols="12" sm="6" md="9">
      <div class="text-body-2 text-grey mb-10">*단위 mm</div>
      <v-row dense>
        <v-col cols="3" md="2">
          <v-text-field
            label="사이즈"
            min="0"
            placeholder="ex) XL"
            persistent-placeholder
            variant="underlined"
            density="compact"
          />
        </v-col>
        <v-col cols="3" md="1">
          <v-text-field
            type="number"
            label="총장"
            min="0"
            step="10"
            variant="underlined"
            density="compact"
          />
        </v-col>
        <v-col cols="3" md="1">
          <v-text-field
            type="number"
            label="어깨"
            min="0"
            step="10"
            variant="underlined"
            density="compact"
          />
        </v-col>
        <v-col cols="3" md="1">
          <v-text-field
            type="number"
            label="가슴"
            min="0"
            step="10"
            variant="underlined"
            density="compact"
          />
        </v-col>
        <v-col cols="3" md="1">
          <v-text-field
            type="number"
            label="소매길이"
            min="0"
            step="10"
            variant="underlined"
            density="compact"
          />
        </v-col>
        <v-col cols="3" md="1">
          <v-text-field
            type="number"
            label="소매"
            min="0"
            step="10"
            variant="underlined"
            density="compact"
          />
        </v-col>
        <v-col cols="3" md="1">
          <v-text-field
            type="number"
            label="암홀"
            min="0"
            step="10"
            variant="underlined"
            density="compact"
          />
        </v-col>
        <v-col cols="3" md="1">
          <v-text-field
            type="number"
            label="밑단"
            min="0"
            step="10"
            variant="underlined"
            density="compact"
          />
        </v-col>
      </v-row>

      <v-row dense>
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
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./SizeComponent.ts" />
