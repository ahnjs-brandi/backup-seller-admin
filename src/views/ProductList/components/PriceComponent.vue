<template>
  <div>
    <v-btn-toggle
      v-model="sellOptions.exhibition"
      :color="sellOptions.exhibition ? 'primary' : 'error'"
      density="compact"
      mandatory
      class="elevation-2"
    >
      <v-btn :value="true" :size="$vuetify.display.mdAndUp ? 'default' : 'small'">진열</v-btn>
      <v-btn :value="false">미진열</v-btn>
    </v-btn-toggle>

    <v-btn-toggle
      v-model="sellOptions.sell"
      :color="sellOptions.sell ? 'primary' : 'error'"
      density="compact"
      mandatory
      class="ml-6 elevation-2"
    >
      <v-btn :value="true" :size="$vuetify.display.mdAndUp ? 'default' : 'small'">판매</v-btn>
      <v-btn :value="false">SOLD OUT</v-btn>
    </v-btn-toggle>

    <v-row dense class="mt-8">
      <v-col cols="12" sm="3" md="2">
        <div class="label">기본 판매가</div>
        <v-text-field
          v-model.number="sellOptions.price"
          type="number"
          suffix="원"
          density="compact"
          min="0"
          step="1000"
          :hint="priceToText(sellOptions.price)"
          :rules="rules.price"
        />
      </v-col>
      <v-col cols="6" sm="3" md="2">
        <div class="label">최소 판매수량</div>
        <v-text-field
          v-model.number="sellOptions.minQuantity"
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
          v-model.number="sellOptions.maxQuantity"
          type="number"
          suffix="개 이하"
          density="compact"
          min="1"
          max="20"
          :rules="rules.max"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./PriceComponent.ts" />
