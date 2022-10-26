<template>
  <v-row dense>
    <v-col cols="6" md="3">
      <div class="label">색상 필터</div>

      <v-menu max-height="370">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            class="w-100"
            size="large"
            :class="['화이트','해당없음','민트','라벤더'].includes(colorTitle) ? 'text-charcoal' : 'text-white'"
            style="height: 41px;"
            :style="colorStyle"
          >
            {{ colorTitle }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="tag in colorOptions"
            :key="tag.value"
            :value="tag.value"
            @click="colorTag = tag.value"
          >
            <template v-slot:prepend>
              <div
                class="colorSample elevation-1"
                :class="tag.value === 'na' ? 'na' : ''"
                :style="tag.style"
              />
            </template>
            <v-list-item-title>{{ tag.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>

    <v-col cols="6" md="3">
      <div class="label">스타일 필터</div>
      <v-select
        v-model="styleTag"
        :items="['해당없음','심플베이직','러블리','페미닌','캐주얼','섹시글램','오피스룩','스포츠','바캉스']"
        density="compact"
      />
    </v-col>

    <v-col cols="12" md="12">
      <div class="label">검색 태그</div>
      <div>
        <div v-if="ectTags.length" class="mb-2">
          <v-chip v-for="tag in ectTags" :key="tag" class="ma-1" color="primary">
            {{ tag }}
            <v-icon size="small" class="ml-2 mr-n1" @click="removeTag(tag)">cancel</v-icon>
          </v-chip>
        </div>
        <v-text-field
          v-model="newTag"
          placeholder="태그 추가"
          density="compact"
          style="max-width: 400px"
          :error-messages="tagErrorMessages"
          @keydown.enter="addTag($event)"
          @input="tagErrorMessages = []"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./TagComponent.ts" />

<style lang="scss">
  .colorSample {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    margin-right: 24px;
    &.na {
      box-shadow: none !important;
    }
  }
</style>
